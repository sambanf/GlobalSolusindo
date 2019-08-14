using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.Business.AsetKategori.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using GlobalSolusindo.Business.AsetHistori;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Aset
{
    public class AsetDTO : DTO
    {
        [JsonProperty("aset_pk")]
        public int Aset_PK { get; set; }

        [JsonProperty("kategoriAset_fk")]
        [ForeignKey(typeof(AsetKategoriQuery), "AsetKategori_PK")]
        public int KategoriAset_FK { get; set; }

        [JsonProperty("kategoriAsetName")]
        public string KategoriAsetName { get; set; }

        [Required]
        [JsonProperty("asetId")]
        [Unique(typeof(AsetQuery), nameof(Aset_PK))]
        public string AsetID { get; set; }

        [Required]
        [JsonProperty("name")]
        //[Unique(typeof(AsetQuery), nameof(Aset_PK))]
        public string Name { get; set; }

        [JsonProperty("status")]
        public List<AsetHistoriDTO> Status { get; set; } = new List<AsetHistoriDTO>();

        [JsonProperty("filePhotoInBase64")]
        public string FilePhotoInBase64 { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("remark")]
        public List<string> Remark { get; set; }
    }
}
