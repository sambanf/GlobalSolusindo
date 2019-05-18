using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.BTSTechnology.EntryForm
{
    public class BTSTechnologyEntryModel
    {
        [JsonProperty("formData")]
        public BTSTechnologyEntryFormData FormData { get; set; } = new BTSTechnologyEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public BTSTechnologyDTO Model { get; set; }
    }
}
