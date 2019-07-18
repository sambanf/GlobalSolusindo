using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.CategoryContract.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.CategoryContract
{
    public class CategoryContractDTO : DTO
    {
        [JsonProperty("CategoryContract_pk")]
        public int CategoryContract_PK { get; set; } 

        [Required]
        [JsonProperty("Name")]
        [Unique(typeof(CategoryContractQuery), nameof(CategoryContract_PK))]
        public string Name { get; set; } 
    }
}
