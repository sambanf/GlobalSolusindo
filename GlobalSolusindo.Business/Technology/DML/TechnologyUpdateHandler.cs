using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Technology.EntryForm;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Technology.DML
{
    public class TechnologyUpdateHandler : UpdateOperation
    {
        private TechnologyValidator technologyValidator;
        private TechnologyFactory technologyFactory;
        private TechnologyQuery technologyQuery;
        private TechnologyEntryDataProvider technologyEntryDataProvider;

        public TechnologyUpdateHandler(GlobalSolusindoDb db, tblM_User user, TechnologyValidator technologyValidator, TechnologyFactory technologyFactory, TechnologyQuery technologyQuery, AccessControl accessControl) : base(db, user)
        {
            this.technologyValidator = technologyValidator;
            this.technologyFactory = technologyFactory;
            this.technologyQuery = technologyQuery;
            this.technologyEntryDataProvider = new TechnologyEntryDataProvider(db, user, accessControl, technologyQuery);
        }

        private void Initialize(TechnologyValidator technologyValidator, TechnologyFactory technologyFactory)
        {
            this.technologyValidator = technologyValidator;
            this.technologyFactory = technologyFactory;
        }

        public void Update(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            if (technologyDTO == null)
                throw new ArgumentNullException("Technology model is null.");
            tblM_Technology technology = technologyFactory.CreateFromDbAndUpdateFromDTO(technologyDTO, dateStamp);  
        }

        public SaveResult<TechnologyEntryModel> Save(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = technologyValidator.Validate(technologyDTO);
            bool success = false;
            TechnologyEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(technologyDTO, dateStamp); 
                Db.SaveChanges();
                model = technologyEntryDataProvider.Get(technologyDTO.Technology_PK);
            }

            return new SaveResult<TechnologyEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
