using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.AuthParam.EntryForm
{
    public class AuthParamEntryModel
    {
        [JsonProperty("formData")]
        public AuthParamEntryFormData FormData { get; set; } = new AuthParamEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public AuthParamDTO Model { get; set; }
    }
}
