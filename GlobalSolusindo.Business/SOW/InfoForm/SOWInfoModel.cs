using GlobalSolusindo.Business.BTS;
using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOW.InfoForm
{
    public class SOWInfoModel : SOWDTO
    {
        [JsonProperty("btsInfo")]
        public BTSDTO BTSInfo { get; set; }
    }
}
