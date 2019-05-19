using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Technology.EntryForm
{
    public class TechnologyEntryModel
    {
        [JsonProperty("formData")]
        public TechnologyEntryFormData FormData { get; set; } = new TechnologyEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public TechnologyDTO Model { get; set; }
    }
}
