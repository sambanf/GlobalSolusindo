using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.EntryForm;
using GlobalSolusindo.Business.IssueType.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IssueType.DML
{
    public class IssueTypeCreateHandler : CreateOperation
    {
        private IssueTypeValidator issueTypeValidator;
        private IssueTypeFactory issueTypeFactory;
        private IssueTypeQuery issueTypeQuery;
        private IssueTypeEntryDataProvider issueTypeEntryDataProvider;

        public IssueTypeCreateHandler(GlobalSolusindoDb db, tblM_User user, IssueTypeValidator issueTypeValidator, IssueTypeFactory issueTypeFactory, IssueTypeQuery issueTypeQuery, AccessControl accessControl) : base(db, user)
        {
            this.issueTypeValidator = issueTypeValidator;
            this.issueTypeFactory = issueTypeFactory;
            this.issueTypeQuery = issueTypeQuery;
            this.issueTypeEntryDataProvider = new IssueTypeEntryDataProvider(db, user, accessControl, issueTypeQuery);
        }

        public tblM_IssueType Insert(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            if (issueTypeDTO == null)
                throw new ArgumentNullException("IssueType model is null.");
            tblM_IssueType issueType = issueTypeFactory.CreateFromDTO(issueTypeDTO, dateStamp);
            return Db.tblM_IssueType.Add(issueType);
        }

        public SaveResult<IssueTypeEntryModel> Save(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = issueTypeValidator.Validate(issueTypeDTO);
            bool success = false;
            IssueTypeEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_IssueType issueType = Insert(issueTypeDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = issueTypeEntryDataProvider.Get(issueType.IssueType_PK);
            }

            return new SaveResult<IssueTypeEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
