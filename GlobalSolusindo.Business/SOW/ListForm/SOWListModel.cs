using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOW.ListForm
{
    public class SOWListModel
    {
        [JsonProperty("formData")]
        public SOWListFormData FormData { get; set; } = new SOWListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWDTO> SearchResult { get; set; }
    }
}
