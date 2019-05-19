using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultDTO : DTO
    {
        [JsonProperty("sowResult_pk")]
        public int SOWResult_PK { get; set; }

        [Required]
        [JsonProperty("checkInID")]
        [ForeignKey(typeof(CheckInQuery), "CheckIn_PK")]
        public int CheckIn_FK { get; set; }

        [JsonProperty("isApproved")]
        public bool? IsApproved { get; set; }

        [JsonProperty("approvedBy")]
        public string ApprovedBy { get; set; }

        [JsonProperty("approvedDate")]
        public DateTime? ApprovedDate { get; set; }

        [JsonProperty("description")]
        public string FileUrl { get; set; }
    }
}