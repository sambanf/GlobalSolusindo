using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Technology.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Technology
{
    public class TechnologyDTO : DTO
    {
        [JsonProperty("technology_pk")]
        public int Technology_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(TechnologyQuery), nameof(Technology_PK))]
        public string Title { get; set; } 
    }
}
