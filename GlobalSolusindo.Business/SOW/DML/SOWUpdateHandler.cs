using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWTrack;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWUpdateHandler : UpdateOperation
    {
        private SOWValidator sowValidator;
        private SOWFactory sowFactory;
        private SOWQuery sowQuery;
        private SOWEntryDataProvider sowEntryDataProvider;
        private SOWAssignFactory sowAssignFactory;
        private SOWTrackFactory sowTrackFactory;


        public SOWUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator sowValidator, SOWFactory sowFactory, SOWAssignFactory sowAssignFactory, SOWTrackFactory sowTrackFactory, SOWQuery sowQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
            this.sowQuery = sowQuery;
            this.sowAssignFactory = sowAssignFactory;
            this.sowTrackFactory = sowTrackFactory;
            this.sowEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, sowQuery);
        }

        private void Initialize(SOWValidator sowValidator, SOWFactory sowFactory)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
        }

        private void UpdateSowTrack(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");

            var tracks = Db.tblT_SOWTrack.Where(x => x.SOW_FK == sowDTO.SOW_PK);
            foreach (var track in tracks)
            {
                Db.tblT_SOWTrack.Remove(track);
            }
            foreach (var sowTrackDTO in sowDTO.SOWTracks)
            {
                if (sowTrackDTO.TipePekerjaan_FK == 0)
                {
                    continue;
                }
                sowTrackDTO.SOW_FK = sowDTO.SOW_PK;
                var bts = new BTSQuery(Db).GetByPrimaryKey(sowDTO.BTS_FK);
                tblT_SOWTrack sowTrack = sowTrackFactory.CreateFromDTO(sowTrackDTO, dateStamp);
                Db.tblT_SOWTrack.Add(sowTrack);
            }
        }

        private void UpdateSowAssign(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");

            foreach (var sowAssignDTO in sowDTO.SOWAssigns)
            {
                sowAssignDTO.SOW_FK = sowDTO.SOW_PK;
                tblT_SOWAssign existingSowAssign = null;
                if (sowAssignDTO.SOWAssign_PK != 0)
                {
                    existingSowAssign = this.Db.tblT_SOWAssign.Find(sowAssignDTO.SOWAssign_PK);
                }

                bool isAssigned = false;

                if (existingSowAssign != null)
                {
                    isAssigned = existingSowAssign.User_FK != 0;
                }

                int assignedUserFk = 0;
                if (existingSowAssign != null && existingSowAssign.User_FK != null)
                {
                    assignedUserFk = existingSowAssign.User_FK.Value;
                }

                bool assignedUserIsChanged = assignedUserFk != sowAssignDTO.User_FK;
                if (isAssigned && assignedUserIsChanged)
                {
                    //create new row (history) based on changed user assign, and set its finish date
                    tblT_SOWAssign sowAssign = sowAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
                    sowAssign.User_FK = assignedUserFk;
                    sowAssign.TglSelesai = dateStamp;
                    Db.tblT_SOWAssign.Add(sowAssign);
                }
                //note that, CreateFromDbAndUpdateFromDTO method is also create a Modified state in db context object
                //so any update process is in the factory class
                if (sowAssignDTO.SOWAssign_PK != 0)
                {
                    tblT_SOWAssign sowAssignToUpdate = sowAssignFactory.CreateFromDbAndUpdateFromDTO(sowAssignDTO, dateStamp);
                }
                else
                {
                    if (assignedUserIsChanged)
                    {
                        sowAssignDTO.SOW_FK = sowDTO.SOW_PK;
                        sowAssignDTO.TglMulai = dateStamp;
                        tblT_SOWAssign sowAssignToBeAdded = sowAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
                        Db.tblT_SOWAssign.Add(sowAssignToBeAdded);
                    }
                }
            }
        }

        public void UpdateSOW(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW sow = sowFactory.CreateFromDbAndUpdateFromDTO(sowDTO, dateStamp);

            if (sow.TglSelesai != null)
            {
                throw new Kairos.KairosException("Cannot update this SOW because already been approved/rejected.");
            }
        }

        public SaveResult<SOWEntryModel> Save(SOWDTO sowDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowValidator.Validate(sowDTO);
            bool success = false;
            SOWEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateSOW(sowDTO, dateStamp);
                SaveChanges();
                UpdateSowAssign(sowDTO, dateStamp);
                UpdateSowTrack(sowDTO, dateStamp);
                SaveChanges();

                model = sowEntryDataProvider.Get(sowDTO.SOW_PK);
            }

            return new SaveResult<SOWEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
