using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using Kairos.Data;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.PO
{
    public class PODTO : DTO
    {
        //[JsonProperty("po_pk")]
        public int PO_PK { get; set; }

        [Required]
        //[JsonProperty("account")]
        public string Account { get; set; }

        [Required]
        //[JsonProperty("projectCode")]
        public string ProjectCode { get; set; }

        [Required]
        //[JsonProperty("siteIDImp")]
        public string SiteIDImp { get; set; }

        [Required]
        //[JsonProperty("siteID")]
        public string SiteID { get; set; }
        [Required]
        //[JsonProperty("siteName")]
        public string SiteName { get; set; }

        //[JsonProperty("DUID")]
        public string DUID { get; set; }

        //[JsonProperty("PMOUniq")]
        public string PMOUniq { get; set; }

        //[JsonProperty("SOWAct")]
        public string SOWAct { get; set; }

        //[JsonProperty("system")]
        public string System { get; set; }

        //[JsonProperty("SOWPO")]
        public string SOWPO { get; set; }

        //[JsonProperty("itemDesc")]
        public string ItemDesc { get; set; }

        //[JsonProperty("PONo")]
        public string PONo { get; set; }

        //[JsonProperty("shipmentNo")]
        public string ShipmentNo { get; set; }

        //[JsonProperty("qty")]
        public int Qty { get; set; }

        public int? Value { get; set; }

        //[JsonProperty("paymentTerm")]
        public string PaymentTerm { get; set; }

        //[JsonProperty("workStatus")]
        public string WorkStatus { get; set; }

        //[JsonProperty("remarks")]
        public string Remarks { get; set; }

        //Esar 1st
        public DateTime? EsarSubmit1st { get; set; }
        public DateTime? VsSubmit1st { get; set; }
        public decimal? Quantity1st { get; set; }
        public DateTime? InvoiceSubmit1st { get; set; }
        public DateTime? PaidDate1st { get; set; }
        public int? EsarStatus1st { get; set; }


        //Esar 2nd
        public DateTime? EsarSubmit2nd { get; set; }
        public DateTime? VsSubmit2nd { get; set; }
        public decimal? Quantity2nd { get; set; }
        public DateTime? InvoiceSubmit2nd { get; set; }
        public DateTime? PaidDate2nd { get; set; }
        public int? EsarStatus2nd { get; set; }

        //[JsonProperty("POStatus")]
        public int? POStatus { get; set; }

        public tblT_PO ToPOEntity()
        {
            if (this == null)
                return null;
            return this.ToObject<tblT_PO>();
        }

    }
}
