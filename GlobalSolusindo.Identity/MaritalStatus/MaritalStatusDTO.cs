using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MaritalStatus
{
    public class MaritalStatusDTO : DTO
    {
        [JsonProperty("MaritalStatus_pk")]
        public int MaritalStatus_PK { get; set; } 

        [Required]
        [JsonProperty("Name")]
        [Unique(typeof(MaritalStatusQuery), nameof(MaritalStatus_PK))]
        public string Name { get; set; } 
    }
}
