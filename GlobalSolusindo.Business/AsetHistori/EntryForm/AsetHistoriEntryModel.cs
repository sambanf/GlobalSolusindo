using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.AsetHistori.EntryForm
{
    public class AsetHistoriEntryModel
    {
        [JsonProperty("formData")]
        public AsetHistoriEntryFormData FormData { get; set; } = new AsetHistoriEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public AsetHistoriDTO Model { get; set; }
    }
}
