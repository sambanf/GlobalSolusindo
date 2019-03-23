using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.CostKategori.EntryForm
{
    public class CostKategoriEntryModel
    {
        [JsonProperty("formData")]
        public CostKategoriEntryFormData FormData { get; set; } = new CostKategoriEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public CostKategoriDTO Model { get; set; }
    }
}
