using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Cost.ListForm
{
    public class CostListModel
    {
        [JsonProperty("formData")]
        public CostListFormData FormData { get; set; } = new CostListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<CostDTO> SearchResult { get; set; }
    }
}
