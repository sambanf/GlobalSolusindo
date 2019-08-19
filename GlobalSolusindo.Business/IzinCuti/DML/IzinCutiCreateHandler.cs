using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCuti.DML
{
    public class IzinCutiCreateHandler : CreateOperation
    {
        private IzinCutiValidator izinCutiValidator;
        private IzinCutiFactory izinCutiFactory;
        private IzinCutiQuery izinCutiQuery;
        private IzinCutiEntryDataProvider izinCutiEntryDataProvider;

        public IzinCutiCreateHandler(GlobalSolusindoDb db, tblM_User user, IzinCutiValidator izinCutiValidator, IzinCutiFactory izinCutiFactory, IzinCutiQuery izinCutiQuery, AccessControl accessControl) : base(db, user)
        {
            this.izinCutiValidator = izinCutiValidator;
            this.izinCutiFactory = izinCutiFactory;
            this.izinCutiQuery = izinCutiQuery;
            this.izinCutiEntryDataProvider = new IzinCutiEntryDataProvider(db, user, accessControl, izinCutiQuery);
        }

        public tblT_IzinCuti Insert(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            if (izinCutiDTO == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            tblT_IzinCuti izinCuti = izinCutiFactory.CreateFromDTO(izinCutiDTO, dateStamp);
            return Db.tblT_IzinCuti.Add(izinCuti);
        }

        public SaveResult<IzinCutiEntryModel> Save(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = izinCutiValidator.Validate(izinCutiDTO);
            bool success = false;
            IzinCutiEntryModel model = null;
            if (validationResult.IsValid)
            {
                izinCutiDTO.IzinCutiStatus_FK = 1;
                tblT_IzinCuti izinCuti = Insert(izinCutiDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = izinCutiEntryDataProvider.Get(izinCuti.IzinCuti_PK);
            }

            return new SaveResult<IzinCutiEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
