using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.AsetHistori.ListForm
{
    public class AsetHistoriListModel
    {
        [JsonProperty("formData")]
        public AsetHistoriListFormData FormData { get; set; } = new AsetHistoriListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AsetHistoriDTO> SearchResult { get; set; }
    }
}
