using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.DailyTask
{
    public class DailyTaskDTO : DTO
    {
        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }

        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("sowAssign_pk")]
        public int? SOWAssign_PK { get; set; }

        [JsonProperty("assignTglMulai")]
        public DateTime? AssignTglMulai { get; set; }

        [JsonProperty("assignTglSelesai")]
        public DateTime? AssignTglSelesai { get; set; }

        [JsonProperty("izinCuti_pk")]
        public int? IzinCuti_PK { get; set; }

        [JsonProperty("cutiTglMulai")]
        public DateTime? CutiTglMulai { get; set; }

        [JsonProperty("cutiTglSelesai")]
        public DateTime? CutiTglSelesai { get; set; }

        [JsonProperty("checkIn_pk")]
        public int? CheckIn_PK { get; set; }

        [JsonProperty("waktuCheckIn")]
        public DateTime? WaktuCheckIn { get; set; }

        [JsonProperty("waktuCheckOut")]
        public DateTime? WaktuCheckOut { get; set; }

        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }

        [JsonProperty("roleTitle")]
        public string RoleTitle { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }
    }
}
