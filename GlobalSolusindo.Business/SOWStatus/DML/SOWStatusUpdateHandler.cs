using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWStatus.EntryForm;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWStatus.DML
{
    public class SOWStatusUpdateHandler : UpdateOperation
    {
        private SOWStatusValidator sowStatusValidator;
        private SOWStatusFactory sowStatusFactory;
        private SOWStatusQuery sowStatusQuery;
        private SOWStatusEntryDataProvider sowStatusEntryDataProvider;

        public SOWStatusUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWStatusValidator sowStatusValidator, SOWStatusFactory sowStatusFactory, SOWStatusQuery sowStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowStatusValidator = sowStatusValidator;
            this.sowStatusFactory = sowStatusFactory;
            this.sowStatusQuery = sowStatusQuery;
            this.sowStatusEntryDataProvider = new SOWStatusEntryDataProvider(db, user, accessControl, sowStatusQuery);
        }

        private void Initialize(SOWStatusValidator sowStatusValidator, SOWStatusFactory sowStatusFactory)
        {
            this.sowStatusValidator = sowStatusValidator;
            this.sowStatusFactory = sowStatusFactory;
        }

        public void Update(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            if (sowStatusDTO == null)
                throw new ArgumentNullException("SOWStatus model is null.");
            tblT_SOWStatus sowStatus = sowStatusFactory.CreateFromDbAndUpdateFromDTO(sowStatusDTO, dateStamp);  
        }

        public SaveResult<SOWStatusEntryModel> Save(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowStatusValidator.Validate(sowStatusDTO);
            bool success = false;
            SOWStatusEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowStatusDTO, dateStamp); 
                Db.SaveChanges();
                model = sowStatusEntryDataProvider.Get(sowStatusDTO.SOWStatus_PK);
            }

            return new SaveResult<SOWStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
