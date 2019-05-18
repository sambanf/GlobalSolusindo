using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Operator.EntryForm
{
    public class OperatorEntryModel
    {
        [JsonProperty("formData")]
        public OperatorEntryFormData FormData { get; set; } = new OperatorEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public OperatorDTO Model { get; set; }
    }
}
