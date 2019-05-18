using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrack.EntryForm;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWTrack.DML
{
    public class SOWTrackUpdateHandler : UpdateOperation
    {
        private SOWTrackValidator sowTrackValidator;
        private SOWTrackFactory sowTrackFactory;
        private SOWTrackQuery sowTrackQuery;
        private SOWTrackEntryDataProvider sowTrackEntryDataProvider;

        public SOWTrackUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWTrackValidator sowTrackValidator, SOWTrackFactory sowTrackFactory, SOWTrackQuery sowTrackQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowTrackValidator = sowTrackValidator;
            this.sowTrackFactory = sowTrackFactory;
            this.sowTrackQuery = sowTrackQuery;
            this.sowTrackEntryDataProvider = new SOWTrackEntryDataProvider(db, user, accessControl, sowTrackQuery);
        }

        private void Initialize(SOWTrackValidator sowTrackValidator, SOWTrackFactory sowTrackFactory)
        {
            this.sowTrackValidator = sowTrackValidator;
            this.sowTrackFactory = sowTrackFactory;
        }

        public void Update(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            if (sowTrackDTO == null)
                throw new ArgumentNullException("SOWTrack model is null.");
            tblT_SOWTrack sowTrack = sowTrackFactory.CreateFromDbAndUpdateFromDTO(sowTrackDTO, dateStamp);  
        }

        public SaveResult<SOWTrackEntryModel> Save(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowTrackValidator.Validate(sowTrackDTO);
            bool success = false;
            SOWTrackEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(sowTrackDTO, dateStamp); 
                Db.SaveChanges();
                model = sowTrackEntryDataProvider.Get(sowTrackDTO.SOWTrack_PK);
            }

            return new SaveResult<SOWTrackEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
