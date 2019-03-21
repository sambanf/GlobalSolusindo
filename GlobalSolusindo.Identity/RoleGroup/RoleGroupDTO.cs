using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.RoleGroup
{
    public class RoleGroupDTO : DTO
    {
        [JsonProperty("roleGroup_pk")]
        public int RoleGroup_PK { get; set; }

        [Required]
        [JsonProperty("description")]
        public string Description { get; set; }

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(RoleGroupQuery), nameof(RoleGroup_PK))]
        public string Title { get; set; } 
    }
}
