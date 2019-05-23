using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.IzinCuti
{
    public class IzinCutiDTO : DTO
    {
        [JsonProperty("izinCuti_pk")]
        public int IzinCuti_PK { get; set; }

        [Required]
        [JsonProperty("user_fk")]
        [ForeignKey(typeof(UserQuery), "User_PK", true)]
        public int User_FK { get; set; }

        [JsonProperty("userIzinCutiName")]
        public string UserIzinCutiName { get; set; }

        [JsonProperty("userIzinCutiJabatan")]
        public string UserIzinCutiJabatanTitle { get; set; }

        [Required(ErrorMessage = "Start date is required.")]
        [JsonProperty("tglMulai")]
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? TglMulai { get; set; }

        [Required(ErrorMessage = "End date is required.")]
        [JsonProperty("tglSelesai")]
        [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? TglSelesai { get; set; }

        [Required]
        [JsonProperty("alasan")]
        public string Alasan { get; set; }

        [JsonProperty("approvalUserDetail_fk")]
        [ForeignKey(typeof(UserDetailQuery), "UserDetail_PK", true)]
        public int? ApprovalUserDetail_FK { get; set; }

        [JsonProperty("approvalByUserName")]
        public string ApprovedByUserName { get; set; }

        [JsonProperty("izinCutiStatus_fk")]
        [ForeignKey(typeof(IzinCutiStatusQuery), "IzinCutiStatus_PK", true)]
        public int? IzinCutiStatus_FK { get; set; }

        [JsonProperty("izinCutiStatusTitle")]
        public string IzinCutiStatusTitle { get; set; }

        [JsonProperty("photo")]
        public string FilePhotoInBase64 { get; set; }
    }
}
