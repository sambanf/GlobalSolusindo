using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.BTSTechnology.ListForm
{
    public class BTSTechnologyListModel
    {
        [JsonProperty("formData")]
        public BTSTechnologyListFormData FormData { get; set; } = new BTSTechnologyListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<BTSTechnologyDTO> SearchResult { get; set; }
    }
}
