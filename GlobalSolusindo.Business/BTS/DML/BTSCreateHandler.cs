using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTS.DML
{
    public class BTSCreateHandler : CreateOperation
    {
        private BTSValidator btsValidator;
        private BTSFactory btsFactory;
        private BTSQuery btsQuery;
        private BTSEntryDataProvider btsEntryDataProvider;

        public BTSCreateHandler(GlobalSolusindoDb db, tblM_User user, BTSValidator btsValidator, BTSFactory btsFactory, BTSQuery btsQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsValidator = btsValidator;
            this.btsFactory = btsFactory;
            this.btsQuery = btsQuery;
            this.btsEntryDataProvider = new BTSEntryDataProvider(db, user, accessControl, btsQuery);
        }

        public tblM_BTS Insert(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTS bts = btsFactory.CreateFromDTO(btsDTO, dateStamp);
            return Db.tblM_BTS.Add(bts);
        }

        public SaveResult<BTSEntryModel> Save(BTSDTO btsDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsValidator.Validate(btsDTO);
            bool success = false;
            BTSEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_BTS bts = Insert(btsDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = btsEntryDataProvider.Get(bts.BTS_PK);
            }

            return new SaveResult<BTSEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
