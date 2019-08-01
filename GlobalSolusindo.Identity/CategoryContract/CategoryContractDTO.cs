using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.CategoryContract.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.CategoryContract
{
    public class CategoryContractDTO : DTO
    {
        [JsonProperty("categoryContract_pk")]
        public int CategoryContractPK { get; set; } 

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(CategoryContractQuery), nameof(CategoryContractPK))]
        public string Name { get; set; } 
    }
}
