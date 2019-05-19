using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWTrack.EntryForm
{
    public class SOWTrackEntryModel
    {
        [JsonProperty("formData")]
        public SOWTrackEntryFormData FormData { get; set; } = new SOWTrackEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWTrackDTO Model { get; set; }
    }
}
