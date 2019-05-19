using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWIssue.EntryForm
{
    public class SOWIssueEntryDataProvider : FactoryBase
    {
        private SOWIssueQuery sowIssueQuery;
        private AccessControl accessControl;

        public SOWIssueEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWIssueQuery sowIssueQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowIssueQuery = sowIssueQuery;
        }

        private List<Control> CreateFormControls(int sowIssuePK)
        {
            SOWIssueEntryControlBuilder controlBuilder = new SOWIssueEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowIssuePK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWIssueEntryModel GetCreateStateModel()
        {
            SOWIssueEntryFormData formData = new SOWIssueEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWIssueDTO sowIssueDTO = new SOWIssueDTO();
            return new SOWIssueEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowIssueDTO,
            };
        }

        private SOWIssueEntryModel GetUpdateStateModel(int sowIssuePK)
        {
            SOWIssueEntryFormData formData = new SOWIssueEntryFormData();
            List<Control> formControls = CreateFormControls(sowIssuePK);
            SOWIssueDTO sowIssueDTO = sowIssueQuery.GetByPrimaryKey(sowIssuePK);

            if (sowIssueDTO == null)
                throw new KairosException($"Record with primary key '{sowIssueDTO.SOWIssue_PK}' is not found.");

            return new SOWIssueEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowIssueDTO,
            };
        }

        public SOWIssueEntryModel Get(int sowIssuePK)
        {
            if (sowIssuePK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowIssuePK);
        }
    }
}
