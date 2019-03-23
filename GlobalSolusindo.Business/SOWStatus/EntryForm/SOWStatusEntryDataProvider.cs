using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWStatus.EntryForm
{
    public class SOWStatusEntryDataProvider : FactoryBase
    {
        private SOWStatusQuery sowStatusQuery;
        private AccessControl accessControl;

        public SOWStatusEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWStatusQuery sowStatusQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowStatusQuery = sowStatusQuery;
        }

        private List<Control> CreateFormControls(int sowStatusPK)
        {
            SOWStatusEntryControlBuilder controlBuilder = new SOWStatusEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowStatusPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWStatusEntryModel GetCreateStateModel()
        {
            SOWStatusEntryFormData formData = new SOWStatusEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWStatusDTO sowStatusDTO = new SOWStatusDTO();
            return new SOWStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new SOWStatusDTO(),
            };
        }

        private SOWStatusEntryModel GetUpdateStateModel(int sowStatusPK)
        {
            SOWStatusEntryFormData formData = new SOWStatusEntryFormData();
            List<Control> formControls = CreateFormControls(sowStatusPK);
            SOWStatusDTO sowStatusDTO = sowStatusQuery.GetByPrimaryKey(sowStatusPK);

            if (sowStatusDTO == null)
                throw new KairosException($"Record with primary key '{sowStatusDTO.SOWStatus_PK}' is not found.");

            return new SOWStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowStatusDTO,
            };
        }

        public SOWStatusEntryModel Get(int sowStatusPK)
        {
            if (sowStatusPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowStatusPK);
        }
    }
}
