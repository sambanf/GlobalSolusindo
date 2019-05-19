using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.CostKategori
{
    public class CostKategoriDTO : DTO
    {
        [JsonProperty("costKategori_pk")]
        public int CostKategori_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(CostKategoriQuery), nameof(CostKategori_PK))]
        public string Title { get; set; } 
    }
}
