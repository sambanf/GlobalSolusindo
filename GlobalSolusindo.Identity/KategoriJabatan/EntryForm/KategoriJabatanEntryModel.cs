using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.KategoriJabatan.EntryForm
{
    public class KategoriJabatanEntryModel
    {
        [JsonProperty("formData")]
        public KategoriJabatanEntryFormData FormData { get; set; } = new KategoriJabatanEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public KategoriJabatanDTO Model { get; set; }
    }
}
