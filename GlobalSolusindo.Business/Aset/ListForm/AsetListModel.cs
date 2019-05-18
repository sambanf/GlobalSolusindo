using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Aset.ListForm
{
    public class AsetListModel
    {
        [JsonProperty("formData")]
        public AsetListFormData FormData { get; set; } = new AsetListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AsetDTO> SearchResult { get; set; }
    }
}
