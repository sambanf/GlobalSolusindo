using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.DML
{
    public class MappingUserToRoleGroupUpdateHandler : UpdateOperation
    {
        private MappingUserToRoleGroupValidator mappingUserToRoleGroupValidator;
        private MappingUserToRoleGroupFactory mappingUserToRoleGroupFactory;
        private MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery;
        private MappingUserToRoleGroupEntryDataProvider mappingUserToRoleGroupEntryDataProvider;

        public MappingUserToRoleGroupUpdateHandler(GlobalSolusindoDb db, tblM_User user, MappingUserToRoleGroupValidator mappingUserToRoleGroupValidator, MappingUserToRoleGroupFactory mappingUserToRoleGroupFactory, MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingUserToRoleGroupValidator = mappingUserToRoleGroupValidator;
            this.mappingUserToRoleGroupFactory = mappingUserToRoleGroupFactory;
            this.mappingUserToRoleGroupQuery = mappingUserToRoleGroupQuery;
            this.mappingUserToRoleGroupEntryDataProvider = new MappingUserToRoleGroupEntryDataProvider(db, user, accessControl, mappingUserToRoleGroupQuery);
        }

        private void Initialize(MappingUserToRoleGroupValidator mappingUserToRoleGroupValidator, MappingUserToRoleGroupFactory mappingUserToRoleGroupFactory)
        {
            this.mappingUserToRoleGroupValidator = mappingUserToRoleGroupValidator;
            this.mappingUserToRoleGroupFactory = mappingUserToRoleGroupFactory;
        }

        public void Update(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingUserToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingUserToRoleGroup model is null.");
            tblM_MappingUserToRoleGroup mappingUserToRoleGroup = mappingUserToRoleGroupFactory.CreateFromDbAndUpdateFromDTO(mappingUserToRoleGroupDTO, dateStamp);  
        }

        public SaveResult<MappingUserToRoleGroupEntryModel> Save(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingUserToRoleGroupValidator.Validate(mappingUserToRoleGroupDTO);
            bool success = false;
            MappingUserToRoleGroupEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(mappingUserToRoleGroupDTO, dateStamp); 
                Db.SaveChanges();
                model = mappingUserToRoleGroupEntryDataProvider.Get(mappingUserToRoleGroupDTO.RoleGroup_PK.Value, mappingUserToRoleGroupDTO.User_PK.Value);
            }

            return new SaveResult<MappingUserToRoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
