using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.IzinCutiStatus
{
    public class IzinCutiStatusDTO : DTO
    {
        [JsonProperty("izinCutiStatus_pk")]
        public int IzinCutiStatus_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(IzinCutiStatusQuery), nameof(IzinCutiStatus_PK))]
        public string Title { get; set; } 
    }
}
