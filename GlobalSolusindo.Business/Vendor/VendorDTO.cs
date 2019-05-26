using GlobalSolusindo.Base;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorDTO : DTO
    {
        [JsonProperty("vendor_pk")]
        public int Vendor_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(VendorQuery), nameof(Vendor_PK))]
        public string Title { get; set; } 
    }
}
