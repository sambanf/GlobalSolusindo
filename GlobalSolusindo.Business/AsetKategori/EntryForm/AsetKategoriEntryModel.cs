using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.AsetKategori.EntryForm
{
    public class AsetKategoriEntryModel
    {
        [JsonProperty("formData")]
        public AsetKategoriEntryFormData FormData { get; set; } = new AsetKategoriEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public AsetKategoriDTO Model { get; set; }
    }
}
