using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Position
{
    public class PositionDTO : DTO
    {
        [JsonProperty("position_pk")]
        public int Position_PK { get; set; }

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(PositionQuery), nameof(Position_PK))]
        public string Name { get; set; }

        [Required]
        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
