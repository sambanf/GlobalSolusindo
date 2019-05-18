using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.AuthParam
{
    public class AuthParamDTO : DTO
    {
        [JsonProperty("authParam_pk")]
        public int AuthParam_PK { get; set; }

        [Required]
        [JsonProperty("description")]
        public string Description { get; set; }

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(AuthParamQuery), nameof(AuthParam_PK))]
        public string Title { get; set; }
    }
}
