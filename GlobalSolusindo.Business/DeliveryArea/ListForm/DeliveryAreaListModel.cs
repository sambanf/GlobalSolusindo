using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.DeliveryArea.ListForm
{
    public class DeliveryAreaListModel
    {
        [JsonProperty("formData")]
        public DeliveryAreaListFormData FormData { get; set; } = new DeliveryAreaListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<DeliveryAreaDTO> SearchResult { get; set; }
    }
}
