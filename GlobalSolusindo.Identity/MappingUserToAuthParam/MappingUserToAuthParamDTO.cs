using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam
{
    public class MappingUserToAuthParamDTO : DTO
    {
        [Required]
        [JsonProperty("authParam_pk")]
        public int? AuthParam_PK { get; set; }

        [JsonProperty("authParamName")]
        public string AuthParamName { get; set; }

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
