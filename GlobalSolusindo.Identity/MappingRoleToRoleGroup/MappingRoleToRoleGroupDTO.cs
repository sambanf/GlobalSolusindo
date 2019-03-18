using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.RoleGroup;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup
{
    public class RoleMapping : RoleGroupDTO
    {
        [JsonProperty("mappingRoleToRoleGroups")]
        public List<MappingRoleToRoleGroupDTO> MappingRoleToRoleGroups { get; set; } = new List<MappingRoleToRoleGroupDTO>();
    }

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
