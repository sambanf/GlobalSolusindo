using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using Kairos.Data;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
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

        //[JsonProperty("POStatus")]
        public string POStatus { get; set; }

        //[JsonProperty("paymentTerm")]
        public string PaymentTerm { get; set; }
        //[JsonProperty("workStatus")]
        public string WorkStatus { get; set; }

        //[JsonProperty("OADate")]
        public System.DateTime? OADate { get; set; }
        //[JsonProperty("SSVDate")]
        public System.DateTime? SSVDate { get; set; }
        //[JsonProperty("SSVAppDate")]
        public System.DateTime? SSVAppDate { get; set; }
        //[JsonProperty("SOMSSVDate")]
        public System.DateTime? SOMSSVDate { get; set; }
        //[JsonProperty("QCAccDate")]
        public System.DateTime? QCAccDate { get; set; }
        //[JsonProperty("PACClusterID")]
        public string PACClusterID { get; set; }

        //[JsonProperty("PACClusterStatus")]
        public string PACClusterStatus { get; set; }
        //[JsonProperty("SOMPACCluster")]
        public string SOMPACCluster { get; set; }

        //[JsonProperty("DocStatus")]
        public string DocStatus { get; set; }

        //[JsonProperty("ESAR1stStatus")]
        public string ESAR1stStatus { get; set; }
        //[JsonProperty("ESAR2ndStatus")]
        public string ESAR2ndStatus { get; set; }

        //[JsonProperty("remarks")]
        public string Remarks { get; set; }
        public tblT_PO ToPOEntity()
        {
            if (this == null)
                return null;
            return this.ToObject<tblT_PO>();
        }
         
    }
}
