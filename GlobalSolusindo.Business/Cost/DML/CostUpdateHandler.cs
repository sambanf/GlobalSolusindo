using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cost.EntryForm;
using GlobalSolusindo.Business.Cost.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cost.DML
{
    public class CostUpdateHandler : UpdateOperation
    {
        private CostValidator costValidator;
        private CostFactory costFactory;
        private CostQuery costQuery;
        private CostEntryDataProvider costEntryDataProvider;

        public CostUpdateHandler(GlobalSolusindoDb db, tblM_User user, CostValidator costValidator, CostFactory costFactory, CostQuery costQuery, AccessControl accessControl) : base(db, user)
        {
            this.costValidator = costValidator;
            this.costFactory = costFactory;
            this.costQuery = costQuery;
            this.costEntryDataProvider = new CostEntryDataProvider(db, user, accessControl, costQuery);
        }

        private void Initialize(CostValidator costValidator, CostFactory costFactory)
        {
            this.costValidator = costValidator;
            this.costFactory = costFactory;
        }

        public void Update(CostDTO costDTO, DateTime dateStamp)
        {
            if (costDTO == null)
                throw new ArgumentNullException("Cost model is null.");
            tblT_Cost cost = costFactory.CreateFromDbAndUpdateFromDTO(costDTO, dateStamp);  
        }

        public SaveResult<CostEntryModel> Save(CostDTO costDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = costValidator.Validate(costDTO);
            bool success = false;
            CostEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(costDTO, dateStamp); 
                Db.SaveChanges();
                model = costEntryDataProvider.Get(costDTO.Cost_PK);
            }

            return new SaveResult<CostEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
