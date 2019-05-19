using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Cost.EntryForm
{
    public class CostEntryModel
    {
        [JsonProperty("formData")]
        public CostEntryFormData FormData { get; set; } = new CostEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public CostDTO Model { get; set; }
    }
}
