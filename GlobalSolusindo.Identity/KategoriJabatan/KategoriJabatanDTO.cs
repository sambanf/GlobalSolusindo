using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.KategoriJabatan
{
    public class KategoriJabatanDTO : DTO
    {
        [JsonProperty("kategoriJabatan_pk")]
        public int KategoriJabatan_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(KategoriJabatanQuery), nameof(KategoriJabatan_PK))]
        public string Title { get; set; } 
    }
}
