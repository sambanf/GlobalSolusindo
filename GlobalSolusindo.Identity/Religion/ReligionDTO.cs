using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Religion.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Religion
{
    public class ReligionDTO : DTO
    {
        [JsonProperty("Religion_pk")]
        public int Religion_PK { get; set; } 

        [Required]
        [JsonProperty("Name")]
        [Unique(typeof(ReligionQuery), nameof(Religion_PK))]
        public string Name { get; set; } 
    }
}
