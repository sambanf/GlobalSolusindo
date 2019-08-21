using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWResult.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultUpdateHandler : UpdateOperation
    {
        private SOWResultValidator sowResultValidator;
        private SOWResultFactory sowResultFactory;
        private SOWResultQuery sowResultQuery;
        private SOWResultEntryDataProvider sowResultEntryDataProvider;

        public SOWResultUpdateHandler(GlobalSolusindoDb db, tblM_User user, SOWResultValidator sowResultValidator, SOWResultFactory sowResultFactory, SOWResultQuery sowResultQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowResultValidator = sowResultValidator;
            this.sowResultFactory = sowResultFactory;
            this.sowResultQuery = sowResultQuery;
            this.sowResultEntryDataProvider = new SOWResultEntryDataProvider(db, user, accessControl, sowResultQuery);
        }

        private void Initialize(SOWResultValidator sowResultValidator, SOWResultFactory sowResultFactory)
        {
            this.sowResultValidator = sowResultValidator;
            this.sowResultFactory = sowResultFactory;
        }

        public void Update(SOWResultDTO sowResultDTO, DateTime dateStamp)
        {
            if (sowResultDTO == null)
                throw new ArgumentNullException("SOWResult model is null.");
            tblT_SOWResult sowResult = sowResultFactory.CreateFromDbAndUpdateFromDTO(sowResultDTO, dateStamp);
        }

        public SaveResult<SOWResultEntryModel> Save(SOWResultDTO sowResultDTO, DateTime dateStamp, tblM_User user)
        {
            ModelValidationResult validationResult = sowResultValidator.Validate(sowResultDTO);
            bool success = false;
            SOWResultEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                Update(sowResultDTO, dateStamp);
                Db.SaveChanges();
                model = sowResultEntryDataProvider.Get(sowResultDTO.SOWResult_PK);

                Db.sp_SOWStatusUpdateApprove(sowResultDTO.SOWResult_PK, user.User_PK);
            }

            return new SaveResult<SOWResultEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
