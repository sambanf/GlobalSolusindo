using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSStatus.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.BTSStatus
{
    public class BTSStatusDTO : DTO
    {
        [JsonProperty("btsStatus_pk")]
        public int BTSStatus_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(BTSStatusQuery), nameof(BTSStatus_PK))]
        public string Title { get; set; } 
    }
}
