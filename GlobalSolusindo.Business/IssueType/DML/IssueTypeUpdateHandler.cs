using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.EntryForm;
using GlobalSolusindo.Business.IssueType.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IssueType.DML
{
    public class IssueTypeUpdateHandler : UpdateOperation
    {
        private IssueTypeValidator issueTypeValidator;
        private IssueTypeFactory issueTypeFactory;
        private IssueTypeQuery issueTypeQuery;
        private IssueTypeEntryDataProvider issueTypeEntryDataProvider;

        public IssueTypeUpdateHandler(GlobalSolusindoDb db, tblM_User user, IssueTypeValidator issueTypeValidator, IssueTypeFactory issueTypeFactory, IssueTypeQuery issueTypeQuery, AccessControl accessControl) : base(db, user)
        {
            this.issueTypeValidator = issueTypeValidator;
            this.issueTypeFactory = issueTypeFactory;
            this.issueTypeQuery = issueTypeQuery;
            this.issueTypeEntryDataProvider = new IssueTypeEntryDataProvider(db, user, accessControl, issueTypeQuery);
        }

        private void Initialize(IssueTypeValidator issueTypeValidator, IssueTypeFactory issueTypeFactory)
        {
            this.issueTypeValidator = issueTypeValidator;
            this.issueTypeFactory = issueTypeFactory;
        }

        public void Update(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            if (issueTypeDTO == null)
                throw new ArgumentNullException("IssueType model is null.");
            tblM_IssueType issueType = issueTypeFactory.CreateFromDbAndUpdateFromDTO(issueTypeDTO, dateStamp);  
        }

        public SaveResult<IssueTypeEntryModel> Save(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = issueTypeValidator.Validate(issueTypeDTO);
            bool success = false;
            IssueTypeEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(issueTypeDTO, dateStamp); 
                Db.SaveChanges();
                model = issueTypeEntryDataProvider.Get(issueTypeDTO.IssueType_PK);
            }

            return new SaveResult<IssueTypeEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
