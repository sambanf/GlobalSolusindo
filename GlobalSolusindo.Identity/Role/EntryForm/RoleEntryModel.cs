using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Role.EntryForm
{
    public class RoleEntryModel
    {
        [JsonProperty("formData")]
        public RoleEntryFormData FormData { get; set; } = new RoleEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public RoleDTO Model { get; set; }
    }
}
