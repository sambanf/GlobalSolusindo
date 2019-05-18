using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.Business.SOWTrackResult;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.Data;
using System;
using System.Collections.Generic;
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
                 "DT"
            };

            var sowAssign = new SOWAssignQuery(Db).GetByPrimaryKey(checkInDTO.SOWAssign_FK);
            var roleGroups = new RoleGroupQuery(Db).GetByUserFk(sowAssign.User_FK); 

            if (roleGroups.Where(x => possibleDriverRoleNames.Contains(x.Title)).Count() > 0)
            {
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

                        if (sowTrackResultDTO == null)
                            throw new ArgumentNullException("SOWTrackResult model is null.");
                        SOWTrackResultFactory sowTrackResultFactory = new SOWTrackResultFactory(Db, User);
                        tblT_SOWTrackResult sowTrackResult = sowTrackResultFactory.CreateFromDTO(sowTrackResultDTO, dateStamp);
                        Db.tblT_SOWTrackResult.Add(sowTrackResult);
                    }
                }
            }
        }

        public SaveResult<CheckInEntryModel> Save(MobileCheckInDTO checkInDTO, DateTime dateStamp)
        {
            checkInDTO.WaktuCheckIn = dateStamp;

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
