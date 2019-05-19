using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWIssue.EntryForm;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWIssue.DML
{
    public class SOWIssueCreateHandler : CreateOperation
    {
        private SOWIssueValidator sowIssueValidator;
        private SOWIssueFactory sowIssueFactory;
        private SOWIssueQuery sowIssueQuery;
        private SOWIssueEntryDataProvider sowIssueEntryDataProvider;

        public SOWIssueCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWIssueValidator sowIssueValidator, SOWIssueFactory sowIssueFactory, SOWIssueQuery sowIssueQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowIssueValidator = sowIssueValidator;
            this.sowIssueFactory = sowIssueFactory;
            this.sowIssueQuery = sowIssueQuery;
            this.sowIssueEntryDataProvider = new SOWIssueEntryDataProvider(db, user, accessControl, sowIssueQuery);
        }

        public tblT_SOWIssue Insert(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            if (sowIssueDTO == null)
                throw new ArgumentNullException("SOWIssue model is null.");
            tblT_SOWIssue sowIssue = sowIssueFactory.CreateFromDTO(sowIssueDTO, dateStamp);
            return Db.tblT_SOWIssue.Add(sowIssue);
        }

        public SaveResult<SOWIssueEntryModel> Save(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowIssueValidator.Validate(sowIssueDTO);
            bool success = false;
            SOWIssueEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWIssue sowIssue = Insert(sowIssueDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowIssueEntryDataProvider.Get(sowIssue.SOWIssue_PK);
            }

            return new SaveResult<SOWIssueEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
