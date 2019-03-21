using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetKategori.EntryForm;
using GlobalSolusindo.Business.AsetKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetKategori.DML
{
    public class AsetKategoriCreateHandler : CreateOperation
    {
        private AsetKategoriValidator asetKategoriValidator;
        private AsetKategoriFactory asetKategoriFactory;
        private AsetKategoriQuery asetKategoriQuery;
        private AsetKategoriEntryDataProvider asetKategoriEntryDataProvider;

        public AsetKategoriCreateHandler(GlobalSolusindoDb db, tblM_User user, AsetKategoriValidator asetKategoriValidator, AsetKategoriFactory asetKategoriFactory, AsetKategoriQuery asetKategoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetKategoriValidator = asetKategoriValidator;
            this.asetKategoriFactory = asetKategoriFactory;
            this.asetKategoriQuery = asetKategoriQuery;
            this.asetKategoriEntryDataProvider = new AsetKategoriEntryDataProvider(db, user, accessControl, asetKategoriQuery);
        }

        public tblM_AsetKategori Insert(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            if (asetKategoriDTO == null)
                throw new ArgumentNullException("AsetKategori model is null.");
            tblM_AsetKategori asetKategori = asetKategoriFactory.CreateFromDTO(asetKategoriDTO, dateStamp);
            return Db.tblM_AsetKategori.Add(asetKategori);
        }

        public SaveResult<AsetKategoriEntryModel> Save(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetKategoriValidator.Validate(asetKategoriDTO);
            bool success = false;
            AsetKategoriEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_AsetKategori asetKategori = Insert(asetKategoriDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = asetKategoriEntryDataProvider.Get(asetKategori.AsetKategori_PK);
            }

            return new SaveResult<AsetKategoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
