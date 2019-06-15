using GlobalSolusindo.Base;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Product
{
    public class ProductDTO : DTO
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(ProductQuery), nameof(Id))]
        public string Name { get; set; }

        [Required]
        [JsonProperty("price")]
        public double Price { get; set; }

        [Required]
        [JsonProperty("unitCost")]
        public double UnitCost { get; set; }
    }
}
