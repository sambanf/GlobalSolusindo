using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.DML
{

    /// <summary>
    /// Save bulk role mapping 
    /// </summary>
    public class RoleMappingCreateHandler : CreateOperation
    {
        private MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator;
        private MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory;
        private MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery;
        private MappingRoleToRoleGroupEntryDataProvider mappingRoleToRoleGroupEntryDataProvider;

        public RoleMappingCreateHandler(GlobalSolusindoDb db, tblM_User user, MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator, MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory, MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingRoleToRoleGroupValidator = mappingRoleToRoleGroupValidator;
            this.mappingRoleToRoleGroupFactory = mappingRoleToRoleGroupFactory;
            this.mappingRoleToRoleGroupQuery = mappingRoleToRoleGroupQuery;
            this.mappingRoleToRoleGroupEntryDataProvider = new MappingRoleToRoleGroupEntryDataProvider(db, user, accessControl, mappingRoleToRoleGroupQuery);
        }

        private void Delete(int roleGroupPk)
        {
            var mappingRoleToRoleGroups = Db.tblM_MappingRoleToRoleGroup.Where(x => x.RoleGroup_PK == roleGroupPk);

            foreach (var mappingRoleToRoleGroup in mappingRoleToRoleGroups)
            {
                Db.tblM_MappingRoleToRoleGroup.Remove(mappingRoleToRoleGroup);
            }
        }

        public void Insert(RoleMapping mappingRole, DateTime dateStamp)
        {
            if (mappingRole == null)
                throw new ArgumentNullException("MappingRoleToRoleGroup model is null.");

            Delete(mappingRole.RoleGroup_PK);
            Db.SaveChanges();

            foreach (var mappingRoleToRoleGroupDTO in mappingRole.MappingRoleToRoleGroups)
            {
                mappingRoleToRoleGroupDTO.RoleGroup_PK = mappingRole.RoleGroup_PK;
                if (mappingRoleToRoleGroupDTO.IsChecked)
                {
                    tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = mappingRoleToRoleGroupFactory.CreateFromDTO(mappingRoleToRoleGroupDTO, dateStamp);
                    Db.tblM_MappingRoleToRoleGroup.Add(mappingRoleToRoleGroup);
                }
            }
        }

        public SaveResult<MappingRoleToRoleGroupEntryModel> Save(RoleMapping roleMapping, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingRoleToRoleGroupValidator.ValidateRoleMapping(roleMapping);
            bool success = false;
            MappingRoleToRoleGroupEntryModel model = null;
            if (validationResult.IsValid)
            {
                Insert(roleMapping, dateStamp);
                Db.SaveChanges();

                success = true;
                model = mappingRoleToRoleGroupEntryDataProvider.Get(roleMapping.RoleGroup_PK);
            }

            return new SaveResult<MappingRoleToRoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
