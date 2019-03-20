using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.EntryForm
{
    public class MappingUserToAuthParamEntryModel
    {
        [JsonProperty("formData")]
        public MappingUserToAuthParamEntryFormData FormData { get; set; } = new MappingUserToAuthParamEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public MappingUserToAuthParamDTO Model { get; set; }
    }
}
