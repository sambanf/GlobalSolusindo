using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Role.EntryForm
{
    public class RoleEntryDataProvider : FactoryBase
    {
        private RoleQuery roleQuery;
        private AccessControl accessControl;

        public RoleEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, RoleQuery roleQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.roleQuery = roleQuery;
        }

        private List<Control> CreateFormControls(int rolePK)
        {
            RoleEntryControlBuilder controlBuilder = new RoleEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (rolePK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private RoleEntryModel GetCreateStateModel()
        {
            RoleEntryFormData formData = new RoleEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            RoleDTO roleDTO = new RoleDTO();
            return new RoleEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new RoleDTO(),
            };
        }

        private RoleEntryModel GetUpdateStateModel(int rolePK)
        {
            RoleEntryFormData formData = new RoleEntryFormData();
            List<Control> formControls = CreateFormControls(rolePK);
            RoleDTO roleDTO = roleQuery.GetByPrimaryKey(rolePK);

            if (roleDTO == null)
                throw new KairosException($"Record with primary key '{roleDTO.Role_PK}' is not found.");

            return new RoleEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = roleDTO,
            };
        }

        public RoleEntryModel Get(int rolePK)
        {
            if (rolePK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(rolePK);
        }
    }
}
