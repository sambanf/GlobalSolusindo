using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.IssueType.ListForm
{
    public class IssueTypeListModel
    {
        [JsonProperty("formData")]
        public IssueTypeListFormData FormData { get; set; } = new IssueTypeListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<IssueTypeDTO> SearchResult { get; set; }
    }
}
