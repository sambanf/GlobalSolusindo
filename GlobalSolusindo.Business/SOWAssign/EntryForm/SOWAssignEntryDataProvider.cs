using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWAssign.EntryForm
{
    public class SOWAssignEntryDataProvider : FactoryBase
    {
        private SOWAssignQuery sowAssignQuery;
        private AccessControl accessControl;

        public SOWAssignEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWAssignQuery sowAssignQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowAssignQuery = sowAssignQuery;
        }

        private List<Control> CreateFormControls(int sowAssignPK)
        {
            SOWAssignEntryControlBuilder controlBuilder = new SOWAssignEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowAssignPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWAssignEntryModel GetCreateStateModel()
        {
            SOWAssignEntryFormData formData = new SOWAssignEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWAssignDTO sowAssignDTO = new SOWAssignDTO();
            return new SOWAssignEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new SOWAssignDTO(),
            };
        }

        private SOWAssignEntryModel GetUpdateStateModel(int sowAssignPK)
        {
            SOWAssignEntryFormData formData = new SOWAssignEntryFormData();
            List<Control> formControls = CreateFormControls(sowAssignPK);
            SOWAssignDTO sowAssignDTO = sowAssignQuery.GetByPrimaryKey(sowAssignPK);

            if (sowAssignDTO == null)
                throw new KairosException($"Record with primary key '{sowAssignDTO.SOWAssign_PK}' is not found.");

            return new SOWAssignEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowAssignDTO,
            };
        }

        public SOWAssignEntryModel Get(int sowAssignPK)
        {
            if (sowAssignPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowAssignPK);
        }
    }
}
