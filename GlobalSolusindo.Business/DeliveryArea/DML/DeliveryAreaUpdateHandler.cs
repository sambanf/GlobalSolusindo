using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.EntryForm;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.DeliveryArea.DML
{
    public class DeliveryAreaUpdateHandler : UpdateOperation
    {
        private DeliveryAreaValidator deliveryAreaValidator;
        private DeliveryAreaFactory deliveryAreaFactory;
        private DeliveryAreaQuery deliveryAreaQuery;
        private DeliveryAreaEntryDataProvider deliveryAreaEntryDataProvider;

        public DeliveryAreaUpdateHandler(GlobalSolusindoDb db, tblM_User user, DeliveryAreaValidator deliveryAreaValidator, DeliveryAreaFactory deliveryAreaFactory, DeliveryAreaQuery deliveryAreaQuery, AccessControl accessControl) : base(db, user)
        {
            this.deliveryAreaValidator = deliveryAreaValidator;
            this.deliveryAreaFactory = deliveryAreaFactory;
            this.deliveryAreaQuery = deliveryAreaQuery;
            this.deliveryAreaEntryDataProvider = new DeliveryAreaEntryDataProvider(db, user, accessControl, deliveryAreaQuery);
        }

        private void Initialize(DeliveryAreaValidator deliveryAreaValidator, DeliveryAreaFactory deliveryAreaFactory)
        {
            this.deliveryAreaValidator = deliveryAreaValidator;
            this.deliveryAreaFactory = deliveryAreaFactory;
        }

        public void Update(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            if (deliveryAreaDTO == null)
                throw new ArgumentNullException("DeliveryArea model is null.");
            tblM_DeliveryArea deliveryArea = deliveryAreaFactory.CreateFromDbAndUpdateFromDTO(deliveryAreaDTO, dateStamp);  
        }

        public SaveResult<DeliveryAreaEntryModel> Save(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = deliveryAreaValidator.Validate(deliveryAreaDTO);
            bool success = false;
            DeliveryAreaEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(deliveryAreaDTO, dateStamp); 
                Db.SaveChanges();
                model = deliveryAreaEntryDataProvider.Get(deliveryAreaDTO.DeliveryArea_PK);
            }

            return new SaveResult<DeliveryAreaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
