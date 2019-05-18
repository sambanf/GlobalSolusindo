using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Area.EntryForm
{
    public class AreaEntryModel
    {
        [JsonProperty("formData")]
        public AreaEntryFormData FormData { get; set; } = new AreaEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public AreaDTO Model { get; set; }
    }
}
