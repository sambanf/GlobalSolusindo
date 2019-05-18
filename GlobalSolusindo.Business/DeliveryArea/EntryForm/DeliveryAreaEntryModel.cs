using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.DeliveryArea.EntryForm
{
    public class DeliveryAreaEntryModel
    {
        [JsonProperty("formData")]
        public DeliveryAreaEntryFormData FormData { get; set; } = new DeliveryAreaEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public DeliveryAreaDTO Model { get; set; }
    }
}
