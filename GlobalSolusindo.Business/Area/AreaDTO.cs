using GlobalSolusindo.Base;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Area
{
    public class AreaDTO : DTO
    {
        [JsonProperty("area_pk")]
        public int Area_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(AreaQuery), nameof(Area_PK))]
        public string Title { get; set; } 
    }
}
