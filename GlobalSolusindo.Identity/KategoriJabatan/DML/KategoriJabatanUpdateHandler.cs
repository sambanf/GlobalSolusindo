using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.KategoriJabatan.EntryForm;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.KategoriJabatan.DML
{
    public class KategoriJabatanUpdateHandler : UpdateOperation
    {
        private KategoriJabatanValidator kategoriJabatanValidator;
        private KategoriJabatanFactory kategoriJabatanFactory;
        private KategoriJabatanQuery kategoriJabatanQuery;
        private KategoriJabatanEntryDataProvider kategoriJabatanEntryDataProvider;

        public KategoriJabatanUpdateHandler(GlobalSolusindoDb db, tblM_User user, KategoriJabatanValidator kategoriJabatanValidator, KategoriJabatanFactory kategoriJabatanFactory, KategoriJabatanQuery kategoriJabatanQuery, AccessControl accessControl) : base(db, user)
        {
            this.kategoriJabatanValidator = kategoriJabatanValidator;
            this.kategoriJabatanFactory = kategoriJabatanFactory;
            this.kategoriJabatanQuery = kategoriJabatanQuery;
            this.kategoriJabatanEntryDataProvider = new KategoriJabatanEntryDataProvider(db, user, accessControl, kategoriJabatanQuery);
        }

        private void Initialize(KategoriJabatanValidator kategoriJabatanValidator, KategoriJabatanFactory kategoriJabatanFactory)
        {
            this.kategoriJabatanValidator = kategoriJabatanValidator;
            this.kategoriJabatanFactory = kategoriJabatanFactory;
        }

        public void Update(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            if (kategoriJabatanDTO == null)
                throw new ArgumentNullException("KategoriJabatan model is null.");
            tblM_KategoriJabatan kategoriJabatan = kategoriJabatanFactory.CreateFromDbAndUpdateFromDTO(kategoriJabatanDTO, dateStamp);  
        }

        public SaveResult<KategoriJabatanEntryModel> Save(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = kategoriJabatanValidator.Validate(kategoriJabatanDTO);
            bool success = false;
            KategoriJabatanEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(kategoriJabatanDTO, dateStamp); 
                Db.SaveChanges();
                model = kategoriJabatanEntryDataProvider.Get(kategoriJabatanDTO.KategoriJabatan_PK);
            }

            return new SaveResult<KategoriJabatanEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
