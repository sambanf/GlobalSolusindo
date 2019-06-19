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

        //[Required]
        [JsonProperty("userCode")]
        //[Unique(typeof(UserDetailQuery), nameof(UserDetail_PK))]
        public string UserCode { get; set; }

        [Required]
        [JsonProperty("name")]
        public string Name { get; set; }

        //[Required]
        [JsonProperty("tglLahir")]
        public DateTime? TglLahir { get; set; }

        [JsonProperty("filePhotoInBase64")]
        public string FilePhotoInBase64 { get; set; }

        //[Required(ErrorMessage = "KTP Number is required.")]
        [JsonProperty("noKTP")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string NoKTP { get; set; }

        //[Required(ErrorMessage = "Phone number is required.")]
        [PhoneNumber(true)]
        [JsonProperty("noHP")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string NoHP { get; set; }

        //[Required]
        [Email(true)]
        [JsonProperty("email")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string Email { get; set; }

        //[Required]
        [Email(true)]
        [JsonProperty("personalEmail")]
        [Unique(typeof(UserDetailQuery), nameof(UserDetail_PK), true)]
        public string PersonalEmail { get; set; }

        //[Required]
        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        //Penambahan => mas indra : 20190619
        [JsonProperty("salary")]
        public double? Salary { get; set; }
    }
}
