using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.RoleGroup.EntryForm;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.RoleGroup.DML
{
    public class RoleGroupUpdateHandler : UpdateOperation
    {
        private RoleGroupValidator roleGroupValidator;
        private RoleGroupFactory roleGroupFactory;
        private RoleGroupQuery roleGroupQuery;
        private RoleGroupEntryDataProvider roleGroupEntryDataProvider;

        public RoleGroupUpdateHandler(GlobalSolusindoDb db, tblM_User user, RoleGroupValidator roleGroupValidator, RoleGroupFactory roleGroupFactory, RoleGroupQuery roleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.roleGroupValidator = roleGroupValidator;
            this.roleGroupFactory = roleGroupFactory;
            this.roleGroupQuery = roleGroupQuery;
            this.roleGroupEntryDataProvider = new RoleGroupEntryDataProvider(db, user, accessControl, roleGroupQuery);
        }

        private void Initialize(RoleGroupValidator roleGroupValidator, RoleGroupFactory roleGroupFactory)
        {
            this.roleGroupValidator = roleGroupValidator;
            this.roleGroupFactory = roleGroupFactory;
        }

        public void Update(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            if (roleGroupDTO == null)
                throw new ArgumentNullException("RoleGroup model is null.");
            tblM_RoleGroup roleGroup = roleGroupFactory.CreateFromDbAndUpdateFromDTO(roleGroupDTO, dateStamp);  
        }

        public SaveResult<RoleGroupEntryModel> Save(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = roleGroupValidator.Validate(roleGroupDTO);
            bool success = false;
            RoleGroupEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(roleGroupDTO, dateStamp); 
                Db.SaveChanges();
                model = roleGroupEntryDataProvider.Get(roleGroupDTO.RoleGroup_PK);
            }

            return new SaveResult<RoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
