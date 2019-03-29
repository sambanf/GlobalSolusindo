using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.IzinCutiStatus.ListForm
{
    public class IzinCutiStatusListModel
    {
        [JsonProperty("formData")]
        public IzinCutiStatusListFormData FormData { get; set; } = new IzinCutiStatusListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<IzinCutiStatusDTO> SearchResult { get; set; }
    }
}
