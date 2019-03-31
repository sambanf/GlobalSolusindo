using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.CheckIn.ListForm
{
    public class CheckInListModel
    {
        [JsonProperty("formData")]
        public CheckInListFormData FormData { get; set; } = new CheckInListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<CheckInDTO> SearchResult { get; set; }
    }
}
