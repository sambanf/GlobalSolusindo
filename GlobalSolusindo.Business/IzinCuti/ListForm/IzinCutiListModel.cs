using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.IzinCuti.ListForm
{
    public class IzinCutiListModel
    {
        [JsonProperty("formData")]
        public IzinCutiListFormData FormData { get; set; } = new IzinCutiListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<IzinCutiDTO> SearchResult { get; set; }
    }
}
