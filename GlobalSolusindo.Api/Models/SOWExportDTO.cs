using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GlobalSolusindo.Api.Models
{
    public class SOWExportDTO
    {
        public string PMOUniq { get; set; }
        public string Project { get; set; }
        public string DUID { get; set; }
        public string SiteIDPO { get; set; }
        public string System { get; set; }
        public string SOW { get; set; }
        public DateTime CODate { get; set; }
        public DateTime LVDate { get; set; }
        public DateTime AcceptedDate { get; set; }
        public string TP { get; set; }
        public string RTP_TSEL { get; set; }
        public string teamleader { get; set; }
        public string rno { get; set; }
        public string rf { get; set; }
        public string rigger { get; set; }
        public string dt { get; set; }

    }
}