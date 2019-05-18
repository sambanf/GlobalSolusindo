using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.Role.ListForm
{
    public class RoleListModel
    {
        [JsonProperty("formData")]
        public RoleListFormData FormData { get; set; } = new RoleListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<RoleDTO> SearchResult { get; set; }
    }
}
