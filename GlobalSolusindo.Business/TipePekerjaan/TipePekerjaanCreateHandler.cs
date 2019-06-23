using GlobalSolusindo.Base;
using GlobalSolusindo.Business.TipePekerjaan.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanCreateHandler : CreateOperation
    {
        private TipePekerjaanValidator tipePekerjaanValidator;
        private TipePekerjaanFactory tipePekerjaanFactory;
        private TipePekerjaanQuery tipePekerjaanQuery;
        private TipePekerjaanEntryDataProvider tipePekerjaanEntryDataProvider;

        public TipePekerjaanCreateHandler(GlobalSolusindoDb db, tblM_User user, TipePekerjaanValidator tipePekerjaanValidator, TipePekerjaanFactory tipePekerjaanFactory, TipePekerjaanQuery tipePekerjaanQuery, AccessControl accessControl) : base(db, user)
        {
            this.tipePekerjaanValidator = tipePekerjaanValidator;
            this.tipePekerjaanFactory = tipePekerjaanFactory;
            this.tipePekerjaanQuery = tipePekerjaanQuery;
            this.tipePekerjaanEntryDataProvider = new TipePekerjaanEntryDataProvider(db, user, accessControl, tipePekerjaanQuery);
        }

        public tblM_TipePekerjaan AddTipePekerjaan(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            if (tipePekerjaanDTO == null)
                throw new ArgumentNullException("TipePekerjaan model is null.");
            tblM_TipePekerjaan tipePekerjaan = tipePekerjaanFactory.CreateFromDTO(tipePekerjaanDTO, dateStamp);
            return Db.tblM_TipePekerjaan.Add(tipePekerjaan);
        }

        public SaveResult<TipePekerjaanEntryModel> Save(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = tipePekerjaanValidator.Validate(tipePekerjaanDTO);
            bool success = false;
            TipePekerjaanEntryModel model = null;
            if (!validationResult.IsValid)
            {
                return new SaveResult<TipePekerjaanEntryModel>
                {
                    Success = success,
                    Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                    Model = model,
                    ValidationResult = validationResult
                };

            }
            tblM_TipePekerjaan tipePekerjaan = AddTipePekerjaan(tipePekerjaanDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = tipePekerjaanEntryDataProvider.Get(tipePekerjaan.TipePekerjaan_PK);

            return new SaveResult<TipePekerjaanEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
