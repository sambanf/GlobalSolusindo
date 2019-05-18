using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Area.ListForm
{
    public class AreaListModel
    {
        [JsonProperty("formData")]
        public AreaListFormData FormData { get; set; } = new AreaListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AreaDTO> SearchResult { get; set; }
    }
}
