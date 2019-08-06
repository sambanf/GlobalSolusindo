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

        #region Penambahan table dari mas indra 20190619 
        [JsonProperty("salary")]
        public double? Salary { get; set; }

        //[Required]
        [JsonProperty("religion")]
        public int? Religion { get; set; }

        [JsonProperty("religionName")]
        public string ReligionName { get; set; }

        [JsonProperty("categoryContract")]
        public int? CategoryContract { get; set; }

        [JsonProperty("categoryContractName")]
        public string CategoryContractName { get; set; }

        [JsonProperty("project")]
        public int? Project { get; set; }

        [JsonProperty("projectName")]
        public string ProjectName { get; set; }

        [JsonProperty("gender")]
        public int? Gender { get; set; }

        [JsonProperty("genderName")]
        public string GenderName { get; set; }

        [JsonProperty("maritalStatus")]
        public int? MaritalStatus { get; set; }

        [JsonProperty("maritalStatusName")]
        public string MaritalStatusName { get; set; }

        [JsonProperty("npwp")]
        public string NPWP { get; set; }

        [JsonProperty("bpjs")]
        public string BPJS { get; set; }

        [JsonProperty("joinDate")]
        public DateTime? JoinDate { get; set; }

        [JsonProperty("endDate")]
        public DateTime? EndDate { get; set; }

        [JsonProperty("bankName")]
        public string BankName { get; set; }

        [JsonProperty("accountNumber")]
        public string AccountNumber { get; set; }
        #endregion
    }
}
