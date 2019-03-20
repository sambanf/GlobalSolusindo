using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup
{
    public class MappingUserToRoleGroupDTO : DTO
    {
        [Required]
        [JsonProperty("roleGroup_pk")]
        public int? RoleGroup_PK { get; set; }

        [JsonProperty("roleGroupName")]
        public string RoleGroupName { get; set; }

        [Required]
        [JsonProperty("user_pk")]
        public int? User_PK { get; set; }

        [JsonProperty("userCode")]
        public string UserCode { get; set; }

        [JsonProperty("userUsername")]
        public string UserUsername { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("positionName")]
        public string positionName { get; set; }
    }
}
