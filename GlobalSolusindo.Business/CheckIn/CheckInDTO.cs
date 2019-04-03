using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn
{
    public class CheckInDTO : DTO
    {
        [JsonProperty("checkIn_pk")]
        public int CheckIn_PK { get; set; }

        [Required]
        [JsonProperty("sowAssign_fk")]
        [ForeignKey(typeof(SOWAssignQuery), "SOWAssign_PK")]
        public int SOWAssign_FK { get; set; }

        [Required]
        [JsonProperty("sow_fk")]
        [ForeignKey(typeof(SOWQuery), "SOW_PK")]
        public int? SOW_FK { get; set; }

        [JsonProperty("sowName")]
        public string SOWName { get; set; }

        [Required]
        [JsonProperty("waktuCheckIn")]
        public DateTime? WaktuCheckIn { get; set; }

        [Required]
        [JsonProperty("longitudeCheckIn")]
        public string LongitudeCheckIn { get; set; }

        [Required]
        [JsonProperty("latitudeCheckIn")]
        public string LatitudeCheckIn { get; set; }

        [Required]
        [JsonProperty("cellIDCheckIn")]
        public string CellIDCheckIn { get; set; }

        [Required]
        [JsonProperty("waktuCheckOut")]
        public DateTime? WaktuCheckOut { get; set; }

        [Required]
        [JsonProperty("longitudeCheckOut")]
        public string LongitudeCheckOut { get; set; }

        [Required]
        [JsonProperty("latitudeCheckOut")]
        public string LatitudeCheckOut { get; set; }

        [Required]
        [JsonProperty("cellIDCheckOut")]
        public string CellIDCheckOut { get; set; }
    }
}
