using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOW
{
    public class NetworkType
    {
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("checkInID")]
        public int? CheckIn_PK { get; set; }

        [JsonProperty("status")]
        public int Status { get; set; }

        [JsonProperty("isSubmitted")]
        public bool? IsSubmitted { get; set; }

        [JsonProperty("statusName")]
        public string StatusName
        {
            get
            {
                var name = "New";

                switch (Status)
                {
                    case 1:
                        name = "New";
                        break;
                    case 2:
                        name = "Progress";
                        break;
                    case 3:
                        name = "Done";
                        break;
                    default:
                        break;
                }
                return name;
            }
        }
    }


    public class SOWNameDTO
    {
        [JsonProperty("idsowname")]
        public int id { get; set; }
        [JsonProperty("sowNames")]
        public string SOWName { get; set; }
    }

    public class TaskListDTO
    {
        [JsonProperty("userId")]
        public int? UserId { get; set; }

        [JsonProperty("taskId")]
        public int? TaskId { get; set; }

        [JsonProperty("checkInID")]
        public int? CheckIn_PK { get; set; }

        [JsonProperty("bts")]
        public string BTS { get; set; }

        [JsonProperty("sowName")]
        public string SOWName { get; set; }

        [JsonProperty("towerID")]
        public string TowerID { get; set; }

        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("status")]
        public int? Status { get; set; }

        [JsonProperty("statusName")]
        public string StatusName
        {
            get

            {
                var name = "New";

                switch (Status)
                {
                    case 1:
                        name = "New";
                        break;
                    case 2:
                        name = "Progress";
                        break;
                    case 3:
                        name = "Done";
                        break;
                    case 4:
                        name = "Need URL";
                        break;
                    default:
                        break;
                }
                return name;
            }
        }

        [JsonProperty("reported")]
        public bool Reported { get; set; }

        [JsonProperty("reportedValue")]
        public string ReportedValue { get; set; }

        [JsonProperty("isClose")]
        public bool? IsClose { get; set; }

        [JsonProperty("isSubmitted")]
        public bool? IsSubmitted { get; set; }

        [JsonProperty("network")]
        public List<NetworkType> Network { get; set; } = new List<NetworkType>();
    }
}
