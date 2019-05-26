using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.DailyTask
{
    public class DailyTaskDTO 
    {
        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }

        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }
         
        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }
         

        [JsonProperty("status")]
        public string Status { get; set; }
    }
}
