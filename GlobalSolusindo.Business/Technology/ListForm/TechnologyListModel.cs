using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Technology.ListForm
{
    public class TechnologyListModel
    {
        [JsonProperty("formData")]
        public TechnologyListFormData FormData { get; set; } = new TechnologyListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<TechnologyDTO> SearchResult { get; set; }
    }
}
