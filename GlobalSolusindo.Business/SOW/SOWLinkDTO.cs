using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWLinkDTO
    {
        [JsonProperty("jabatan")]
        public string Jabatan { get; set; }

        [JsonProperty("nama")]
        public string nama { get; set; }

        [JsonProperty("link")]
        public string link { get; set; }
        
        [JsonProperty("ssv")]
        public string SSV { get; set; }

        
    }
}
