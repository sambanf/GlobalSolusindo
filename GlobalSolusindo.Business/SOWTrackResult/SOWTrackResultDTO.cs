using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.Queries;
using Kairos.DataAnnotations;
using Kairos.Google.KMLs;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultDTO : DTO
    {
        [JsonProperty("sowTrackResult_pk")]
        public int SOWTrackResult_PK { get; set; }

        [JsonProperty("sowTrack_fk")]
        [ForeignKey(typeof(SOWTrackResultQuery), "SOWTrack_PK", true)]
        public int? SOWTrack_FK { get; set; }

        [Required]
        [JsonProperty("checkInID")]
        [ForeignKey(typeof(CheckInQuery), "CheckIn_PK", true)]
        public int? CheckIn_FK { get; set; }
        
        [JsonProperty("taskNetwork")]
        public string TaskNetwork { get; set; }

        [Required]
        [JsonProperty("userRoute")]
        public List<Coordinate> UserRoute { get; set; }

        public string Route
        {
            get
            {
                if (UserRoute == null)
                    return null;
                return JsonConvert.SerializeObject(UserRoute);
            }
        }
    }
}
