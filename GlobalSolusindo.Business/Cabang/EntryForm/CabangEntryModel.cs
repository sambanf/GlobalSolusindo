using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Cabang.EntryForm
{
    public class CabangEntryModel
    {
        [JsonProperty("formData")]
        public CabangEntryFormData FormData { get; set; } = new CabangEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public CabangDTO Model { get; set; }
    }
}
