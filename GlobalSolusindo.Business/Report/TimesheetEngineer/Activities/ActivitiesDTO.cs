using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.Activities
{
    public class ActivitiesDTO
    {
        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }

        [JsonProperty("tanggal")]
        public DateTime? Tanggal { get; set; }

        [JsonProperty("checkInTime")]
        public string CheckInTime { get; set; }

        [JsonProperty("checkOutTime")]
        public string CheckOutTime { get; set; }

        [JsonProperty("aktifitas")]
        public string Aktifitas { get; set; }

        [JsonProperty("approvedBy")]
        public string ApprovedBy { get; set; }
    }
}
