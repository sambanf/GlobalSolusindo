using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.EntryForm;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CostKategori.DML
{
    public class CostKategoriUpdateHandler : UpdateOperation
    {
        private CostKategoriValidator costKategoriValidator;
        private CostKategoriFactory costKategoriFactory;
        private CostKategoriQuery costKategoriQuery;
        private CostKategoriEntryDataProvider costKategoriEntryDataProvider;

        public CostKategoriUpdateHandler(GlobalSolusindoDb db, tblM_User user, CostKategoriValidator costKategoriValidator, CostKategoriFactory costKategoriFactory, CostKategoriQuery costKategoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.costKategoriValidator = costKategoriValidator;
            this.costKategoriFactory = costKategoriFactory;
            this.costKategoriQuery = costKategoriQuery;
            this.costKategoriEntryDataProvider = new CostKategoriEntryDataProvider(db, user, accessControl, costKategoriQuery);
        }

        private void Initialize(CostKategoriValidator costKategoriValidator, CostKategoriFactory costKategoriFactory)
        {
            this.costKategoriValidator = costKategoriValidator;
            this.costKategoriFactory = costKategoriFactory;
        }

        public void Update(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            if (costKategoriDTO == null)
                throw new ArgumentNullException("CostKategori model is null.");
            tblM_CostKategori costKategori = costKategoriFactory.CreateFromDbAndUpdateFromDTO(costKategoriDTO, dateStamp);  
        }

        public SaveResult<CostKategoriEntryModel> Save(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = costKategoriValidator.Validate(costKategoriDTO);
            bool success = false;
            CostKategoriEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(costKategoriDTO, dateStamp); 
                Db.SaveChanges();
                model = costKategoriEntryDataProvider.Get(costKategoriDTO.CostKategori_PK);
            }

            return new SaveResult<CostKategoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
