using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.Business.TipePekerjaan;
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
        [JsonProperty("tipePekerjaan_FK")]
        [ForeignKey(typeof(TipePekerjaanQuery), "TipePekerjaan_PK", true)]
        public int? TipePekerjaan_FK { get; set; }

        public string TipePekerjaanTitle { get; set; }

        [JsonProperty("route")]
        public string Route { get; set; }
    }
}
