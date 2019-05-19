using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.EntryForm;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSTechnology.DML
{
    public class BTSTechnologyCreateHandler : CreateOperation
    {
        private BTSTechnologyValidator btsTechnologyValidator;
        private BTSTechnologyFactory btsTechnologyFactory;
        private BTSTechnologyQuery btsTechnologyQuery;
        private BTSTechnologyEntryDataProvider btsTechnologyEntryDataProvider;

        public BTSTechnologyCreateHandler(GlobalSolusindoDb db, tblM_User user, BTSTechnologyValidator btsTechnologyValidator, BTSTechnologyFactory btsTechnologyFactory, BTSTechnologyQuery btsTechnologyQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsTechnologyValidator = btsTechnologyValidator;
            this.btsTechnologyFactory = btsTechnologyFactory;
            this.btsTechnologyQuery = btsTechnologyQuery;
            this.btsTechnologyEntryDataProvider = new BTSTechnologyEntryDataProvider(db, user, accessControl, btsTechnologyQuery);
        }

        public tblM_BTSTechnology Insert(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            if (btsTechnologyDTO == null)
                throw new ArgumentNullException("BTSTechnology model is null.");
            tblM_BTSTechnology btsTechnology = btsTechnologyFactory.CreateFromDTO(btsTechnologyDTO, dateStamp);
            return Db.tblM_BTSTechnology.Add(btsTechnology);
        }

        public SaveResult<BTSTechnologyEntryModel> Save(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsTechnologyValidator.Validate(btsTechnologyDTO);
            bool success = false;
            BTSTechnologyEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_BTSTechnology btsTechnology = Insert(btsTechnologyDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = btsTechnologyEntryDataProvider.Get(btsTechnology.BTSTechnology_PK);
            }

            return new SaveResult<BTSTechnologyEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
