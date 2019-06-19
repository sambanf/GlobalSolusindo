using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.PO.ListForm
{
    public class POListModel
    {

        [JsonProperty("searchResult")]
        public SearchResult<PODTO> SearchResult { get; set; }
    }
}
