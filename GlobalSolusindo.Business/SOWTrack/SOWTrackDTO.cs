using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.Technology.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWTrack
{
    public class SOWTrackDTO : DTO
    {
        [JsonProperty("sowTrack_pk")]
        public int SOWTrack_PK { get; set; }

        [Required]
        [JsonProperty("sow_fk")]
        [ForeignKey(typeof(SOWQuery), "SOW_PK")]
        public int? SOW_FK { get; set; }

        //[Required]
        [JsonProperty("technology_fk")]
        [ForeignKey(typeof(TechnologyQuery), "Technology_PK", true)]
        public int? Technology_FK { get; set; }

        public string TechnologyTitle { get; set; }

        [JsonProperty("route")]
        public string Route { get; set; }
    }
}
