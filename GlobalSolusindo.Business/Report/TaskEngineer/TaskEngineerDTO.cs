using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.TaskEngineer
{
    public class TaskEngineerDTO : DTO
    {
        [JsonProperty("sowAssign_fk")]
        public int SOWAssign_FK { get; set; }

        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }

        [JsonProperty("assignNumber")]
        public string AssignNumber { get; set; }

        [JsonProperty("assignTglMulai")]
        public DateTime? AssignTglMulai { get; set; }

        [JsonProperty("assignTglSelesai")]
        public DateTime? AssignTglSelesai { get; set; }

        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }

        [JsonProperty("bts_fk")]
        public int? BTS_FK { get; set; }

        [JsonProperty("project_fk")]
        public int Project_FK { get; set; }

        [JsonProperty("btsName")]
        public string BTSName { get; set; }

        [JsonProperty("taskStatus")]
        public string TaskStatus { get; set; }
    }
}
