using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWResult.EntryForm
{
    public class SOWResultEntryModel
    {
        [JsonProperty("formData")]
        public SOWResultEntryFormData FormData { get; set; } = new SOWResultEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWResultDTO Model { get; set; }
    }
}
