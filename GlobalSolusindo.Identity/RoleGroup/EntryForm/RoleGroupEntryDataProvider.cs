using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.RoleGroup.EntryForm
{
    public class RoleGroupEntryDataProvider : FactoryBase
    {
        private RoleGroupQuery roleGroupQuery;
        private AccessControl accessControl;

        public RoleGroupEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, RoleGroupQuery roleGroupQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.roleGroupQuery = roleGroupQuery;
        }

        private List<Control> CreateFormControls(int roleGroupPK)
        {
            RoleGroupEntryControlBuilder controlBuilder = new RoleGroupEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (roleGroupPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private RoleGroupEntryModel GetCreateStateModel()
        {
            RoleGroupEntryFormData formData = new RoleGroupEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            RoleGroupDTO roleGroupDTO = new RoleGroupDTO();
            return new RoleGroupEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new RoleGroupDTO(),
            };
        }

        private RoleGroupEntryModel GetUpdateStateModel(int roleGroupPK)
        {
            RoleGroupEntryFormData formData = new RoleGroupEntryFormData();
            List<Control> formControls = CreateFormControls(roleGroupPK);
            RoleGroupDTO roleGroupDTO = roleGroupQuery.GetByPrimaryKey(roleGroupPK);

            if (roleGroupDTO == null)
                throw new KairosException($"Record with primary key '{roleGroupDTO.RoleGroup_PK}' is not found.");

            return new RoleGroupEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = roleGroupDTO,
            };
        }

        public RoleGroupEntryModel Get(int roleGroupPK)
        {
            if (roleGroupPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(roleGroupPK);
        }
    }
}
