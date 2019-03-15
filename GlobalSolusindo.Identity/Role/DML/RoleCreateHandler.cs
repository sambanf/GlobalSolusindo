using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Role.EntryForm;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Role.DML
{
    public class RoleCreateHandler : CreateOperation
    {
        private RoleValidator roleValidator;
        private RoleFactory roleFactory;
        private RoleQuery roleQuery;
        private RoleEntryDataProvider roleEntryDataProvider;

        public RoleCreateHandler(GlobalSolusindoDb db, tblM_User user, RoleValidator roleValidator, RoleFactory roleFactory, RoleQuery roleQuery, AccessControl accessControl) : base(db, user)
        {
            this.roleValidator = roleValidator;
            this.roleFactory = roleFactory;
            this.roleQuery = roleQuery;
            this.roleEntryDataProvider = new RoleEntryDataProvider(db, user, accessControl, roleQuery);
        }

        public tblM_Role Insert(RoleDTO roleDTO, DateTime dateStamp)
        {
            if (roleDTO == null)
                throw new ArgumentNullException("Role model is null.");
            tblM_Role role = roleFactory.CreateFromDTO(roleDTO, dateStamp);
            return Db.tblM_Role.Add(role);
        }

        public SaveResult<RoleEntryModel> Save(RoleDTO roleDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = roleValidator.Validate(roleDTO);
            bool success = false;
            RoleEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Role role = Insert(roleDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = roleEntryDataProvider.Get(role.Role_PK);
            }

            return new SaveResult<RoleEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        } 
    }
}
