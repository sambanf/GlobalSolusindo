using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cabang.EntryForm;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cabang.DML
{
    public class CabangUpdateHandler : UpdateOperation
    {
        private CabangValidator cabangValidator;
        private CabangFactory cabangFactory;
        private CabangQuery cabangQuery;
        private CabangEntryDataProvider cabangEntryDataProvider;

        public CabangUpdateHandler(GlobalSolusindoDb db, tblM_User user, CabangValidator cabangValidator, CabangFactory cabangFactory, CabangQuery cabangQuery, AccessControl accessControl) : base(db, user)
        {
            this.cabangValidator = cabangValidator;
            this.cabangFactory = cabangFactory;
            this.cabangQuery = cabangQuery;
            this.cabangEntryDataProvider = new CabangEntryDataProvider(db, user, accessControl, cabangQuery);
        }

        private void Initialize(CabangValidator cabangValidator, CabangFactory cabangFactory)
        {
            this.cabangValidator = cabangValidator;
            this.cabangFactory = cabangFactory;
        }

        public void Update(CabangDTO cabangDTO, DateTime dateStamp)
        {
            if (cabangDTO == null)
                throw new ArgumentNullException("Cabang model is null.");
            tblM_Cabang cabang = cabangFactory.CreateFromDbAndUpdateFromDTO(cabangDTO, dateStamp);  
        }

        public SaveResult<CabangEntryModel> Save(CabangDTO cabangDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = cabangValidator.Validate(cabangDTO);
            bool success = false;
            CabangEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(cabangDTO, dateStamp); 
                Db.SaveChanges();
                model = cabangEntryDataProvider.Get(cabangDTO.Cabang_PK);
            }

            return new SaveResult<CabangEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
