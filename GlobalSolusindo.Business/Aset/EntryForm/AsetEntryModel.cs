using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Aset.EntryForm
{
    public class AsetEntryModel
    {
        [JsonProperty("formData")]
        public AsetEntryFormData FormData { get; set; } = new AsetEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public AsetDTO Model { get; set; }
    }
}
