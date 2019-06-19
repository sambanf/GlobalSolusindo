using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.EntryForm;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.UserDetail.DML
{
    public class UserDetailUpdateHandler : UpdateOperation
    {
        private UserDetailValidator userDetailValidator;
        private UserDetailFactory userDetailFactory;
        private UserDetailQuery userDetailQuery;
        private UserDetailEntryDataProvider userDetailEntryDataProvider;

        public UserDetailUpdateHandler(GlobalSolusindoDb db, tblM_User user, UserDetailValidator userDetailValidator, UserDetailFactory userDetailFactory, UserDetailQuery userDetailQuery, AccessControl accessControl) : base(db, user)
        {
            this.userDetailValidator = userDetailValidator;
            this.userDetailFactory = userDetailFactory;
            this.userDetailQuery = userDetailQuery;
            this.userDetailEntryDataProvider = new UserDetailEntryDataProvider(db, user, accessControl, userDetailQuery);
        }

        private void Initialize(UserDetailValidator userDetailValidator, UserDetailFactory userDetailFactory)
        {
            this.userDetailValidator = userDetailValidator;
            this.userDetailFactory = userDetailFactory;
        }

        public void Update(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            if (userDetailDTO == null)
                throw new ArgumentNullException("UserDetail model is null.");
            tblM_UserDetail userDetail = userDetailFactory.CreateFromDbAndUpdateFromDTO(userDetailDTO, dateStamp);
        }

        public SaveResult<UserDetailEntryModel> Save(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = userDetailValidator.Validate(userDetailDTO);
            bool success = false;
            UserDetailEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                Update(userDetailDTO, dateStamp);
                Db.SaveChanges();
                model = userDetailEntryDataProvider.Get(userDetailDTO.UserDetail_PK);
            }

            return new SaveResult<UserDetailEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
