using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCuti.DML
{
    public class IzinCutiUpdateHandler : UpdateOperation
    {
        private IzinCutiValidator izinCutiValidator;
        private IzinCutiFactory izinCutiFactory;
        private IzinCutiQuery izinCutiQuery;
        private IzinCutiEntryDataProvider izinCutiEntryDataProvider;

        public IzinCutiUpdateHandler(GlobalSolusindoDb db, tblM_User user, IzinCutiValidator izinCutiValidator, IzinCutiFactory izinCutiFactory, IzinCutiQuery izinCutiQuery, AccessControl accessControl) : base(db, user)
        {
            this.izinCutiValidator = izinCutiValidator;
            this.izinCutiFactory = izinCutiFactory;
            this.izinCutiQuery = izinCutiQuery;
            this.izinCutiEntryDataProvider = new IzinCutiEntryDataProvider(db, user, accessControl, izinCutiQuery);
        }

        private void Initialize(IzinCutiValidator izinCutiValidator, IzinCutiFactory izinCutiFactory)
        {
            this.izinCutiValidator = izinCutiValidator;
            this.izinCutiFactory = izinCutiFactory;
        }

        public void Update(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            if (izinCutiDTO == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            tblT_IzinCuti izinCuti = izinCutiFactory.CreateFromDbAndUpdateFromDTO(izinCutiDTO, dateStamp);  
        }

        public SaveResult<IzinCutiEntryModel> Save(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = izinCutiValidator.Validate(izinCutiDTO);
            bool success = false;
            IzinCutiEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(izinCutiDTO, dateStamp); 
                Db.SaveChanges();
                model = izinCutiEntryDataProvider.Get(izinCutiDTO.IzinCuti_PK);
            }

            return new SaveResult<IzinCutiEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
