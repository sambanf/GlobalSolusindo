using Newtonsoft.Json;

namespace GlobalSolusindo.Business.PO.EntryForm
{
    public class POEntryModel
    {
        [JsonProperty("formData")]
        public POEntryFormData FormData { get; set; } = new POEntryFormData();

        [JsonProperty("model")]
        public PODTO Model { get; set; }
    }
}