using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.Business.SOW.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Cost
{
    public class CostDTO : DTO
    {
        [JsonProperty("cost_pk")]
        public int Cost_PK { get; set; }

        [Required]
        [JsonProperty("kategoriCost_fk")]
        [ForeignKey(typeof(CostKategoriQuery), "CostKategori_PK")]
        public int KategoriCost_FK { get; set; }

        [JsonProperty("kategoriCostTitle")]
        public string KategoriCostTitle { get; set; }

        [Required]
        [JsonProperty("sow_fk")]
        [ForeignKey(typeof(SOWQuery), "SOW_PK")]
        public int SOW_FK { get; set; }

        [JsonProperty("sowName")]
        public string SOWName { get; set; }

        [Required]
        [Range(1, 1000000000)]
        [JsonProperty("nominal")]
        public double Nominal { get; set; }

        [Required]
        [JsonProperty("deskripsi")]
        public string Deskripsi { get; set; }

        [Required]
        [JsonProperty("tanggal")]
        public DateTime Tanggal { get; set; }
    }
}
