using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cabang.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Cabang
{
    public class CabangDTO : DTO
    {
        [JsonProperty("cabang_pk")]
        public int Cabang_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(CabangQuery), nameof(Cabang_PK))]
        public string Title { get; set; } 
    }
}
