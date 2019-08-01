using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Religion.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Religion
{
    public class ReligionDTO : DTO
    {
        [JsonProperty("religion_pk")]
        public int ReligionPK { get; set; } 

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(ReligionQuery), nameof(ReligionPK))]
        public string Name { get; set; } 
    }
}
