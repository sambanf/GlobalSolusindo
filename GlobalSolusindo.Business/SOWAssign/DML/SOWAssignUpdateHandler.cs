using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.EntryForm;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWAssign.DML
{
    public class SOWAssignUpdateHandler : UpdateOperation
    {
        private SOWAssignValidator sowAssignValidator;
        private SOWAssignFactory sowAssignFactory;
        private SOWAssignQuery sowAssignQuery;
        private SOWAssignEntryDataProvider sowAssignEntryDataProvider;

        public SOWAssignUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWAssignValidator sowAssignValidator, SOWAssignFactory sowAssignFactory, SOWAssignQuery sowAssignQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowAssignValidator = sowAssignValidator;
            this.sowAssignFactory = sowAssignFactory;
            this.sowAssignQuery = sowAssignQuery;
            this.sowAssignEntryDataProvider = new SOWAssignEntryDataProvider(db, user, accessControl, sowAssignQuery);
        }

        private void Initialize(SOWAssignValidator sowAssignValidator, SOWAssignFactory sowAssignFactory)
        {
            this.sowAssignValidator = sowAssignValidator;
            this.sowAssignFactory = sowAssignFactory;
        }

        public void Update(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            if (sowAssignDTO == null)
                throw new ArgumentNullException("SOWAssign model is null.");
            tblT_SOWAssign sowAssign = sowAssignFactory.CreateFromDbAndUpdateFromDTO(sowAssignDTO, dateStamp);  
        }

        public SaveResult<SOWAssignEntryModel> Save(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowAssignValidator.Validate(sowAssignDTO);
            bool success = false;
            SOWAssignEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowAssignDTO, dateStamp); 
                Db.SaveChanges();
                model = sowAssignEntryDataProvider.Get(sowAssignDTO.SOWAssign_PK);
            }

            return new SaveResult<SOWAssignEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
