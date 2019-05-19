using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IssueType.EntryForm
{
    public class IssueTypeEntryModel
    {
        [JsonProperty("formData")]
        public IssueTypeEntryFormData FormData { get; set; } = new IssueTypeEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public IssueTypeDTO Model { get; set; }
    }
}
