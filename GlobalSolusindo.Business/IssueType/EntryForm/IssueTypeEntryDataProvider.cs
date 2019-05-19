using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IssueType.EntryForm
{
    public class IssueTypeEntryDataProvider : FactoryBase
    {
        private IssueTypeQuery issueTypeQuery;
        private AccessControl accessControl;

        public IssueTypeEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, IssueTypeQuery issueTypeQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.issueTypeQuery = issueTypeQuery;
        }

        private List<Control> CreateFormControls(int issueTypePK)
        {
            IssueTypeEntryControlBuilder controlBuilder = new IssueTypeEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (issueTypePK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private IssueTypeEntryModel GetCreateStateModel()
        {
            IssueTypeEntryFormData formData = new IssueTypeEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            IssueTypeDTO issueTypeDTO = new IssueTypeDTO();
            return new IssueTypeEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = issueTypeDTO,
            };
        }

        private IssueTypeEntryModel GetUpdateStateModel(int issueTypePK)
        {
            IssueTypeEntryFormData formData = new IssueTypeEntryFormData();
            List<Control> formControls = CreateFormControls(issueTypePK);
            IssueTypeDTO issueTypeDTO = issueTypeQuery.GetByPrimaryKey(issueTypePK);

            if (issueTypeDTO == null)
                throw new KairosException($"Record with primary key '{issueTypeDTO.IssueType_PK}' is not found.");

            return new IssueTypeEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = issueTypeDTO,
            };
        }

        public IssueTypeEntryModel Get(int issueTypePK)
        {
            if (issueTypePK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(issueTypePK);
        }
    }
}
