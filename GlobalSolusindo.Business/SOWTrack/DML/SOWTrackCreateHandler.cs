using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrack.EntryForm;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWTrack.DML
{
    public class SOWTrackCreateHandler : CreateOperation
    {
        private SOWTrackValidator sowTrackValidator;
        private SOWTrackFactory sowTrackFactory;
        private SOWTrackQuery sowTrackQuery;
        private SOWTrackEntryDataProvider sowTrackEntryDataProvider;

        public SOWTrackCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWTrackValidator sowTrackValidator, SOWTrackFactory sowTrackFactory, SOWTrackQuery sowTrackQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowTrackValidator = sowTrackValidator;
            this.sowTrackFactory = sowTrackFactory;
            this.sowTrackQuery = sowTrackQuery;
            this.sowTrackEntryDataProvider = new SOWTrackEntryDataProvider(db, user, accessControl, sowTrackQuery);
        }

        public tblT_SOWTrack Insert(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            if (sowTrackDTO == null)
                throw new ArgumentNullException("SOWTrack model is null.");
            tblT_SOWTrack sowTrack = sowTrackFactory.CreateFromDTO(sowTrackDTO, dateStamp);
            return Db.tblT_SOWTrack.Add(sowTrack);
        }

        public SaveResult<SOWTrackEntryModel> Save(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowTrackValidator.Validate(sowTrackDTO);
            bool success = false;
            SOWTrackEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWTrack sowTrack = Insert(sowTrackDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowTrackEntryDataProvider.Get(sowTrack.SOWTrack_PK);
            }

            return new SaveResult<SOWTrackEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
