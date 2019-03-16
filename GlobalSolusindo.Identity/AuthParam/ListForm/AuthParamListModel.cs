using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.AuthParam.ListForm
{
    public class AuthParamListModel
    {
        [JsonProperty("formData")]
        public AuthParamListFormData FormData { get; set; } = new AuthParamListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AuthParamDTO> SearchResult { get; set; }
    }
}
