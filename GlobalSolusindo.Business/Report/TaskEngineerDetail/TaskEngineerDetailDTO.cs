using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Identity.User;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.TaskEngineerDetail
{
    public class TaskEngineerDetailDTO
    {
        [JsonProperty("sowAssign")]
        public SOWAssignDTO SOWAssign { get; set; }

        [JsonProperty("user")]
        public UserDTO User { get; set; }

        [JsonProperty("bts")]
        public BTSDTO BTS { get; set; }
    }
}
