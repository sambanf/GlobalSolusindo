using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWResult.ListForm
{
    public class SOWResultListModel
    {
        [JsonProperty("formData")]
        public SOWResultListFormData FormData { get; set; } = new SOWResultListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWResultDTO> SearchResult { get; set; }
    }
}
