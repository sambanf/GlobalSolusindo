using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWStatus.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWStatus
{
    public class SOWStatusDTO : DTO
    {
        [JsonProperty("sowStatus_pk")]
        public int SOWStatus_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(SOWStatusQuery), nameof(SOWStatus_PK))]
        public string Title { get; set; } 
    }
}
