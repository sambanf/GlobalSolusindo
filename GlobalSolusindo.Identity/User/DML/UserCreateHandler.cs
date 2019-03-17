using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using GlobalSolusindo.Identity.UserDetail.DML;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UserCreateHandler : CreateOperation
    {
        private UserValidator userValidator;
        private UserFactory userFactory;
        private UserQuery userQuery;
        private UserEntryDataProvider userEntryDataProvider;
        private AccessControl accessControl;
        public UserCreateHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
            this.userQuery = userQuery;
            this.accessControl = accessControl;
            this.userEntryDataProvider = new UserEntryDataProvider(db, user, accessControl, userQuery);
        }

        public tblM_User Insert(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDTO(userDTO, dateStamp);
            return Db.tblM_User.Add(user);
        }

        public SaveResult<UserEntryModel> Save(UserDTO userDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = userValidator.Validate(userDTO);
            bool success = false;
            UserEntryModel model = null;
            if (validationResult.IsValid)
            {
                UserDetailCreateHandler userDetailCreateHandler =
                    new UserDetailCreateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), accessControl);

                var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);
                if (userDetailSaveResult.Success)
                {
                    userDTO.UserDetail_FK = userDetailSaveResult.Model.Model.UserDetail_PK;
                    tblM_User user = Insert(userDTO, dateStamp);
                    Db.SaveChanges();
                    success = true;
                    model = userEntryDataProvider.Get(user.User_PK);
                }
            }

            return new SaveResult<UserEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
