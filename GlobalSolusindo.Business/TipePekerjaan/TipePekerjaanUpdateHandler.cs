using GlobalSolusindo.Base;
using GlobalSolusindo.Business.TipePekerjaan.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanUpdateHandler : UpdateOperation
    {
        private TipePekerjaanValidator tipePekerjaanValidator;
        private TipePekerjaanFactory tipePekerjaanFactory;
        private TipePekerjaanQuery tipePekerjaanQuery;
        private TipePekerjaanEntryDataProvider tipePekerjaanEntryDataProvider;

        public TipePekerjaanUpdateHandler(GlobalSolusindoDb db, tblM_User user, TipePekerjaanValidator tipePekerjaanValidator, TipePekerjaanFactory tipePekerjaanFactory, TipePekerjaanQuery tipePekerjaanQuery, AccessControl accessControl) : base(db, user)
        {
            this.tipePekerjaanValidator = tipePekerjaanValidator;
            this.tipePekerjaanFactory = tipePekerjaanFactory;
            this.tipePekerjaanQuery = tipePekerjaanQuery;
            this.tipePekerjaanEntryDataProvider = new TipePekerjaanEntryDataProvider(db, user, accessControl, tipePekerjaanQuery);
        }

        private void Initialize(TipePekerjaanValidator tipePekerjaanValidator, TipePekerjaanFactory tipePekerjaanFactory)
        {
            this.tipePekerjaanValidator = tipePekerjaanValidator;
            this.tipePekerjaanFactory = tipePekerjaanFactory;
        }

        public void UpdateTipePekerjaan(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            if (tipePekerjaanDTO == null)
                throw new ArgumentNullException("TipePekerjaan model is null.");
            tblM_TipePekerjaan tipePekerjaan = tipePekerjaanFactory.CreateFromDbAndUpdateFromDTO(tipePekerjaanDTO, dateStamp);
        }

        public SaveResult<TipePekerjaanEntryModel> Save(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = tipePekerjaanValidator.Validate(tipePekerjaanDTO);
            bool success = false;
            TipePekerjaanEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateTipePekerjaan(tipePekerjaanDTO, dateStamp);
                Db.SaveChanges();
                model = tipePekerjaanEntryDataProvider.Get(tipePekerjaanDTO.TipePekerjaan_PK);
            }

            return new SaveResult<TipePekerjaanEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
