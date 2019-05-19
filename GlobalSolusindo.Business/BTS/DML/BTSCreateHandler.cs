using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSTechnology;
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

        public tblM_BTS AddBTS(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTS bts = btsFactory.CreateFromDTO(btsDTO, dateStamp);
            bts = Db.tblM_BTS.Add(bts);
            btsDTO.BTS_PK = bts.BTS_PK;
            return bts;
        }

        public void AddBTSTechnologies(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            foreach (var btsTechnologyDTO in btsDTO.BTSTechnologies)
            {
                var factory = new BTSTechnologyFactory(Db, User);

                tblM_BTSTechnology btsTechnology = factory.CreateFromDTO(btsTechnologyDTO, dateStamp);
                btsTechnology.BTS_FK = btsDTO.BTS_PK;
                btsTechnology = Db.tblM_BTSTechnology.Add(btsTechnology);
            }
        }

        public SaveResult<BTSEntryModel> Save(BTSDTO btsDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = btsValidator.Validate(btsDTO);
            bool success = false;
            BTSEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_BTS bts = AddBTS(btsDTO, dateStamp);
                Db.SaveChanges();
                btsDTO.BTS_PK = bts.BTS_PK;
                AddBTSTechnologies(btsDTO, dateStamp);
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
