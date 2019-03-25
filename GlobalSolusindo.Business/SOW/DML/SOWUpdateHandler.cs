using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWUpdateHandler : UpdateOperation
    {
        private SOWValidator sowValidator;
        private SOWFactory sowFactory;
        private SOWQuery sowQuery;
        private SOWEntryDataProvider sowEntryDataProvider;
        private SOWAssignFactory sowAssignFactory;

        public SOWUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator sowValidator, SOWFactory sowFactory, SOWAssignFactory sowAssignFactory, SOWQuery sowQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
            this.sowQuery = sowQuery;
            this.sowAssignFactory = sowAssignFactory;
            this.sowEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, sowQuery);
        }

        private void Initialize(SOWValidator sowValidator, SOWFactory sowFactory)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
        }

        private void UpdateSowAssign(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");

            foreach (var sowAssignDTO in sowDTO.SOWAssigns)
            {
                sowAssignDTO.SOW_FK = sowDTO.SOW_PK;
                tblT_SOWAssign existingSowAssign = this.Db.tblT_SOWAssign.Find(sowAssignDTO.SOWAssign_PK);

                bool isAssigned = existingSowAssign.User_FK != 0;
                bool assignedUserIsChanged = existingSowAssign.User_FK != sowAssignDTO.User_FK;
                if (isAssigned && assignedUserIsChanged)
                {
                    //create new row (history) based on changed user assign, and set its finish date
                    tblT_SOWAssign sowAssign = sowAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
                    sowAssign.User_FK = existingSowAssign.User_FK;
                    sowAssign.TglSelesai = dateStamp;
                    Db.tblT_SOWAssign.Add(sowAssign);
                }
                //note that, CreateFromDbAndUpdateFromDTO method is also create a Modified state in db context object
                //so any update process is in the factory class
                tblT_SOWAssign sowAssignToUpdate = sowAssignFactory.CreateFromDbAndUpdateFromDTO(sowAssignDTO, dateStamp);
            }
        }

        public void Update(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW sow = sowFactory.CreateFromDbAndUpdateFromDTO(sowDTO, dateStamp);
        }

        public SaveResult<SOWEntryModel> Save(SOWDTO sowDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowValidator.Validate(sowDTO);
            bool success = false;
            SOWEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                Update(sowDTO, dateStamp);
                SaveChanges();
                UpdateSowAssign(sowDTO, dateStamp);
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
