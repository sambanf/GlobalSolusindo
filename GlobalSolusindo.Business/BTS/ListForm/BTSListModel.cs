using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.BTS.ListForm
{
    public class BTSListModel
    {
        [JsonProperty("formData")]
        public BTSListFormData FormData { get; set; } = new BTSListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<BTSDTO> SearchResult { get; set; }
    }
}
