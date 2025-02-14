//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GlobalSolusindo.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblT_PO
    {
        public int PO_PK { get; set; }
        public string Account { get; set; }
        public string ProjectCode { get; set; }
        public string SiteIDImp { get; set; }
        public string SiteID { get; set; }
        public string SiteName { get; set; }
        public string DUID { get; set; }
        public string PMOUniq { get; set; }
        public string SOWAct { get; set; }
        public string System { get; set; }
        public string SOWPO { get; set; }
        public string ItemDesc { get; set; }
        public string PONo { get; set; }
        public string ShipmentNo { get; set; }
        public int Qty { get; set; }
        public Nullable<int> Value { get; set; }
        public Nullable<int> POStatus { get; set; }
        public string PaymentTerm { get; set; }
        public string WorkStatus { get; set; }
        public string Remarks { get; set; }
        public Nullable<System.DateTime> EsarSubmit1st { get; set; }
        public Nullable<System.DateTime> VsSubmit1st { get; set; }
        public Nullable<decimal> Quantity1st { get; set; }
        public Nullable<System.DateTime> InvoiceSubmit1st { get; set; }
        public Nullable<System.DateTime> PaidDate1st { get; set; }
        public Nullable<int> EsarStatus1st { get; set; }
        public Nullable<System.DateTime> EsarSubmit2nd { get; set; }
        public Nullable<System.DateTime> VsSubmit2nd { get; set; }
        public Nullable<decimal> Quantity2nd { get; set; }
        public Nullable<System.DateTime> InvoiceSubmit2nd { get; set; }
        public Nullable<System.DateTime> PaidDate2nd { get; set; }
        public Nullable<int> EsarStatus2nd { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public System.DateTime UpdatedDate { get; set; }
        public int Status_FK { get; set; }
    }
}
