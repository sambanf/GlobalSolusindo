using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.EntryForm;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCutiStatus.DML
{
    public class IzinCutiStatusUpdateHandler : UpdateOperation
    {
        private IzinCutiStatusValidator izinCutiStatusValidator;
        private IzinCutiStatusFactory izinCutiStatusFactory;
        private IzinCutiStatusQuery izinCutiStatusQuery;
        private IzinCutiStatusEntryDataProvider izinCutiStatusEntryDataProvider;

        public IzinCutiStatusUpdateHandler(GlobalSolusindoDb db, tblM_User user, IzinCutiStatusValidator izinCutiStatusValidator, IzinCutiStatusFactory izinCutiStatusFactory, IzinCutiStatusQuery izinCutiStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.izinCutiStatusValidator = izinCutiStatusValidator;
            this.izinCutiStatusFactory = izinCutiStatusFactory;
            this.izinCutiStatusQuery = izinCutiStatusQuery;
            this.izinCutiStatusEntryDataProvider = new IzinCutiStatusEntryDataProvider(db, user, accessControl, izinCutiStatusQuery);
        }

        private void Initialize(IzinCutiStatusValidator izinCutiStatusValidator, IzinCutiStatusFactory izinCutiStatusFactory)
        {
            this.izinCutiStatusValidator = izinCutiStatusValidator;
            this.izinCutiStatusFactory = izinCutiStatusFactory;
        }

        public void Update(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            if (izinCutiStatusDTO == null)
                throw new ArgumentNullException("IzinCutiStatus model is null.");
            tblM_IzinCutiStatus izinCutiStatus = izinCutiStatusFactory.CreateFromDbAndUpdateFromDTO(izinCutiStatusDTO, dateStamp);  
        }

        public SaveResult<IzinCutiStatusEntryModel> Save(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = izinCutiStatusValidator.Validate(izinCutiStatusDTO);
            bool success = false;
            IzinCutiStatusEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(izinCutiStatusDTO, dateStamp); 
                Db.SaveChanges();
                model = izinCutiStatusEntryDataProvider.Get(izinCutiStatusDTO.IzinCutiStatus_PK);
            }

            return new SaveResult<IzinCutiStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
