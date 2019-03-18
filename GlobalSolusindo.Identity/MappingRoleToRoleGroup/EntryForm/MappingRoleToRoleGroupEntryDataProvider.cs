using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm
{
    public class MappingRoleToRoleGroupEntryDataProvider : FactoryBase
    {
        private MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery;
        private AccessControl accessControl;

        public MappingRoleToRoleGroupEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.mappingRoleToRoleGroupQuery = mappingRoleToRoleGroupQuery;
        }

        private List<Control> CreateFormControls(int mappingRoleToRoleGroupPK)
        {
            MappingRoleToRoleGroupEntryControlBuilder controlBuilder = new MappingRoleToRoleGroupEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (mappingRoleToRoleGroupPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private MappingRoleToRoleGroupEntryModel CreateEntryModel(int roleGroupPK)
        {
            tblM_RoleGroup roleGroup = Db.tblM_RoleGroup.Find(roleGroupPK);
            if (roleGroup == null)
                throw new KairosException($"Role group id '{roleGroupPK}' is not found.");

            MappingRoleToRoleGroupEntryFormData formData = new MappingRoleToRoleGroupEntryFormData();
            List<Control> formControls = CreateFormControls(roleGroupPK);

            var  roleGroupDTO = new RoleGroup.Queries.RoleGroupQuery(Db).GetByPrimaryKey(roleGroupPK);
            var roleMapping = new RoleMapping();

            roleMapping.RoleGroup_PK = roleGroupPK;
            roleMapping.Title = roleGroupDTO.Title;
            roleMapping.Description = roleGroupDTO.Description;
            roleMapping.MappingRoleToRoleGroups = mappingRoleToRoleGroupQuery.GetMappingListByRoleGroupPk(roleGroupPK); 

            return new MappingRoleToRoleGroupEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = roleMapping,
            };
        }

        public MappingRoleToRoleGroupEntryModel Get(int roleGroupPK)
        { 
            return CreateEntryModel(roleGroupPK);
        }
    }
}
