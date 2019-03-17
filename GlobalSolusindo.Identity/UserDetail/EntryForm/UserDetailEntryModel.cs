using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.UserDetail.EntryForm
{
    public class UserDetailEntryModel
    {
        [JsonProperty("formData")]
        public UserDetailEntryFormData FormData { get; set; } = new UserDetailEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public UserDetailDTO Model { get; set; }
    }
}
