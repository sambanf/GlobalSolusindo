using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Cabang.ListForm
{
    public class CabangListModel
    {
        [JsonProperty("formData")]
        public CabangListFormData FormData { get; set; } = new CabangListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<CabangDTO> SearchResult { get; set; }
    }
}
