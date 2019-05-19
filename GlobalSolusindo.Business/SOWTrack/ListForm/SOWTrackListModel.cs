using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWTrack.ListForm
{
    public class SOWTrackListModel
    {
        [JsonProperty("formData")]
        public SOWTrackListFormData FormData { get; set; } = new SOWTrackListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWTrackDTO> SearchResult { get; set; }
    }
}
