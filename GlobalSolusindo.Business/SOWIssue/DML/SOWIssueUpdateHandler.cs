using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWIssue.EntryForm;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWIssue.DML
{
    public class SOWIssueUpdateHandler : UpdateOperation
    {
        private SOWIssueValidator sowIssueValidator;
        private SOWIssueFactory sowIssueFactory;
        private SOWIssueQuery sowIssueQuery;
        private SOWIssueEntryDataProvider sowIssueEntryDataProvider;

        public SOWIssueUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWIssueValidator sowIssueValidator, SOWIssueFactory sowIssueFactory, SOWIssueQuery sowIssueQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowIssueValidator = sowIssueValidator;
            this.sowIssueFactory = sowIssueFactory;
            this.sowIssueQuery = sowIssueQuery;
            this.sowIssueEntryDataProvider = new SOWIssueEntryDataProvider(db, user, accessControl, sowIssueQuery);
        }

        private void Initialize(SOWIssueValidator sowIssueValidator, SOWIssueFactory sowIssueFactory)
        {
            this.sowIssueValidator = sowIssueValidator;
            this.sowIssueFactory = sowIssueFactory;
        }

        public void Update(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            if (sowIssueDTO == null)
                throw new ArgumentNullException("SOWIssue model is null.");
            tblT_SOWIssue sowIssue = sowIssueFactory.CreateFromDbAndUpdateFromDTO(sowIssueDTO, dateStamp);  
        }

        public SaveResult<SOWIssueEntryModel> Save(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowIssueValidator.Validate(sowIssueDTO);
            bool success = false;
            SOWIssueEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowIssueDTO, dateStamp); 
                Db.SaveChanges();
                model = sowIssueEntryDataProvider.Get(sowIssueDTO.SOWIssue_PK);
            }

            return new SaveResult<SOWIssueEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
