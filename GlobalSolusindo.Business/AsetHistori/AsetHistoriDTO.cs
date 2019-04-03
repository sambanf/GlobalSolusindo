using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.AsetHistori
{
    public class AsetHistoriDTO : DTO
    {
        [JsonProperty("asetHistori_pk")]
        public int AsetHistori_PK { get; set; }

        [Required]
        [JsonProperty("userDetail_fk")]
        [ForeignKey(typeof(UserDetailQuery), "UserDetail_PK")]
        public int UserDetail_FK { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [Required]
        [JsonProperty("aset_fk")]
        [ForeignKey(typeof(AsetQuery), "Aset_PK")]
        public int Aset_FK { get; set; }

        [JsonProperty("asetKategoriTitle")]
        public string AsetKategoriTitle { get; set; }

        [JsonProperty("asetID")]
        public string AsetID { get; set; }

        [JsonProperty("asetName")]
        public string AsetName { get; set; }

        [JsonProperty("tglMulai")]
        public DateTime? TglMulai { get; set; }

        [JsonProperty("tglSelesai")]
        public DateTime? TglSelesai { get; set; }
    }
}
