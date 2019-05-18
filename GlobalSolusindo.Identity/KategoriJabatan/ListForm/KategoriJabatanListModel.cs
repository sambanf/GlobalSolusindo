using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.KategoriJabatan.ListForm
{
    public class KategoriJabatanListModel
    {
        [JsonProperty("formData")]
        public KategoriJabatanListFormData FormData { get; set; } = new KategoriJabatanListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<KategoriJabatanDTO> SearchResult { get; set; }
    }
}
