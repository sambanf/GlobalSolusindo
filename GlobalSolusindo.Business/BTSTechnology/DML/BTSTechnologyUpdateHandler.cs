using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.EntryForm;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSTechnology.DML
{
    public class BTSTechnologyUpdateHandler : UpdateOperation
    {
        private BTSTechnologyValidator btsTechnologyValidator;
        private BTSTechnologyFactory btsTechnologyFactory;
        private BTSTechnologyQuery btsTechnologyQuery;
        private BTSTechnologyEntryDataProvider btsTechnologyEntryDataProvider;

        public BTSTechnologyUpdateHandler(GlobalSolusindoDb db, tblM_User user, BTSTechnologyValidator btsTechnologyValidator, BTSTechnologyFactory btsTechnologyFactory, BTSTechnologyQuery btsTechnologyQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsTechnologyValidator = btsTechnologyValidator;
            this.btsTechnologyFactory = btsTechnologyFactory;
            this.btsTechnologyQuery = btsTechnologyQuery;
            this.btsTechnologyEntryDataProvider = new BTSTechnologyEntryDataProvider(db, user, accessControl, btsTechnologyQuery);
        }

        private void Initialize(BTSTechnologyValidator btsTechnologyValidator, BTSTechnologyFactory btsTechnologyFactory)
        {
            this.btsTechnologyValidator = btsTechnologyValidator;
            this.btsTechnologyFactory = btsTechnologyFactory;
        }

        public void Update(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            if (btsTechnologyDTO == null)
                throw new ArgumentNullException("BTSTechnology model is null.");
            tblM_BTSTechnology btsTechnology = btsTechnologyFactory.CreateFromDbAndUpdateFromDTO(btsTechnologyDTO, dateStamp);  
        }

        public SaveResult<BTSTechnologyEntryModel> Save(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsTechnologyValidator.Validate(btsTechnologyDTO);
            bool success = false;
            BTSTechnologyEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(btsTechnologyDTO, dateStamp); 
                Db.SaveChanges();
                model = btsTechnologyEntryDataProvider.Get(btsTechnologyDTO.BTSTechnology_PK);
            }

            return new SaveResult<BTSTechnologyEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
