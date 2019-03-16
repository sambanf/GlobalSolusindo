using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.AuthParam.EntryForm;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.AuthParam.DML
{
    public class AuthParamUpdateHandler : UpdateOperation
    {
        private AuthParamValidator authParamValidator;
        private AuthParamFactory authParamFactory;
        private AuthParamQuery authParamQuery;
        private AuthParamEntryDataProvider authParamEntryDataProvider;

        public AuthParamUpdateHandler(GlobalSolusindoDb db, tblM_User user, AuthParamValidator authParamValidator, AuthParamFactory authParamFactory, AuthParamQuery authParamQuery, AccessControl accessControl) : base(db, user)
        {
            this.authParamValidator = authParamValidator;
            this.authParamFactory = authParamFactory;
            this.authParamQuery = authParamQuery;
            this.authParamEntryDataProvider = new AuthParamEntryDataProvider(db, user, accessControl, authParamQuery);
        }

        private void Initialize(AuthParamValidator authParamValidator, AuthParamFactory authParamFactory)
        {
            this.authParamValidator = authParamValidator;
            this.authParamFactory = authParamFactory;
        }

        public void Update(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            if (authParamDTO == null)
                throw new ArgumentNullException("AuthParam model is null.");
            tblM_AuthParam authParam = authParamFactory.CreateFromDbAndUpdateFromDTO(authParamDTO, dateStamp);  
        }

        public SaveResult<AuthParamEntryModel> Save(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = authParamValidator.Validate(authParamDTO);
            bool success = false;
            AuthParamEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(authParamDTO, dateStamp); 
                Db.SaveChanges();
                model = authParamEntryDataProvider.Get(authParamDTO.AuthParam_PK);
            }

            return new SaveResult<AuthParamEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
