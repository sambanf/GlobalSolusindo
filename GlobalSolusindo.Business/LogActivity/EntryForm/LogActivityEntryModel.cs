using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.LogActivity.EntryForm
{
    
    public class LogActivityEntryModel
    {
        [JsonProperty("formData")]
        public LogActivityEntryFormData FormData { get; set; } = new LogActivityEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public LogActivityDTO Model { get; set; }
    }
}
