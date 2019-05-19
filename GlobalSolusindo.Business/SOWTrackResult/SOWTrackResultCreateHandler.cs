using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrackResult.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultCreateHandler : CreateOperation
    {
        private SOWTrackResultValidator sowTrackResultValidator;
        private SOWTrackResultFactory sowTrackResultFactory;
        private SOWTrackResultQuery sowTrackResultQuery;
        private SOWTrackResultEntryDataProvider sowTrackResultEntryDataProvider;

        public SOWTrackResultCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWTrackResultValidator sowTrackResultValidator, SOWTrackResultFactory sowTrackResultFactory, SOWTrackResultQuery sowTrackResultQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowTrackResultValidator = sowTrackResultValidator;
            this.sowTrackResultFactory = sowTrackResultFactory;
            this.sowTrackResultQuery = sowTrackResultQuery;
            this.sowTrackResultEntryDataProvider = new SOWTrackResultEntryDataProvider(db, user, accessControl, sowTrackResultQuery);
        }

        public tblT_SOWTrackResult AddSOWTrackResult(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            if (sowTrackResultDTO == null)
                throw new ArgumentNullException("SOWTrackResult model is null.");
            tblT_SOWTrackResult sowTrackResult = sowTrackResultFactory.CreateFromDTO(sowTrackResultDTO, dateStamp);
            return Db.tblT_SOWTrackResult.Add(sowTrackResult);
        }

        public SaveResult<SOWTrackResultEntryModel> Save(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowTrackResultValidator.Validate(sowTrackResultDTO);
            bool success = false;
            SOWTrackResultEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWTrackResult sowTrackResult = AddSOWTrackResult(sowTrackResultDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowTrackResultEntryDataProvider.Get(sowTrackResult.SOWTrackResult_PK);
            }

            return new SaveResult<SOWTrackResultEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
