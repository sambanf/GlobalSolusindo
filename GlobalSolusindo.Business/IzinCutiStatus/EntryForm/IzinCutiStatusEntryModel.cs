using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IzinCutiStatus.EntryForm
{
    public class IzinCutiStatusEntryModel
    {
        [JsonProperty("formData")]
        public IzinCutiStatusEntryFormData FormData { get; set; } = new IzinCutiStatusEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public IzinCutiStatusDTO Model { get; set; }
    }
}
