using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Project.EntryForm
{
    public class ProjectEntryModel
    {
        [JsonProperty("formData")]
        public ProjectEntryFormData FormData { get; set; } = new ProjectEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public ProjectDTO Model { get; set; }
    }
}
