using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWAssign
{
    public class SOWAssignDTO : DTO
    {
        [JsonProperty("sowAssign_pk")]
        public int SOWAssign_PK { get; set; }

        [Required]
        [JsonProperty("sow_fk")]
        [ForeignKey(typeof(SOWQuery), "SOW_PK")]
        public int SOW_FK { get; set; }

        [JsonProperty("sowName")]
        public string SOWName { get; set; }

        //[Required]
        [JsonProperty("user_fk")]
        [ForeignKey(typeof(UserQuery), "User_PK", true)]
        public int User_FK { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("kategoriJabatan_fk")]
        [ForeignKey(typeof(KategoriJabatanQuery), "KategoriJabatan_PK")]
        public int KategoriJabatan_FK { get; set; }

        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }

        [JsonProperty("tglMulai")]
        // [JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? TglMulai { get; set; }

        [JsonProperty("tglSelesai")]
        //[JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? TglSelesai { get; set; }

        [JsonProperty("btsName")]
        public string BTSName { get; set; }
    }
}
