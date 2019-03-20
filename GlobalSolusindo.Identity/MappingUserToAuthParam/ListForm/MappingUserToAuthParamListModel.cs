using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.ListForm
{
    public class MappingUserToAuthParamListModel
    {
        [JsonProperty("formData")]
        public MappingUserToAuthParamListFormData FormData { get; set; } = new MappingUserToAuthParamListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<MappingUserToAuthParamDTO> SearchResult { get; set; }
    }
}
