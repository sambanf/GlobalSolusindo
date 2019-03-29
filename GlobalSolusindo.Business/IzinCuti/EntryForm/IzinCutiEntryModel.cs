using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IzinCuti.EntryForm
{
    public class IzinCutiEntryModel
    {
        [JsonProperty("formData")]
        public IzinCutiEntryFormData FormData { get; set; } = new IzinCutiEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public IzinCutiDTO Model { get; set; }
    }
}
