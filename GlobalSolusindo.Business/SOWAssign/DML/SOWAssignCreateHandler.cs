using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.EntryForm;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWAssign.DML
{
    public class SOWAssignCreateHandler : CreateOperation
    {
        private SOWAssignValidator sowAssignValidator;
        private SOWAssignFactory sowAssignFactory;
        private SOWAssignQuery sowAssignQuery;
        private SOWAssignEntryDataProvider sowAssignEntryDataProvider;

        public SOWAssignCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWAssignValidator sowAssignValidator, SOWAssignFactory sowAssignFactory, SOWAssignQuery sowAssignQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowAssignValidator = sowAssignValidator;
            this.sowAssignFactory = sowAssignFactory;
            this.sowAssignQuery = sowAssignQuery;
            this.sowAssignEntryDataProvider = new SOWAssignEntryDataProvider(db, user, accessControl, sowAssignQuery);
        }

        public tblT_SOWAssign Insert(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            if (sowAssignDTO == null)
                throw new ArgumentNullException("SOWAssign model is null.");
            tblT_SOWAssign sowAssign = sowAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
            return Db.tblT_SOWAssign.Add(sowAssign);
        }

        public SaveResult<SOWAssignEntryModel> Save(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowAssignValidator.Validate(sowAssignDTO);
            bool success = false;
            SOWAssignEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWAssign sowAssign = Insert(sowAssignDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowAssignEntryDataProvider.Get(sowAssign.SOWAssign_PK);
            }

            return new SaveResult<SOWAssignEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
