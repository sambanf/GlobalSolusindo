using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Vendor.EntryForm
{
    public class VendorEntryModel
    {
        [JsonProperty("formData")]
        public VendorEntryFormData FormData { get; set; } = new VendorEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public VendorDTO Model { get; set; }
    }
}
