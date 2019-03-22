using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.BTS.EntryForm
{
    public class BTSEntryModel
    {
        [JsonProperty("formData")]
        public BTSEntryFormData FormData { get; set; } = new BTSEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public BTSDTO Model { get; set; }
    }
}
