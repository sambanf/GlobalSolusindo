using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckOut
{
    public class MobileCheckOutDTO : DTO
    {
        [JsonProperty("checkInID")]
        public int CheckIn_PK { get; set; }

        [JsonProperty("userID")]
        public int UserId { get; set; }

        [Required]
        [JsonProperty("taskID")]
        [ForeignKey(typeof(SOWAssignQuery), "SOWAssign_PK")]
        public int SOWAssign_FK { get; set; }

        [JsonProperty("taskNetwork")]
        public string TaskNetwork { get; set; }

        //[Required]
        //[JsonProperty("checkInTime")]
        //public DateTime? WaktuCheckOut { get; set; }

        [Required]
        [JsonProperty("userLatitude")]
        public string LatitudeCheckOut { get; set; }

        [Required]
        [JsonProperty("userLongitude")]
        public string LongitudeCheckOut { get; set; }

        [JsonProperty("userConnection")]
        public string UserConnection { get; set; }

        [Required]
        [JsonProperty("userMcc")]
        public string MCCCheckOut { get; set; }

        [Required]
        [JsonProperty("userMnc")]
        public string MNCCheckOut { get; set; }

        [Required]
        [JsonProperty("userLac")]
        public string LACCheckOut { get; set; }

        [Required]
        [JsonProperty("userCid")]
        public string CellIDCheckOut { get; set; }
         
        [JsonProperty("userPhoto")]
        public string FileString { get; set; }
    }
}
