using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWIssueDTO
    {

        [JsonProperty("jabatan")]
        public string KJabatan { get; set; }

        [JsonProperty("issuename")]
        public string IssueName { get; set; }
        
    }
}
