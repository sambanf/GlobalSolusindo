using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.UserDetail.ListForm
{
    public class UserDetailListModel
    {
        [JsonProperty("formData")]
        public UserDetailListFormData FormData { get; set; } = new UserDetailListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<UserDetailDTO> SearchResult { get; set; }
    }
}
