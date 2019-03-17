using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryModel
    {
        [JsonProperty("formData")]
        public UserEntryFormData FormData { get; set; } = new UserEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public UserDTO Model { get; set; }
    }
}
