using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.EntryForm;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CostKategori.DML
{
    public class CostKategoriCreateHandler : CreateOperation
    {
        private CostKategoriValidator costKategoriValidator;
        private CostKategoriFactory costKategoriFactory;
        private CostKategoriQuery costKategoriQuery;
        private CostKategoriEntryDataProvider costKategoriEntryDataProvider;

        public CostKategoriCreateHandler(GlobalSolusindoDb db, tblM_User user, CostKategoriValidator costKategoriValidator, CostKategoriFactory costKategoriFactory, CostKategoriQuery costKategoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.costKategoriValidator = costKategoriValidator;
            this.costKategoriFactory = costKategoriFactory;
            this.costKategoriQuery = costKategoriQuery;
            this.costKategoriEntryDataProvider = new CostKategoriEntryDataProvider(db, user, accessControl, costKategoriQuery);
        }

        public tblM_CostKategori Insert(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            if (costKategoriDTO == null)
                throw new ArgumentNullException("CostKategori model is null.");
            tblM_CostKategori costKategori = costKategoriFactory.CreateFromDTO(costKategoriDTO, dateStamp);
            return Db.tblM_CostKategori.Add(costKategori);
        }

        public SaveResult<CostKategoriEntryModel> Save(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = costKategoriValidator.Validate(costKategoriDTO);
            bool success = false;
            CostKategoriEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_CostKategori costKategori = Insert(costKategoriDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = costKategoriEntryDataProvider.Get(costKategori.CostKategori_PK);
            }

            return new SaveResult<CostKategoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
