using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.EntryForm;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.DeliveryArea.DML
{
    public class DeliveryAreaCreateHandler : CreateOperation
    {
        private DeliveryAreaValidator deliveryAreaValidator;
        private DeliveryAreaFactory deliveryAreaFactory;
        private DeliveryAreaQuery deliveryAreaQuery;
        private DeliveryAreaEntryDataProvider deliveryAreaEntryDataProvider;

        public DeliveryAreaCreateHandler(GlobalSolusindoDb db, tblM_User user, DeliveryAreaValidator deliveryAreaValidator, DeliveryAreaFactory deliveryAreaFactory, DeliveryAreaQuery deliveryAreaQuery, AccessControl accessControl) : base(db, user)
        {
            this.deliveryAreaValidator = deliveryAreaValidator;
            this.deliveryAreaFactory = deliveryAreaFactory;
            this.deliveryAreaQuery = deliveryAreaQuery;
            this.deliveryAreaEntryDataProvider = new DeliveryAreaEntryDataProvider(db, user, accessControl, deliveryAreaQuery);
        }

        public tblM_DeliveryArea Insert(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            if (deliveryAreaDTO == null)
                throw new ArgumentNullException("DeliveryArea model is null.");
            tblM_DeliveryArea deliveryArea = deliveryAreaFactory.CreateFromDTO(deliveryAreaDTO, dateStamp);
            return Db.tblM_DeliveryArea.Add(deliveryArea);
        }

        public SaveResult<DeliveryAreaEntryModel> Save(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = deliveryAreaValidator.Validate(deliveryAreaDTO);
            bool success = false;
            DeliveryAreaEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_DeliveryArea deliveryArea = Insert(deliveryAreaDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = deliveryAreaEntryDataProvider.Get(deliveryArea.DeliveryArea_PK);
            }

            return new SaveResult<DeliveryAreaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
