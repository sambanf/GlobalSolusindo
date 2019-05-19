using GlobalSolusindo.Business.CostKategori;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Cost.EntryForm
{
    public class CostEntryFormData
    {
        [JsonProperty("costKategoris")]
        public List<CostKategoriDTO> CostKategoris { get; set; } = new List<CostKategoriDTO>();
    }
}
