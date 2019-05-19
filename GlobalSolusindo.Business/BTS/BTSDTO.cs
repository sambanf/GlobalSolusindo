using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.Business.BTSTechnology;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.Business.Operator.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.BTS
{
    public class BTSDTO : DTO
    {
        [JsonProperty("bts_pk")]
        public int BTS_PK { get; set; }

        [Required]
        [JsonProperty("customerSite")]
        public string CustomerSite { get; set; }

        [Required]
        [JsonProperty("towerId")]
        public string TowerID { get; set; }

        [Required]
        [JsonProperty("cellId")]
        public string CellID { get; set; }

        [Required]
        [JsonProperty("name")]
        [Unique(typeof(BTSQuery), nameof(BTS_PK))]
        public string Name { get; set; }

        [Required]
        [JsonProperty("operator_fk")]
        [ForeignKey(typeof(OperatorQuery), "Operator_PK")]
        public int Operator_FK { get; set; }

        [JsonProperty("operatorTitle")]
        public string OperatorTitle { get; set; }

        [JsonProperty("statusBts_fk")]
        [ForeignKey(typeof(BTSStatusQuery), "BTSStatus_PK", true)]
        public int? StatusBTS_FK { get; set; }

        [JsonProperty("statusBtsTitle")]
        public string StatusBtsTitle { get; set; }

        [JsonProperty("longitude")]
        public string Longitude { get; set; }

        [JsonProperty("latitude")]
        public string Latitude { get; set; }

        [Required]
        [JsonProperty("area_fk")]
        [ForeignKey(typeof(AreaQuery), "Area_PK")]
        public int Area_FK { get; set; }

        [JsonProperty("areaTitle")]
        public string AreaTitle { get; set; }

        [Required]
        [JsonProperty("kota_fk")]
        [ForeignKey(typeof(KotaQuery), "Kota_PK")]
        public int Kota_FK { get; set; }

        [JsonProperty("kotaTitle")]
        public string KotaTitle { get; set; }

        [Required]
        [JsonProperty("cabang_fk")]
        [ForeignKey(typeof(CabangQuery), "Cabang_PK")]
        public int Cabang_FK { get; set; }

        [JsonProperty("cabangTitle")]
        public string CabangTitle { get; set; }

        [JsonProperty("alamat")]
        public string Alamat { get; set; }

        [JsonProperty("btsTechnologies")]
        public List<BTSTechnologyDTO> BTSTechnologies { get; set; } = new List<BTSTechnologyDTO>();
    }
}
