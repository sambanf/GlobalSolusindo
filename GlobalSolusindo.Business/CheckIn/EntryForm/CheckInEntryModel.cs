using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.CheckIn.EntryForm
{
    public class CheckInEntryModel
    {
        [JsonProperty("formData")]
        public CheckInEntryFormData FormData { get; set; } = new CheckInEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public CheckInDTO Model { get; set; }
    }
}
