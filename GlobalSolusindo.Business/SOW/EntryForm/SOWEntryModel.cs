using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOW.EntryForm
{
    public class SOWEntryModel
    {
        [JsonProperty("formData")]
        public SOWEntryFormData FormData { get; set; } = new SOWEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWDTO Model { get; set; }
    }
}
