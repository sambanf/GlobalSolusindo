using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Kota.ListForm
{
    public class KotaListModel
    {
        [JsonProperty("formData")]
        public KotaListFormData FormData { get; set; } = new KotaListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<KotaDTO> SearchResult { get; set; }
    }
}
