using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.DeliveryArea.EntryForm
{
    public class DeliveryAreaEntryDataProvider : FactoryBase
    {
        private DeliveryAreaQuery deliveryAreaQuery;
        private AccessControl accessControl;

        public DeliveryAreaEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, DeliveryAreaQuery deliveryAreaQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.deliveryAreaQuery = deliveryAreaQuery;
        }

        private List<Control> CreateFormControls(int deliveryAreaPK)
        {
            DeliveryAreaEntryControlBuilder controlBuilder = new DeliveryAreaEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (deliveryAreaPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private DeliveryAreaEntryModel GetCreateStateModel()
        {
            DeliveryAreaEntryFormData formData = new DeliveryAreaEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            DeliveryAreaDTO deliveryAreaDTO = new DeliveryAreaDTO();
            return new DeliveryAreaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new DeliveryAreaDTO(),
            };
        }

        private DeliveryAreaEntryModel GetUpdateStateModel(int deliveryAreaPK)
        {
            DeliveryAreaEntryFormData formData = new DeliveryAreaEntryFormData();
            List<Control> formControls = CreateFormControls(deliveryAreaPK);
            DeliveryAreaDTO deliveryAreaDTO = deliveryAreaQuery.GetByPrimaryKey(deliveryAreaPK);

            if (deliveryAreaDTO == null)
                throw new KairosException($"Record with primary key '{deliveryAreaDTO.DeliveryArea_PK}' is not found.");

            return new DeliveryAreaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = deliveryAreaDTO,
            };
        }

        public DeliveryAreaEntryModel Get(int deliveryAreaPK)
        {
            if (deliveryAreaPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(deliveryAreaPK);
        }
    }
}
