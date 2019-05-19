using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Role.EntryForm;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Role.DML
{
    public class RoleUpdateHandler : UpdateOperation
    {
        private RoleValidator roleValidator;
        private RoleFactory roleFactory;
        private RoleQuery roleQuery;
        private RoleEntryDataProvider roleEntryDataProvider;

        public RoleUpdateHandler(GlobalSolusindoDb db, tblM_User user, RoleValidator roleValidator, RoleFactory roleFactory, RoleQuery roleQuery, AccessControl accessControl) : base(db, user)
        {
            this.roleValidator = roleValidator;
            this.roleFactory = roleFactory;
            this.roleQuery = roleQuery;
            this.roleEntryDataProvider = new RoleEntryDataProvider(db, user, accessControl, roleQuery);
        }

        private void Initialize(RoleValidator roleValidator, RoleFactory roleFactory)
        {
            this.roleValidator = roleValidator;
            this.roleFactory = roleFactory;
        }

        public void Update(RoleDTO roleDTO, DateTime dateStamp)
        {
            if (roleDTO == null)
                throw new ArgumentNullException("Role model is null.");
            tblM_Role role = roleFactory.CreateFromDbAndUpdateFromDTO(roleDTO, dateStamp);  
        }

        public SaveResult<RoleEntryModel> Save(RoleDTO roleDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = roleValidator.Validate(roleDTO);
            bool success = false;
            RoleEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(roleDTO, dateStamp); 
                Db.SaveChanges();
                model = roleEntryDataProvider.Get(roleDTO.Role_PK);
            }

            return new SaveResult<RoleEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
