using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToAuthParam.EntryForm;
using GlobalSolusindo.Identity.MappingUserToAuthParam.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.DML
{
    public class MappingUserToAuthParamUpdateHandler : UpdateOperation
    {
        private MappingUserToAuthParamValidator mappingUserToAuthParamValidator;
        private MappingUserToAuthParamFactory mappingUserToAuthParamFactory;
        private MappingUserToAuthParamQuery mappingUserToAuthParamQuery;
        private MappingUserToAuthParamEntryDataProvider mappingUserToAuthParamEntryDataProvider;

        public MappingUserToAuthParamUpdateHandler(GlobalSolusindoDb db, tblM_User user, MappingUserToAuthParamValidator mappingUserToAuthParamValidator, MappingUserToAuthParamFactory mappingUserToAuthParamFactory, MappingUserToAuthParamQuery mappingUserToAuthParamQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingUserToAuthParamValidator = mappingUserToAuthParamValidator;
            this.mappingUserToAuthParamFactory = mappingUserToAuthParamFactory;
            this.mappingUserToAuthParamQuery = mappingUserToAuthParamQuery;
            this.mappingUserToAuthParamEntryDataProvider = new MappingUserToAuthParamEntryDataProvider(db, user, accessControl, mappingUserToAuthParamQuery);
        }

        private void Initialize(MappingUserToAuthParamValidator mappingUserToAuthParamValidator, MappingUserToAuthParamFactory mappingUserToAuthParamFactory)
        {
            this.mappingUserToAuthParamValidator = mappingUserToAuthParamValidator;
            this.mappingUserToAuthParamFactory = mappingUserToAuthParamFactory;
        }

        public void Update(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            if (mappingUserToAuthParamDTO == null)
                throw new ArgumentNullException("MappingUserToAuthParam model is null.");
            tblM_MappingUserToAuthParam mappingUserToAuthParam = mappingUserToAuthParamFactory.CreateFromDbAndUpdateFromDTO(mappingUserToAuthParamDTO, dateStamp);  
        }

        public SaveResult<MappingUserToAuthParamEntryModel> Save(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingUserToAuthParamValidator.Validate(mappingUserToAuthParamDTO);
            bool success = false;
            MappingUserToAuthParamEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(mappingUserToAuthParamDTO, dateStamp); 
                Db.SaveChanges();
                model = mappingUserToAuthParamEntryDataProvider.Get(mappingUserToAuthParamDTO.AuthParam_PK.Value, mappingUserToAuthParamDTO.User_PK.Value);
            }

            return new SaveResult<MappingUserToAuthParamEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
