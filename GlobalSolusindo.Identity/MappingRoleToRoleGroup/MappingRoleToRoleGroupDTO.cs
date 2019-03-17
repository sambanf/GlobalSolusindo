using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup
{
    public class MappingRoleToRoleGroupDTO : DTO
    {
        [Required]
        [JsonProperty("roleGroup_pk")]
        public int? RoleGroup_PK { get; set; }

        [JsonProperty("roleGroupName")]
        public string RoleGroupName { get; set; }

        [Required]
        [JsonProperty("role_pk")]
        public int? Role_PK { get; set; }

        [JsonProperty("roleName")]
        public string RoleName { get; set; }

        [JsonProperty("roleDescription")]
        public string RoleDescription { get; set; }

        [JsonProperty("isChecked")]
        public bool IsChecked { get; set; }
    }
}
