using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSTechnology;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.BTS.DML
{
    public class BTSUpdateHandler : UpdateOperation
    {
        private BTSValidator btsValidator;
        private BTSFactory btsFactory;
        private BTSQuery btsQuery;
        private BTSEntryDataProvider btsEntryDataProvider;

        public BTSUpdateHandler(GlobalSolusindoDb db, tblM_User user, BTSValidator btsValidator, BTSFactory btsFactory, BTSQuery btsQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsValidator = btsValidator;
            this.btsFactory = btsFactory;
            this.btsQuery = btsQuery;
            this.btsEntryDataProvider = new BTSEntryDataProvider(db, user, accessControl, btsQuery);
        }

        private void Initialize(BTSValidator btsValidator, BTSFactory btsFactory)
        {
            this.btsValidator = btsValidator;
            this.btsFactory = btsFactory;
        }

        public void UpdateBTS(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTS bts = btsFactory.CreateFromDbAndUpdateFromDTO(btsDTO, dateStamp);
        }

        public void UpdateBTSTechnologies(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");

            var btsTechnologies = Db.tblM_BTSTechnology.Where(x => x.BTS_FK == btsDTO.BTS_PK);
            foreach (var btsTechnology in btsTechnologies)
            {
                Db.tblM_BTSTechnology.Remove(btsTechnology);
            }

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
            foreach (var item in btsDTO.BTSTechnologies)
            {
                item.BTS_FK = btsDTO.BTS_PK;
            }

            ModelValidationResult validationResult = btsValidator.Validate(btsDTO);
           
            bool success = false;
            BTSEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateBTS(btsDTO, dateStamp);
                UpdateBTSTechnologies(btsDTO, dateStamp);
                Db.SaveChanges();
                model = btsEntryDataProvider.Get(btsDTO.BTS_PK);
            }

            return new SaveResult<BTSEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
