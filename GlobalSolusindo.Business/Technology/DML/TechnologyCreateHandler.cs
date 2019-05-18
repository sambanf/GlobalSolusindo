using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Technology.EntryForm;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Technology.DML
{
    public class TechnologyCreateHandler : CreateOperation
    {
        private TechnologyValidator technologyValidator;
        private TechnologyFactory technologyFactory;
        private TechnologyQuery technologyQuery;
        private TechnologyEntryDataProvider technologyEntryDataProvider;

        public TechnologyCreateHandler(GlobalSolusindoDb db, tblM_User user, TechnologyValidator technologyValidator, TechnologyFactory technologyFactory, TechnologyQuery technologyQuery, AccessControl accessControl) : base(db, user)
        {
            this.technologyValidator = technologyValidator;
            this.technologyFactory = technologyFactory;
            this.technologyQuery = technologyQuery;
            this.technologyEntryDataProvider = new TechnologyEntryDataProvider(db, user, accessControl, technologyQuery);
        }

        public tblM_Technology Insert(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            if (technologyDTO == null)
                throw new ArgumentNullException("Technology model is null.");
            tblM_Technology technology = technologyFactory.CreateFromDTO(technologyDTO, dateStamp);
            return Db.tblM_Technology.Add(technology);
        }

        public SaveResult<TechnologyEntryModel> Save(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = technologyValidator.Validate(technologyDTO);
            bool success = false;
            TechnologyEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Technology technology = Insert(technologyDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = technologyEntryDataProvider.Get(technology.Technology_PK);
            }

            return new SaveResult<TechnologyEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
