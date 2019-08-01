using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MaritalStatus
{
    public class MaritalStatusDTO : DTO
    {
        [JsonProperty("maritalStatus_pk")]
        public int MaritalPK { get; set; } 

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(MaritalStatusQuery), nameof(MaritalPK))]
        public string Name { get; set; } 
    }
}
