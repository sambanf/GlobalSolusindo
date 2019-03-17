using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.User.ListForm
{
    public class UserListModel
    {
        [JsonProperty("formData")]
        public UserListFormData FormData { get; set; } = new UserListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<UserDTO> SearchResult { get; set; }
    }
}
