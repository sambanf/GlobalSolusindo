using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWStatus.EntryForm
{
    public class SOWStatusEntryModel
    {
        [JsonProperty("formData")]
        public SOWStatusEntryFormData FormData { get; set; } = new SOWStatusEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWStatusDTO Model { get; set; }
    }
}
