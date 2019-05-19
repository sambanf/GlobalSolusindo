using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Kota.EntryForm
{
    public class KotaEntryModel
    {
        [JsonProperty("formData")]
        public KotaEntryFormData FormData { get; set; } = new KotaEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public KotaDTO Model { get; set; }
    }
}
