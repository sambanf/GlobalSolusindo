using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos;
using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.DML
{
    public class MappingRoleToRoleGroupCreateHandler : CreateOperation
    {
        private MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator;
        private MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory;
        private MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery;
        private MappingRoleToRoleGroupEntryDataProvider mappingRoleToRoleGroupEntryDataProvider;

        public MappingRoleToRoleGroupCreateHandler(GlobalSolusindoDb db, tblM_User user, MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator, MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory, MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingRoleToRoleGroupValidator = mappingRoleToRoleGroupValidator;
            this.mappingRoleToRoleGroupFactory = mappingRoleToRoleGroupFactory;
            this.mappingRoleToRoleGroupQuery = mappingRoleToRoleGroupQuery;
            this.mappingRoleToRoleGroupEntryDataProvider = new MappingRoleToRoleGroupEntryDataProvider(db, user, accessControl, mappingRoleToRoleGroupQuery);
        }

        public tblM_MappingRoleToRoleGroup Insert(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingRoleToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingRoleToRoleGroup model is null.");
            tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = mappingRoleToRoleGroupFactory.CreateFromDTO(mappingRoleToRoleGroupDTO, dateStamp);
            return Db.tblM_MappingRoleToRoleGroup.Add(mappingRoleToRoleGroup);
        }

        public SaveResult<MappingRoleToRoleGroupEntryModel> Save(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingRoleToRoleGroupValidator.Validate(mappingRoleToRoleGroupDTO);
            bool success = false;
            MappingRoleToRoleGroupEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = Insert(mappingRoleToRoleGroupDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = mappingRoleToRoleGroupEntryDataProvider.Get(mappingRoleToRoleGroup.RoleGroup_PK);
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
