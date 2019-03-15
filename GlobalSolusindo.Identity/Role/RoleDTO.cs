using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Role
{
    public class RoleDTO : DTO
    {
        [JsonProperty("role_pk")]
        public int Role_PK { get; set; }

        [Required]
        [JsonProperty("description")]
        public string Description { get; set; }

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(RoleQuery), nameof(Role_PK))]
        public string Title { get; set; }
    }
}
