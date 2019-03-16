using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.AuthParam.EntryForm;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.AuthParam.DML
{
    public class AuthParamCreateHandler : CreateOperation
    {
        private AuthParamValidator authParamValidator;
        private AuthParamFactory authParamFactory;
        private AuthParamQuery authParamQuery;
        private AuthParamEntryDataProvider authParamEntryDataProvider;

        public AuthParamCreateHandler(GlobalSolusindoDb db, tblM_User user, AuthParamValidator authParamValidator, AuthParamFactory authParamFactory, AuthParamQuery authParamQuery, AccessControl accessControl) : base(db, user)
        {
            this.authParamValidator = authParamValidator;
            this.authParamFactory = authParamFactory;
            this.authParamQuery = authParamQuery;
            this.authParamEntryDataProvider = new AuthParamEntryDataProvider(db, user, accessControl, authParamQuery);
        }

        public tblM_AuthParam Insert(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            if (authParamDTO == null)
                throw new ArgumentNullException("AuthParam model is null.");
            tblM_AuthParam authParam = authParamFactory.CreateFromDTO(authParamDTO, dateStamp);
            return Db.tblM_AuthParam.Add(authParam);
        }

        public SaveResult<AuthParamEntryModel> Save(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = authParamValidator.Validate(authParamDTO);
            bool success = false;
            AuthParamEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_AuthParam authParam = Insert(authParamDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = authParamEntryDataProvider.Get(authParam.AuthParam_PK);
            }

            return new SaveResult<AuthParamEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        } 
    }
}
