using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWIssueDT
    {
        public int? SOW_FK { get; set; }
        public string IssueName { get; set; }
        public int? User_FK { get; set; }
        public string Username { get; set; }
        public int KJabatan { get; set; }
        public string JabatanTitle { get; set; }

    }
}
