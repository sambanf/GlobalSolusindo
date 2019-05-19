using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWAssign.EntryForm
{
    public class SOWAssignEntryModel
    {
        [JsonProperty("formData")]
        public SOWAssignEntryFormData FormData { get; set; } = new SOWAssignEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWAssignDTO Model { get; set; }
    }
}
