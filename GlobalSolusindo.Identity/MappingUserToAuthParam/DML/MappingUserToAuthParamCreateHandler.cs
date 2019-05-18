using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToAuthParam.EntryForm;
using GlobalSolusindo.Identity.MappingUserToAuthParam.Queries;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.DML
{
    public class MappingUserToAuthParamCreateHandler : CreateOperation
    {
        private MappingUserToAuthParamValidator mappingUserToAuthParamValidator;
        private MappingUserToAuthParamFactory mappingUserToAuthParamFactory;
        private MappingUserToAuthParamQuery mappingUserToAuthParamQuery;
        private MappingUserToAuthParamEntryDataProvider mappingUserToAuthParamEntryDataProvider;

        public MappingUserToAuthParamCreateHandler(GlobalSolusindoDb db, tblM_User user, MappingUserToAuthParamValidator mappingUserToAuthParamValidator, MappingUserToAuthParamFactory mappingUserToAuthParamFactory, MappingUserToAuthParamQuery mappingUserToAuthParamQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingUserToAuthParamValidator = mappingUserToAuthParamValidator;
            this.mappingUserToAuthParamFactory = mappingUserToAuthParamFactory;
            this.mappingUserToAuthParamQuery = mappingUserToAuthParamQuery;
            this.mappingUserToAuthParamEntryDataProvider = new MappingUserToAuthParamEntryDataProvider(db, user, accessControl, mappingUserToAuthParamQuery);
        }

        public tblM_MappingUserToAuthParam Insert(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            if (mappingUserToAuthParamDTO == null)
                throw new ArgumentNullException("MappingUserToAuthParam model is null.");

            var recordIsExist = Db.tblM_MappingUserToAuthParam.Find(mappingUserToAuthParamDTO.User_PK, mappingUserToAuthParamDTO.AuthParam_PK) != null;
            if (recordIsExist)
                throw new KairosException("User already exist in the group.");

            tblM_MappingUserToAuthParam mappingUserToAuthParam = mappingUserToAuthParamFactory.CreateFromDTO(mappingUserToAuthParamDTO, dateStamp);
            return Db.tblM_MappingUserToAuthParam.Add(mappingUserToAuthParam);
        }

        public SaveResult<MappingUserToAuthParamEntryModel> Save(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingUserToAuthParamValidator.Validate(mappingUserToAuthParamDTO);
            bool success = false;
            MappingUserToAuthParamEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_MappingUserToAuthParam mappingUserToAuthParam = Insert(mappingUserToAuthParamDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = mappingUserToAuthParamEntryDataProvider.Get(mappingUserToAuthParam.AuthParam_PK, mappingUserToAuthParam.User_PK);
            }

            return new SaveResult<MappingUserToAuthParamEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
