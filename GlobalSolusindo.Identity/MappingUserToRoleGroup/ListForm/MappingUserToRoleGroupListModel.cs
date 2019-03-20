using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.ListForm
{
    public class MappingUserToRoleGroupListModel
    {
        [JsonProperty("formData")]
        public MappingUserToRoleGroupListFormData FormData { get; set; } = new MappingUserToRoleGroupListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<MappingUserToRoleGroupDTO> SearchResult { get; set; }
    }
}
