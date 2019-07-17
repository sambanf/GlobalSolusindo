using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.AsetHistori
{
    public class UserHistoriDTO : DTO
    {
        [JsonProperty("asetHistori_pk")]
        public int AsetHistori_PK { get; set; }

        [Required]
        [JsonProperty("user_fk")]
        [ForeignKey(typeof(UserQuery), "User_PK")]
        public int User_FK { get; set; }

        [JsonProperty("userFullName")]
        public string UserFullName { get; set; }

        [JsonProperty("userPosition")]
        public string userPosition { get; set; }

        [JsonProperty("userPhone")]
        public string userPhone { get; set; }

        [JsonProperty("userAddress")]
        public string userAddress { get; set; }

        [JsonProperty("userEmail")]
        public string userEmail { get; set; }

        [JsonProperty("userDescription")]
        public string userDescription { get; set; }
        
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

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
