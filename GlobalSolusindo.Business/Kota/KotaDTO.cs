using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Kota.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Kota
{
    public class KotaDTO : DTO
    {
        [JsonProperty("kota_pk")]
        public int Kota_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(KotaQuery), nameof(Kota_PK))]
        public string Title { get; set; } 
    }
}
