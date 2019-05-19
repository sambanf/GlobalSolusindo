using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWTrackResult.EntryForm
{
    public class SOWTrackResultEntryModel
    {
        [JsonProperty("formData")]
        public SOWTrackResultEntryFormData FormData { get; set; } = new SOWTrackResultEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWTrackResultDTO Model { get; set; }
    }
}
