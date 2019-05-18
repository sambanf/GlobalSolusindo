using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.DeliveryArea.ListForm
{
    public class DeliveryAreaListDataProvider : FactoryBase
    {
        private DeliveryAreaSearch deliveryAreaSearch;

        public DeliveryAreaListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public DeliveryAreaListDataProvider(GlobalSolusindoDb db, tblM_User user, DeliveryAreaSearch deliveryAreaSearch) : base(db, user)
        {
            this.deliveryAreaSearch = deliveryAreaSearch;
        }

        public DeliveryAreaListModel Get(DeliveryAreaSearchFilter searchFilter)
        {
            DeliveryAreaListFormData formData = new DeliveryAreaListFormData();
            SearchResult<DeliveryAreaDTO> searchResult = deliveryAreaSearch.GetDataByFilter(searchFilter);
            return new DeliveryAreaListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
