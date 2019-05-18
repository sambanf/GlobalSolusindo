using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.ListForm
{
    public class MappingRoleToRoleGroupListModel
    {
        [JsonProperty("formData")]
        public MappingRoleToRoleGroupListFormData FormData { get; set; } = new MappingRoleToRoleGroupListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<MappingRoleToRoleGroupDTO> SearchResult { get; set; }
    }
}
