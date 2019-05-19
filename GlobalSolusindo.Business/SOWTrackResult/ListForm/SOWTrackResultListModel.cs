using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWTrackResult.ListForm
{
    public class SOWTrackResultListModel
    {
        [JsonProperty("formData")]
        public SOWTrackResultListFormData FormData { get; set; } = new SOWTrackResultListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWTrackResultDTO> SearchResult { get; set; }
    }
}
