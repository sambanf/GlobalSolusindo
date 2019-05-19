using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckIn
{
    public class MobileCheckInDTO : DTO
    {
        [JsonProperty("checkIn_pk")]
        public int CheckIn_PK { get; set; }

        [JsonProperty("userID")]
        public int UserId { get; set; }

        [Required]
        [JsonProperty("taskID")]
        [ForeignKey(typeof(SOWAssignQuery), "SOWAssign_PK")]
        public int SOWAssign_FK { get; set; }

        [JsonProperty("taskNetwork")]
        public string TaskNetwork { get; set; }

        [Required]
        [JsonProperty("checkInTime")]
        public DateTime? WaktuCheckIn { get; set; }

        [Required]
        [JsonProperty("userLatitude")]
        public string LatitudeCheckIn { get; set; }
        
        [Required]
        [JsonProperty("userLongitude")]
        public string LongitudeCheckIn { get; set; }

        [JsonProperty("userConnection")]
        public string UserConnection { get; set; }

        [Required]
        [JsonProperty("userMcc")]
        public string MCCCheckIn { get; set; }

        [Required]
        [JsonProperty("userMnc")]
        public string MNCCheckIn { get; set; }

        [Required]
        [JsonProperty("userLac")]
        public string LACCheckIn { get; set; }

        [Required]
        [JsonProperty("userCid")]
        public string CellIDCheckIn { get; set; }
         
        [JsonProperty("userPhoto")]
        public string FileString { get; set; }
    }
}
