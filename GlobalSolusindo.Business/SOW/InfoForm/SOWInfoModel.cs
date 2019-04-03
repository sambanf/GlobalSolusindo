using GlobalSolusindo.Business.BTS;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOW.InfoForm
{
    public class SOWInfoModel : SOWDTO
    {
        [JsonProperty("btsInfo")]
        public BTSDTO BTSInfo { get; set; }
    }
}
