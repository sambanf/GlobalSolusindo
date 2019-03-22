using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cabang.EntryForm;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cabang.DML
{
    public class CabangCreateHandler : CreateOperation
    {
        private CabangValidator cabangValidator;
        private CabangFactory cabangFactory;
        private CabangQuery cabangQuery;
        private CabangEntryDataProvider cabangEntryDataProvider;

        public CabangCreateHandler(GlobalSolusindoDb db, tblM_User user, CabangValidator cabangValidator, CabangFactory cabangFactory, CabangQuery cabangQuery, AccessControl accessControl) : base(db, user)
        {
            this.cabangValidator = cabangValidator;
            this.cabangFactory = cabangFactory;
            this.cabangQuery = cabangQuery;
            this.cabangEntryDataProvider = new CabangEntryDataProvider(db, user, accessControl, cabangQuery);
        }

        public tblM_Cabang Insert(CabangDTO cabangDTO, DateTime dateStamp)
        {
            if (cabangDTO == null)
                throw new ArgumentNullException("Cabang model is null.");
            tblM_Cabang cabang = cabangFactory.CreateFromDTO(cabangDTO, dateStamp);
            return Db.tblM_Cabang.Add(cabang);
        }

        public SaveResult<CabangEntryModel> Save(CabangDTO cabangDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = cabangValidator.Validate(cabangDTO);
            bool success = false;
            CabangEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Cabang cabang = Insert(cabangDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = cabangEntryDataProvider.Get(cabang.Cabang_PK);
            }

            return new SaveResult<CabangEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
