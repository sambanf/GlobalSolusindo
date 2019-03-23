using GlobalSolusindo.Identity.KategoriJabatan;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryFormData
    {
        [JsonProperty("kategoriJabatans")]
        public List<KategoriJabatanDTO> KategoriJabatans { get; set; } = new List<KategoriJabatanDTO>();
    }
}
