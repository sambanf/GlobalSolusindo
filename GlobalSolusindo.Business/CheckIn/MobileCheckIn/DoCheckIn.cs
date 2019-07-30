using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.Business.SOWTrackResult;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Device.Location;
using System.Linq;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckIn
{
    public class DoCheckIn : CreateOperation
    {
        private CheckInValidator checkInValidator;
        private CheckInFactory checkInFactory;
        private CheckInQuery checkInQuery;
        private CheckInEntryDataProvider checkInEntryDataProvider;


        public DoCheckIn(GlobalSolusindoDb db, tblM_User user, CheckInValidator checkInValidator, CheckInFactory checkInFactory, CheckInQuery checkInQuery, AccessControl accessControl) : base(db, user)
        {
            this.checkInValidator = checkInValidator;
            this.checkInFactory = checkInFactory;
            this.checkInQuery = checkInQuery;
            this.checkInEntryDataProvider = new CheckInEntryDataProvider(db, user, accessControl, checkInQuery);
        }

        public tblT_CheckIn AddCheckIn(MobileCheckInDTO checkInDTO, DateTime dateStamp)
        {
            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            tblT_CheckIn checkIn = checkInFactory.CreateFromDTO(checkInDTO, dateStamp);

            checkIn = Db.tblT_CheckIn.Add(checkIn);

            return checkIn;
        }

        private void AddSOWTrackResultIfUserRoleIsDriver(MobileCheckInDTO checkInDTO, DateTime dateStamp)
        { 
            var possibleDriverRoleNames = new List<string>()
            {
                 "Driver",
                 "DT",
                 "Drive Tester (DT)"
            };

            var jabatans = Db.tblM_KategoriJabatan.Where(x => x.Title.Contains("DT") || x.Title.Contains("Drive") || x.KategoriJabatan_PK == 2);

            var sowAssign = new SOWAssignQuery(Db).GetByPrimaryKey(checkInDTO.SOWAssign_FK);
            if (sowAssign == null)
                throw new NullReferenceException($"Failed to create sow track result while checkin, taskid or assignId '{checkInDTO.SOWAssign_FK}' doesn't exist.");

            var user = Db.tblM_User.Find(sowAssign.User_FK);
            if (user == null)
                throw new NullReferenceException($"Failed to create sow track result while checkin, user id '{sowAssign.User_FK}' doesn't exist.");

            var roleGroups = new RoleGroupQuery(Db).GetByUserFk(sowAssign.User_FK);

            var userIsDriver =
                roleGroups.Where(x => possibleDriverRoleNames.Contains(x.Title)).Count() > 0
                || jabatans.Where(x => x.KategoriJabatan_PK == user.KategoriJabatan_FK).Count() > 0;

            if (userIsDriver)
            {
                if (string.IsNullOrEmpty(checkInDTO.TaskNetwork))
                    throw new Kairos.KairosException($"Task network is required for driver checkin.");

                if (sowAssign != null)
                { 
                    var sowTrack = new SOWTrackQuery(Db).GetBySOWFKAndTechnologyTitle(sowAssign.SOW_FK, checkInDTO.TaskNetwork);

                    if (sowTrack != null)
                    {
                        SOWTrackResultDTO sowTrackResultDTO = new SOWTrackResultDTO()
                        {
                            CheckIn_FK = checkInDTO.CheckIn_PK,
                            SOWTrack_FK = sowTrack.SOWTrack_PK,
                            Status_FK = 1,
                        };
                         
                        SOWTrackResultFactory sowTrackResultFactory = new SOWTrackResultFactory(Db, User);
                        tblT_SOWTrackResult sowTrackResult = sowTrackResultFactory.CreateFromDTO(sowTrackResultDTO, dateStamp);
                        Db.tblT_SOWTrackResult.Add(sowTrackResult);
                    }
                    else
                    {
                        throw new Kairos.KairosException($"Invalid task network '{checkInDTO.TaskNetwork}', it's not registered in sow register.");
                    }
                }
            }
        }

        public SaveResult<CheckInEntryModel> Save(MobileCheckInDTO checkInDTO, DateTime dateStamp)
        {
            checkInDTO.WaktuCheckIn = dateStamp;

            var checkins = checkInQuery.GetQuery().Where(x => x.SOWAssign_FK == checkInDTO.SOWAssign_FK).ToList();

            var uncheckedOuts = checkins.Where(x => x.WaktuCheckOut == null);
            if (uncheckedOuts != null)
            {
                if (uncheckedOuts.Count() > 0)
                {
                    throw new Kairos.KairosException($"Task ID '{uncheckedOuts.FirstOrDefault().SOWAssign_FK}' is not checked out. Cannot checkin, until previous task checked out.");
                }
            }

            ModelValidationResult validationResult = checkInValidator.Validate(checkInDTO);
            bool success = false;
            CheckInEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_CheckIn checkIn = AddCheckIn(checkInDTO, dateStamp);
                Db.SaveChanges();
                checkInDTO.CheckIn_PK = checkIn.CheckIn_PK;
                AddSOWTrackResultIfUserRoleIsDriver(checkInDTO, dateStamp);
                Db.SaveChanges();
                success = true;
                model = checkInEntryDataProvider.Get(checkIn.CheckIn_PK);
            }

            BTSQuery bTSQuery = new BTSQuery(Db);
            SOWQuery sOWQuery = new SOWQuery(Db);
            SOWAssignQuery sOWAssignQuery = new SOWAssignQuery(Db);
            int sowpk = sOWAssignQuery.GetByPrimaryKey(checkInDTO.SOWAssign_FK).SOW_FK;
            int btspk = sOWQuery.GetByPrimaryKey(sowpk).BTS_FK;
            var btslat = bTSQuery.GetByPrimaryKey(btspk).Latitude;
            var btslong = bTSQuery.GetByPrimaryKey(btspk).Longitude;
            bTSQuery.GetByPrimaryKey(10);

            var sCoord = new GeoCoordinate(Convert.ToDouble(checkInDTO.LatitudeCheckIn), Convert.ToDouble(checkInDTO.LongitudeCheckIn));
            var eCoord = new GeoCoordinate(Convert.ToDouble(btslat), Convert.ToDouble(btslong));
            var distance = sCoord.GetDistanceTo(eCoord); // in Meters

            if (distance>= Convert.ToDouble(ConfigurationManager.AppSettings["Distance"]))
            {
                throw new Kairos.KairosException($"Your CheckIn Distance is " + Math.Round(distance,2) + " meters from BTS, the minimum distance to check in is " + ConfigurationManager.AppSettings["Distance"] + " meters");
            }

            return new SaveResult<CheckInEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
