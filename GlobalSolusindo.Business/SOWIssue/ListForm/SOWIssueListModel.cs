using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOWIssue.ListForm
{
    public class SOWIssueListModel
    {
        [JsonProperty("formData")]
        public SOWIssueListFormData FormData { get; set; } = new SOWIssueListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWIssueDTO> SearchResult { get; set; }
    }
}
