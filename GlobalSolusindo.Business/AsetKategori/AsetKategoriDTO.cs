using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetKategori.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.AsetKategori
{
    public class AsetKategoriDTO : DTO
    {
        [JsonProperty("asetKategori_pk")]
        public int AsetKategori_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(AsetKategoriQuery), nameof(AsetKategori_PK))]
        public string Title { get; set; } 
    }
}
