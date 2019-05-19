using GlobalSolusindo.Business.AsetKategori;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Aset.EntryForm
{
    public class AsetEntryFormData
    {
        [JsonProperty("asetKategoris")]
        public List<AsetKategoriDTO> AsetKategoris { get; set; } = new List<AsetKategoriDTO>();
    }
}
