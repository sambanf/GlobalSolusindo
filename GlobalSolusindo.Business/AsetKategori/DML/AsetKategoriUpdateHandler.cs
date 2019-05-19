using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetKategori.EntryForm;
using GlobalSolusindo.Business.AsetKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetKategori.DML
{
    public class AsetKategoriUpdateHandler : UpdateOperation
    {
        private AsetKategoriValidator asetKategoriValidator;
        private AsetKategoriFactory asetKategoriFactory;
        private AsetKategoriQuery asetKategoriQuery;
        private AsetKategoriEntryDataProvider asetKategoriEntryDataProvider;

        public AsetKategoriUpdateHandler(GlobalSolusindoDb db, tblM_User user, AsetKategoriValidator asetKategoriValidator, AsetKategoriFactory asetKategoriFactory, AsetKategoriQuery asetKategoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetKategoriValidator = asetKategoriValidator;
            this.asetKategoriFactory = asetKategoriFactory;
            this.asetKategoriQuery = asetKategoriQuery;
            this.asetKategoriEntryDataProvider = new AsetKategoriEntryDataProvider(db, user, accessControl, asetKategoriQuery);
        }

        private void Initialize(AsetKategoriValidator asetKategoriValidator, AsetKategoriFactory asetKategoriFactory)
        {
            this.asetKategoriValidator = asetKategoriValidator;
            this.asetKategoriFactory = asetKategoriFactory;
        }

        public void Update(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            if (asetKategoriDTO == null)
                throw new ArgumentNullException("AsetKategori model is null.");
            tblM_AsetKategori asetKategori = asetKategoriFactory.CreateFromDbAndUpdateFromDTO(asetKategoriDTO, dateStamp);  
        }

        public SaveResult<AsetKategoriEntryModel> Save(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetKategoriValidator.Validate(asetKategoriDTO);
            bool success = false;
            AsetKategoriEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(asetKategoriDTO, dateStamp); 
                Db.SaveChanges();
                model = asetKategoriEntryDataProvider.Get(asetKategoriDTO.AsetKategori_PK);
            }

            return new SaveResult<AsetKategoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
