using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm
{
    public class MappingUserToRoleGroupEntryDataProvider : FactoryBase
    {
        private MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery;
        private AccessControl accessControl;

        public MappingUserToRoleGroupEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.mappingUserToRoleGroupQuery = mappingUserToRoleGroupQuery;
        }

        private List<Control> CreateFormControls(int mappingUserToRoleGroupPK)
        {
            MappingUserToRoleGroupEntryControlBuilder controlBuilder = new MappingUserToRoleGroupEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (mappingUserToRoleGroupPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private MappingUserToRoleGroupEntryModel CreateEntryModel(int roleGroupPK, int userPk)
        {
            tblM_RoleGroup roleGroup = Db.tblM_RoleGroup.Find(roleGroupPK);
            if (roleGroup == null)
                throw new KairosException($"Role group id '{roleGroupPK}' is not found.");

            MappingUserToRoleGroupEntryFormData formData = new MappingUserToRoleGroupEntryFormData();
            List<Control> formControls = CreateFormControls(roleGroupPK);

            var model = new MappingUserToRoleGroupQuery(this.Db).GetByPrimaryKey(roleGroupPK, userPk);

            return new MappingUserToRoleGroupEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = model,
            };
        }

        public MappingUserToRoleGroupEntryModel Get(int roleGroupPK, int userPk)
        { 
            return CreateEntryModel(roleGroupPK, userPk);
        }
    }
}
