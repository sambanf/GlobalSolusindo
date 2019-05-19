using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWIssue.EntryForm
{
    public class SOWIssueEntryModel
    {
        [JsonProperty("formData")]
        public SOWIssueEntryFormData FormData { get; set; } = new SOWIssueEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWIssueDTO Model { get; set; }
    }
}
