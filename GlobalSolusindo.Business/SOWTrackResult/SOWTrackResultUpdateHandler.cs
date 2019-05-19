using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrackResult.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultUpdateHandler : UpdateOperation
    {
        private SOWTrackResultValidator sowTrackResultValidator;
        private SOWTrackResultFactory sowTrackResultFactory;
        private SOWTrackResultQuery sowTrackResultQuery;
        private SOWTrackResultEntryDataProvider sowTrackResultEntryDataProvider;

        public SOWTrackResultUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWTrackResultValidator sowTrackResultValidator, SOWTrackResultFactory sowTrackResultFactory, SOWTrackResultQuery sowTrackResultQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowTrackResultValidator = sowTrackResultValidator;
            this.sowTrackResultFactory = sowTrackResultFactory;
            this.sowTrackResultQuery = sowTrackResultQuery;
            this.sowTrackResultEntryDataProvider = new SOWTrackResultEntryDataProvider(db, user, accessControl, sowTrackResultQuery);
        }

        private void Initialize(SOWTrackResultValidator sowTrackResultValidator, SOWTrackResultFactory sowTrackResultFactory)
        {
            this.sowTrackResultValidator = sowTrackResultValidator;
            this.sowTrackResultFactory = sowTrackResultFactory;
        }

        public void Update(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            if (sowTrackResultDTO == null)
                throw new ArgumentNullException("SOWTrackResult model is null.");
            tblT_SOWTrackResult sowTrackResult = sowTrackResultFactory.CreateFromDbAndUpdateFromDTO(sowTrackResultDTO, dateStamp);  
        }

        public SaveResult<SOWTrackResultEntryModel> Save(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowTrackResultValidator.Validate(sowTrackResultDTO);
            bool success = false;
            SOWTrackResultEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowTrackResultDTO, dateStamp); 
                Db.SaveChanges();
                model = sowTrackResultEntryDataProvider.Get(sowTrackResultDTO.SOWTrackResult_PK);
            }

            return new SaveResult<SOWTrackResultEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
