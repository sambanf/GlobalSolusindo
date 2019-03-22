using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Operator.ListForm
{
    public class OperatorListModel
    {
        [JsonProperty("formData")]
        public OperatorListFormData FormData { get; set; } = new OperatorListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<OperatorDTO> SearchResult { get; set; }
    }
}
