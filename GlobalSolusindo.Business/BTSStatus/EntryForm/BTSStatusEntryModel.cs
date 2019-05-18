using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.BTSStatus.EntryForm
{
    public class BTSStatusEntryModel
    {
        [JsonProperty("formData")]
        public BTSStatusEntryFormData FormData { get; set; } = new BTSStatusEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public BTSStatusDTO Model { get; set; }
    }
}
