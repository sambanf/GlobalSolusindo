using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSStatus.EntryForm;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSStatus.DML
{
    public class BTSStatusUpdateHandler : UpdateOperation
    {
        private BTSStatusValidator btsStatusValidator;
        private BTSStatusFactory btsStatusFactory;
        private BTSStatusQuery btsStatusQuery;
        private BTSStatusEntryDataProvider btsStatusEntryDataProvider;

        public BTSStatusUpdateHandler(GlobalSolusindoDb db, tblM_User user, BTSStatusValidator btsStatusValidator, BTSStatusFactory btsStatusFactory, BTSStatusQuery btsStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsStatusValidator = btsStatusValidator;
            this.btsStatusFactory = btsStatusFactory;
            this.btsStatusQuery = btsStatusQuery;
            this.btsStatusEntryDataProvider = new BTSStatusEntryDataProvider(db, user, accessControl, btsStatusQuery);
        }

        private void Initialize(BTSStatusValidator btsStatusValidator, BTSStatusFactory btsStatusFactory)
        {
            this.btsStatusValidator = btsStatusValidator;
            this.btsStatusFactory = btsStatusFactory;
        }

        public void Update(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            if (btsStatusDTO == null)
                throw new ArgumentNullException("BTSStatus model is null.");
            tblM_BTSStatus btsStatus = btsStatusFactory.CreateFromDbAndUpdateFromDTO(btsStatusDTO, dateStamp);  
        }

        public SaveResult<BTSStatusEntryModel> Save(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsStatusValidator.Validate(btsStatusDTO);
            bool success = false;
            BTSStatusEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(btsStatusDTO, dateStamp); 
                Db.SaveChanges();
                model = btsStatusEntryDataProvider.Get(btsStatusDTO.BTSStatus_PK);
            }

            return new SaveResult<BTSStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
