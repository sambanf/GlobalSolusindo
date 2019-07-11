using GlobalSolusindo.Business.Aset;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.AsetHistori.EntryForm
{
    public class AsetHistoriEntryFormData
    {

        [JsonProperty("asets")]
        public List<AsetDTO> Asets { get; set; } = new List<AsetDTO>();
    }
}
