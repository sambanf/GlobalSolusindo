using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.Position.ListForm
{
    public class PositionListModel
    {
        [JsonProperty("formData")]
        public PositionListFormData FormData { get; set; } = new PositionListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<PositionDTO> SearchResult { get; set; }
    }
}
