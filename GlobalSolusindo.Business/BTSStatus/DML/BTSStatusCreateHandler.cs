using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSStatus.EntryForm;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSStatus.DML
{
    public class BTSStatusCreateHandler : CreateOperation
    {
        private BTSStatusValidator btsStatusValidator;
        private BTSStatusFactory btsStatusFactory;
        private BTSStatusQuery btsStatusQuery;
        private BTSStatusEntryDataProvider btsStatusEntryDataProvider;

        public BTSStatusCreateHandler(GlobalSolusindoDb db, tblM_User user, BTSStatusValidator btsStatusValidator, BTSStatusFactory btsStatusFactory, BTSStatusQuery btsStatusQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsStatusValidator = btsStatusValidator;
            this.btsStatusFactory = btsStatusFactory;
            this.btsStatusQuery = btsStatusQuery;
            this.btsStatusEntryDataProvider = new BTSStatusEntryDataProvider(db, user, accessControl, btsStatusQuery);
        }

        public tblM_BTSStatus Insert(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            if (btsStatusDTO == null)
                throw new ArgumentNullException("BTSStatus model is null.");
            tblM_BTSStatus btsStatus = btsStatusFactory.CreateFromDTO(btsStatusDTO, dateStamp);
            return Db.tblM_BTSStatus.Add(btsStatus);
        }

        public SaveResult<BTSStatusEntryModel> Save(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsStatusValidator.Validate(btsStatusDTO);
            bool success = false;
            BTSStatusEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_BTSStatus btsStatus = Insert(btsStatusDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = btsStatusEntryDataProvider.Get(btsStatus.BTSStatus_PK);
            }

            return new SaveResult<BTSStatusEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
