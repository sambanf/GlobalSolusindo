using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.DML
{
    public class MappingRoleToRoleGroupUpdateHandler : UpdateOperation
    {
        private MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator;
        private MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory;
        private MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery;
        private MappingRoleToRoleGroupEntryDataProvider mappingRoleToRoleGroupEntryDataProvider;

        public MappingRoleToRoleGroupUpdateHandler(GlobalSolusindoDb db, tblM_User user, MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator, MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory, MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingRoleToRoleGroupValidator = mappingRoleToRoleGroupValidator;
            this.mappingRoleToRoleGroupFactory = mappingRoleToRoleGroupFactory;
            this.mappingRoleToRoleGroupQuery = mappingRoleToRoleGroupQuery;
            this.mappingRoleToRoleGroupEntryDataProvider = new MappingRoleToRoleGroupEntryDataProvider(db, user, accessControl, mappingRoleToRoleGroupQuery);
        }

        private void Initialize(MappingRoleToRoleGroupValidator mappingRoleToRoleGroupValidator, MappingRoleToRoleGroupFactory mappingRoleToRoleGroupFactory)
        {
            this.mappingRoleToRoleGroupValidator = mappingRoleToRoleGroupValidator;
            this.mappingRoleToRoleGroupFactory = mappingRoleToRoleGroupFactory;
        }

        public void Update(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingRoleToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingRoleToRoleGroup model is null.");
            tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = mappingRoleToRoleGroupFactory.CreateFromDbAndUpdateFromDTO(mappingRoleToRoleGroupDTO, dateStamp);  
        }

        public SaveResult<MappingRoleToRoleGroupEntryModel> Save(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingRoleToRoleGroupValidator.Validate(mappingRoleToRoleGroupDTO);
            bool success = false;
            MappingRoleToRoleGroupEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(mappingRoleToRoleGroupDTO, dateStamp); 
                Db.SaveChanges();
                model = mappingRoleToRoleGroupEntryDataProvider.Get(mappingRoleToRoleGroupDTO.RoleGroup_PK.Value);
            }

            return new SaveResult<MappingRoleToRoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
