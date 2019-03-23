using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.DeliveryArea
{
    public class DeliveryAreaDTO : DTO
    {
        [JsonProperty("deliveryArea_pk")]
        public int DeliveryArea_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(DeliveryAreaQuery), nameof(DeliveryArea_PK))]
        public string Title { get; set; } 
    }
}
