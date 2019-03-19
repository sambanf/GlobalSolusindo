using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Position.EntryForm
{
    public class PositionEntryModel
    {
        [JsonProperty("formData")]
        public PositionEntryFormData FormData { get; set; } = new PositionEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public PositionDTO Model { get; set; }
    }
}
