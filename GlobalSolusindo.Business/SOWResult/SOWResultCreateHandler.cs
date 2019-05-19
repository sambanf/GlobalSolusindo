using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWResult.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultCreateHandler : CreateOperation
    {
        private SOWResultValidator sowResultValidator;
        private SOWResultFactory sowResultFactory;
        private SOWResultQuery sowResultQuery;
        private SOWResultEntryDataProvider sowResultEntryDataProvider;

        public SOWResultCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWResultValidator sowResultValidator, SOWResultFactory sowResultFactory, SOWResultQuery sowResultQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowResultValidator = sowResultValidator;
            this.sowResultFactory = sowResultFactory;
            this.sowResultQuery = sowResultQuery;
            this.sowResultEntryDataProvider = new SOWResultEntryDataProvider(db, user, accessControl, sowResultQuery);
        }

        public tblT_SOWResult AddSOWResult(SOWResultDTO sowResultDTO, DateTime dateStamp)
        {
            if (sowResultDTO == null)
                throw new ArgumentNullException("SOWResult model is null.");
            tblT_SOWResult sowResult = sowResultFactory.CreateFromDTO(sowResultDTO, dateStamp);
            return Db.tblT_SOWResult.Add(sowResult);
        }

        public SaveResult<SOWResultEntryModel> Save(SOWResultDTO sowResultDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowResultValidator.Validate(sowResultDTO);
            bool success = false;
            SOWResultEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOWResult sowResult = AddSOWResult(sowResultDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = sowResultEntryDataProvider.Get(sowResult.SOWResult_PK);
            }

            return new SaveResult<SOWResultEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
