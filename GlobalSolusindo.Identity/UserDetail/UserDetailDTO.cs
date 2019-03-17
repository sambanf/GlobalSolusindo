using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.UserDetail
{
    public class UserDetailDTO : DTO
    {
        [JsonProperty("userDetail_pk")]
        public int UserDetail_PK { get; set; }

        [Required]
        [JsonProperty("userCode")]
        //[Unique(typeof(UserDetailQuery), nameof(UserDetail_PK))]
        public string UserCode { get; set; }

        [Required]
        [JsonProperty("name")]
        public string Name { get; set; }

        [Required]
        [JsonProperty("tglLahir")]
        public DateTime TglLahir { get; set; }

        [JsonProperty("filePhoto")]
        public string FilePhoto { get; set; }

        [Required]
        [JsonProperty("noKTP")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string NoKTP { get; set; }

        //[Phone]
        [Required]
        [JsonProperty("noHP")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string NoHP { get; set; }

        //[EmailAddress]
        [Required]
        [JsonProperty("email")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string Email { get; set; }

        [Required]
        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
