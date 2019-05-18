using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.EntryForm;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCutiStatus.DML
{
    public class IzinCutiStatusCreateHandler : CreateOperation
    {
        private IzinCutiStatusValidator izinCutiStatusValidator;
        private IzinCutiStatusFactory izinCutiStatusFactory;
        private IzinCutiStatusQuery izinCutiStatusQuery;
        private IzinCutiStatusEntryDataProvider izinCutiStatusEntryDataProvider;

        public IzinCutiStatusCreateHandler(GlobalSolusindoDb db, tblM_User user, IzinCutiStatusValidator izinCutiStatusValidator, IzinCutiStatusFactory izinCutiStatusFactory, IzinCutiStatusQuery izinCutiStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.izinCutiStatusValidator = izinCutiStatusValidator;
            this.izinCutiStatusFactory = izinCutiStatusFactory;
            this.izinCutiStatusQuery = izinCutiStatusQuery;
            this.izinCutiStatusEntryDataProvider = new IzinCutiStatusEntryDataProvider(db, user, accessControl, izinCutiStatusQuery);
        }

        public tblM_IzinCutiStatus Insert(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            if (izinCutiStatusDTO == null)
                throw new ArgumentNullException("IzinCutiStatus model is null.");
            tblM_IzinCutiStatus izinCutiStatus = izinCutiStatusFactory.CreateFromDTO(izinCutiStatusDTO, dateStamp);
            return Db.tblM_IzinCutiStatus.Add(izinCutiStatus);
        }

        public SaveResult<IzinCutiStatusEntryModel> Save(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = izinCutiStatusValidator.Validate(izinCutiStatusDTO);
            bool success = false;
            IzinCutiStatusEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_IzinCutiStatus izinCutiStatus = Insert(izinCutiStatusDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = izinCutiStatusEntryDataProvider.Get(izinCutiStatus.IzinCutiStatus_PK);
            }

            return new SaveResult<IzinCutiStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
