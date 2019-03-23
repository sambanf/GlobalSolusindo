using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWUpdateHandler : UpdateOperation
    {
        private SOWValidator sowValidator;
        private SOWFactory sowFactory;
        private SOWQuery sowQuery;
        private SOWEntryDataProvider sowEntryDataProvider;

        public SOWUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator sowValidator, SOWFactory sowFactory, SOWQuery sowQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
            this.sowQuery = sowQuery;
            this.sowEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, sowQuery);
        }

        private void Initialize(SOWValidator sowValidator, SOWFactory sowFactory)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
        }

        public void Update(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW sow = sowFactory.CreateFromDbAndUpdateFromDTO(sowDTO, dateStamp);  
        }

        public SaveResult<SOWEntryModel> Save(SOWDTO sowDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowValidator.Validate(sowDTO);
            bool success = false;
            SOWEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowDTO, dateStamp); 
                Db.SaveChanges();
                model = sowEntryDataProvider.Get(sowDTO.SOW_PK);
            }

            return new SaveResult<SOWEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
