using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Vendor.ListForm
{
    public class VendorListModel
    {
        [JsonProperty("formData")]
        public VendorListFormData FormData { get; set; } = new VendorListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<VendorDTO> SearchResult { get; set; }
    }
}
