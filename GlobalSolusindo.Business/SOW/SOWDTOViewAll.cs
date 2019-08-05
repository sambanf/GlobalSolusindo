using GlobalSolusindo.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWDTOViewAll : DTO
    {
        public string PLOUniq { get; set; }
        public string PMOUniq { get; set; }
        public string DUID { get; set; }
        public string SiteIDPO { get; set; }
        public string SiteNamePO { get; set; }
        public string System { get; set; }
        public string SOW { get; set; }
        public string Long { get; set; }
        public string lat { get; set; }
        public DateTime AssignDate { get; set; }
        public DateTime? SSVDate { get; set; }
        public DateTime? SSODate { get; set; }
        public DateTime? LVDate { get; set; }
        public DateTime? AcceptedDate { get; set; }
        public string QCAging { get; set; }
        public string QCYear { get; set; }
        public string QCMonth { get; set; }
        public string QCWeek { get; set; }
        public DateTime? QCDate { get; set; }
        public string TP { get; set; }
        public string RTP_TSEL { get; set; }
        public string Region { get; set; }
        public string PLOQC { get; set; }
        public string LinkReport { get; set; }
        public string RF { get; set; }
        public string LinkReport2 { get; set; }
        public string Rigger { get; set; }
        public string LinkAOR { get; set; }
        public string DT { get; set; }
        public string LinkSSO { get; set; }
        public string LinkSSV { get; set; }
        public string NOPO { get; set; }
        public string Value { get; set; }
        public DateTime? Esarsubmit { get; set; }
        public DateTime? VsSubmit { get; set; }
        public string Quantity { get; set; }
        public DateTime? InvoiceSubmit { get; set; }
        public DateTime? PaidDate { get; set; }
        public string Esarstatus1 { get; set; }
        public DateTime? Esarsubmit2 { get; set; }
        public DateTime? VsSubmit2 { get; set; }
        public string Quantity2 { get; set; }
        public DateTime? InvoiceSubmit2 { get; set; }
        public DateTime? PaidDate2 { get; set; }
        public string Esarstatus2 { get; set; }
        public string StatusPO { get; set; }
        public string remarkpo { get; set; }

    }
}