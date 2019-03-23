using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWAssign.ListForm
{
    public class SOWAssignListModel
    {
        [JsonProperty("formData")]
        public SOWAssignListFormData FormData { get; set; } = new SOWAssignListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWAssignDTO> SearchResult { get; set; }
    }
}
