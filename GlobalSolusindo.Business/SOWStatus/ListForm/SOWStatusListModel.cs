using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWStatus.ListForm
{
    public class SOWStatusListModel
    {
        [JsonProperty("formData")]
        public SOWStatusListFormData FormData { get; set; } = new SOWStatusListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWStatusDTO> SearchResult { get; set; }
    }
}
