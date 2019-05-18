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
    public class UserUpdateHandler : UpdateOperation
    {
        private UserValidator userValidator;
        private UserFactory userFactory;
        private UserQuery userQuery;
        private UserEntryDataProvider userEntryDataProvider;
        private AccessControl accessControl;

        public UserUpdateHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
            this.userQuery = userQuery;
            this.accessControl = accessControl;
            this.userEntryDataProvider = new UserEntryDataProvider(db, user, accessControl, userQuery);
        }

        private void Initialize(UserValidator userValidator, UserFactory userFactory)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
        }

        public void Update(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDbAndUpdateFromDTO(userDTO, dateStamp);
        }

        public SaveResult<UserEntryModel> Save(UserDTO userDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = userValidator.Validate(userDTO);
            bool success = false;
            UserEntryModel model = null;

            if (validationResult.IsValid)
            {
                UserDetailUpdateHandler userDetailCreateHandler =
                  new UserDetailUpdateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), accessControl);

                var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);

                if (userDetailSaveResult.Success)
                {
                    success = true;
                    Update(userDTO, dateStamp);
                    Db.SaveChanges();
                    model = userEntryDataProvider.Get(userDTO.User_PK);
                }
            }

            return new SaveResult<UserEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
