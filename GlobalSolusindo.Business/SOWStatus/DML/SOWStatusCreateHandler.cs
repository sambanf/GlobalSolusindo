using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWStatus.EntryForm;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWStatus.DML
{
    public class SOWStatusCreateHandler : CreateOperation
    {
        private SOWStatusValidator sowStatusValidator;
        private SOWStatusFactory sowStatusFactory;
        private SOWStatusQuery sowStatusQuery;
        private SOWStatusEntryDataProvider sowStatusEntryDataProvider;

        public SOWStatusCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWStatusValidator sowStatusValidator, SOWStatusFactory sowStatusFactory, SOWStatusQuery sowStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowStatusValidator = sowStatusValidator;
            this.sowStatusFactory = sowStatusFactory;
            this.sowStatusQuery = sowStatusQuery;
            this.sowStatusEntryDataProvider = new SOWStatusEntryDataProvider(db, user, accessControl, sowStatusQuery);
        }

        public tblT_SOWStatus Insert(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            if (sowStatusDTO == null)
                throw new ArgumentNullException("SOWStatus model is null.");
            tblT_SOWStatus sowStatus = sowStatusFactory.CreateFromDTO(sowStatusDTO, dateStamp);
            return Db.tblT_SOWStatus.Add(sowStatus);
        }

        public SaveResult<SOWStatusEntryModel> Save(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowStatusValidator.Validate(sowStatusDTO);
            bool success = false;
            SOWStatusEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWStatus sowStatus = Insert(sowStatusDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowStatusEntryDataProvider.Get(sowStatus.SOWStatus_PK);
            }

            return new SaveResult<SOWStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
