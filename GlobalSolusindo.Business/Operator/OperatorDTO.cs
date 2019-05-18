using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Operator.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Operator
{
    public class OperatorDTO : DTO
    {
        [JsonProperty("operator_pk")]
        public int Operator_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(OperatorQuery), nameof(Operator_PK))]
        public string Title { get; set; } 
    }
}
