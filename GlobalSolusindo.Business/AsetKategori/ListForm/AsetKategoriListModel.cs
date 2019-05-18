using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.AsetKategori.ListForm
{
    public class AsetKategoriListModel
    {
        [JsonProperty("formData")]
        public AsetKategoriListFormData FormData { get; set; } = new AsetKategoriListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AsetKategoriDTO> SearchResult { get; set; }
    }
}
