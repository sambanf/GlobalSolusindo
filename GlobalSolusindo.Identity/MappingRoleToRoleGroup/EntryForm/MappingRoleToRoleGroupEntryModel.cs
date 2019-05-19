using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm
{
    public class MappingRoleToRoleGroupEntryModel
    {
        [JsonProperty("formData")]
        public MappingRoleToRoleGroupEntryFormData FormData { get; set; } = new MappingRoleToRoleGroupEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public RoleMapping Model { get; set; }
    }
}
