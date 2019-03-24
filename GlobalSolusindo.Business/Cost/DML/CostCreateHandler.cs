using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cost.EntryForm;
using GlobalSolusindo.Business.Cost.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cost.DML
{
    public class CostCreateHandler : CreateOperation
    {
        private CostValidator costValidator;
        private CostFactory costFactory;
        private CostQuery costQuery;
        private CostEntryDataProvider costEntryDataProvider;

        public CostCreateHandler(GlobalSolusindoDb db, tblM_User user, CostValidator costValidator, CostFactory costFactory, CostQuery costQuery, AccessControl accessControl) : base(db, user)
        {
            this.costValidator = costValidator;
            this.costFactory = costFactory;
            this.costQuery = costQuery;
            this.costEntryDataProvider = new CostEntryDataProvider(db, user, accessControl, costQuery);
        }

        public tblT_Cost Insert(CostDTO costDTO, DateTime dateStamp)
        {
            if (costDTO == null)
                throw new ArgumentNullException("Cost model is null.");
            tblT_Cost cost = costFactory.CreateFromDTO(costDTO, dateStamp);
            return Db.tblT_Cost.Add(cost);
        }

        public SaveResult<CostEntryModel> Save(CostDTO costDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = costValidator.Validate(costDTO);
            bool success = false;
            CostEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_Cost cost = Insert(costDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = costEntryDataProvider.Get(cost.Cost_PK);
            }

            return new SaveResult<CostEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
