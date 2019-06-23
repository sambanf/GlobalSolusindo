using GlobalSolusindo.Base;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanDTO : DTO
    {
        [JsonProperty("tipePekerjaan_pk")]
        public int TipePekerjaan_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(TipePekerjaanQuery), nameof(TipePekerjaan_PK))]
        public string Title { get; set; } 
    }
}
