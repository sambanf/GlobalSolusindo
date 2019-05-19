using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.EntryForm;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.UserDetail.DML
{
    public class UserDetailCreateHandler : CreateOperation
    {
        private UserDetailValidator userDetailValidator;
        private UserDetailFactory userDetailFactory;
        private UserDetailQuery userDetailQuery;
        private UserDetailEntryDataProvider userDetailEntryDataProvider;

        public UserDetailCreateHandler(GlobalSolusindoDb db, tblM_User user, UserDetailValidator userDetailValidator, UserDetailFactory userDetailFactory, UserDetailQuery userDetailQuery, AccessControl accessControl) : base(db, user)
        {
            this.userDetailValidator = userDetailValidator;
            this.userDetailFactory = userDetailFactory;
            this.userDetailQuery = userDetailQuery;
            this.userDetailEntryDataProvider = new UserDetailEntryDataProvider(db, user, accessControl, userDetailQuery);
        }

        public tblM_UserDetail Insert(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            if (userDetailDTO == null)
                throw new ArgumentNullException("UserDetail model is null.");
            tblM_UserDetail userDetail = userDetailFactory.CreateFromDTO(userDetailDTO, dateStamp);
            return Db.tblM_UserDetail.Add(userDetail);
        }

        public SaveResult<UserDetailEntryModel> Save(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = userDetailValidator.Validate(userDetailDTO);
            bool success = false;
            UserDetailEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_UserDetail userDetail = Insert(userDetailDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = userDetailEntryDataProvider.Get(userDetail.UserDetail_PK);
            }

            return new SaveResult<UserDetailEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
