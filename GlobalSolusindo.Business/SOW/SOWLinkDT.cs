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
    public class SOWLinkDT
    {
        
        public int SOW_PK { get; set; }
        public string RNO { get; set; }
        public string LinkRNO { get; set; }
        public string RF { get; set; }
        public string LinkRF { get; set; }
        public string Rigger { get; set; }
        public string LinkRigger { get; set; }
        public string DT { get; set; }
        public string SSVLink { get; set; }
        public string SSOLink { get; set; }

    }
}
