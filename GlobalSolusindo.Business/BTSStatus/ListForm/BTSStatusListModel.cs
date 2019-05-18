using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.BTSStatus.ListForm
{
    public class BTSStatusListModel
    {
        [JsonProperty("formData")]
        public BTSStatusListFormData FormData { get; set; } = new BTSStatusListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<BTSStatusDTO> SearchResult { get; set; }
    }
}
