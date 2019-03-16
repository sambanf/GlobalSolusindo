using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.RoleGroup.EntryForm
{
    public class RoleGroupEntryModel
    {
        [JsonProperty("formData")]
        public RoleGroupEntryFormData FormData { get; set; } = new RoleGroupEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public RoleGroupDTO Model { get; set; }
    }
}
