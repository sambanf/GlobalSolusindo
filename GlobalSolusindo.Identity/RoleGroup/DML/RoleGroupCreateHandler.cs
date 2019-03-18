using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.RoleGroup.EntryForm;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.RoleGroup.DML
{
    public class RoleGroupCreateHandler : CreateOperation
    {
        private RoleGroupValidator roleGroupValidator;
        private RoleGroupFactory roleGroupFactory;
        private RoleGroupQuery roleGroupQuery;
        private RoleGroupEntryDataProvider roleGroupEntryDataProvider;

        public RoleGroupCreateHandler(GlobalSolusindoDb db, tblM_User user, RoleGroupValidator roleGroupValidator, RoleGroupFactory roleGroupFactory, RoleGroupQuery roleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.roleGroupValidator = roleGroupValidator;
            this.roleGroupFactory = roleGroupFactory;
            this.roleGroupQuery = roleGroupQuery;
            this.roleGroupEntryDataProvider = new RoleGroupEntryDataProvider(db, user, accessControl, roleGroupQuery);
        }

        public tblM_RoleGroup Insert(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            if (roleGroupDTO == null)
                throw new ArgumentNullException("RoleGroup model is null.");
            tblM_RoleGroup roleGroup = roleGroupFactory.CreateFromDTO(roleGroupDTO, dateStamp);
            return Db.tblM_RoleGroup.Add(roleGroup);
        }

        public SaveResult<RoleGroupEntryModel> Save(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = roleGroupValidator.Validate(roleGroupDTO);
            bool success = false;
            RoleGroupEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_RoleGroup roleGroup = Insert(roleGroupDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = roleGroupEntryDataProvider.Get(roleGroup.RoleGroup_PK);
            }

            return new SaveResult<RoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
