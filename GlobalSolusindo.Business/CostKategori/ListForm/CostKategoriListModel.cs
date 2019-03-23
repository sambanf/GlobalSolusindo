using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.CostKategori.ListForm
{
    public class CostKategoriListModel
    {
        [JsonProperty("formData")]
        public CostKategoriListFormData FormData { get; set; } = new CostKategoriListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<CostKategoriDTO> SearchResult { get; set; }
    }
}
