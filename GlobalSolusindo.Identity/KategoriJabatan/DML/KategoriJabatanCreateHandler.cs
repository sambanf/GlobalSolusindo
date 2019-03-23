using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.EntryForm;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.KategoriJabatan.DML
{
    public class KategoriJabatanCreateHandler : CreateOperation
    {
        private KategoriJabatanValidator kategoriJabatanValidator;
        private KategoriJabatanFactory kategoriJabatanFactory;
        private KategoriJabatanQuery kategoriJabatanQuery;
        private KategoriJabatanEntryDataProvider kategoriJabatanEntryDataProvider;

        public KategoriJabatanCreateHandler(GlobalSolusindoDb db, tblM_User user, KategoriJabatanValidator kategoriJabatanValidator, KategoriJabatanFactory kategoriJabatanFactory, KategoriJabatanQuery kategoriJabatanQuery, AccessControl accessControl) : base(db, user)
        {
            this.kategoriJabatanValidator = kategoriJabatanValidator;
            this.kategoriJabatanFactory = kategoriJabatanFactory;
            this.kategoriJabatanQuery = kategoriJabatanQuery;
            this.kategoriJabatanEntryDataProvider = new KategoriJabatanEntryDataProvider(db, user, accessControl, kategoriJabatanQuery);
        }

        public tblM_KategoriJabatan Insert(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            if (kategoriJabatanDTO == null)
                throw new ArgumentNullException("KategoriJabatan model is null.");
            tblM_KategoriJabatan kategoriJabatan = kategoriJabatanFactory.CreateFromDTO(kategoriJabatanDTO, dateStamp);
            return Db.tblM_KategoriJabatan.Add(kategoriJabatan);
        }

        public SaveResult<KategoriJabatanEntryModel> Save(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = kategoriJabatanValidator.Validate(kategoriJabatanDTO);
            bool success = false;
            KategoriJabatanEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_KategoriJabatan kategoriJabatan = Insert(kategoriJabatanDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = kategoriJabatanEntryDataProvider.Get(kategoriJabatan.KategoriJabatan_PK);
            }

            return new SaveResult<KategoriJabatanEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
