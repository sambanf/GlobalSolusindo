using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.Business.SOWTrack;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWDTO : DTO
    {
        [JsonProperty("sow_pk")]
        public int SOW_PK { get; set; } 

        [Required]
        [JsonProperty("sowName")]
        [Unique(typeof(SOWQuery), nameof(SOW_PK))]
        public string SOWName { get; set; }

        [Required]
        [JsonProperty("bts_fk")]
        [ForeignKey(typeof(BTSQuery), "BTS_PK")]
        public int BTS_FK { get; set; }

        [JsonProperty("btsName")]
        public string BTSName { get; set; }

        [Required]
        [JsonProperty("project_fk")]
        [ForeignKey(typeof(ProjectQuery), "Project_PK")]
        public int Project_FK { get; set; }

        [JsonProperty("projectTitle")]
        public string ProjectTitle { get; set; }

        [Required]
        [JsonProperty("tglMulai")] 
        public DateTime? TglMulai { get; set; }

        //[Required]
        [JsonProperty("tglSelesai")]
        public DateTime? TglSelesai { get; set; }

        [JsonProperty("statusSow_fk")]
        [ForeignKey(typeof(SOWStatusQuery), "SOWStatus_PK", true)]
        public int? StatusSOW_FK { get; set; }

        [JsonProperty("sowStatusTitle")]
        public string SOWStatusTitle { get; set; }

        [JsonProperty("sowAssigns")]
        public List<SOWAssignDTO> SOWAssigns { get; set; } = new List<SOWAssignDTO>();

        [JsonProperty("sowTracks")]
        public List<SOWTrackDTO> SOWTracks { get; set; } = new List<SOWTrackDTO>();
    }
}
