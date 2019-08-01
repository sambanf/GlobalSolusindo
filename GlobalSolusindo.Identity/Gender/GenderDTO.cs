using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Gender.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Gender
{
    public class GenderDTO : DTO
    {
        [JsonProperty("gender_pk")]
        public int Gender_PK { get; set; } 

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(GenderQuery), nameof(Gender_PK))]
        public string Name { get; set; } 
    }
}
