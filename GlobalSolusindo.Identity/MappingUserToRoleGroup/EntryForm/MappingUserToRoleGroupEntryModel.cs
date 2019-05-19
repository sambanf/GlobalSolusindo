using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm
{
    public class MappingUserToRoleGroupEntryModel
    {
        [JsonProperty("formData")]
        public MappingUserToRoleGroupEntryFormData FormData { get; set; } = new MappingUserToRoleGroupEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public MappingUserToRoleGroupDTO Model { get; set; }
    }
}
