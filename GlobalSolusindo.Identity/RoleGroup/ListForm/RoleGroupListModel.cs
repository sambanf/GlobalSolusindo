using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.RoleGroup.ListForm
{
    public class RoleGroupListModel
    {
        [JsonProperty("formData")]
        public RoleGroupListFormData FormData { get; set; } = new RoleGroupListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<RoleGroupDTO> SearchResult { get; set; }
    }
}
