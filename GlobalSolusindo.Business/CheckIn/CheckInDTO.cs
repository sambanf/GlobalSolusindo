using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWResult;
using GlobalSolusindo.Business.SOWTrackResult;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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
        public int? SOWAssign_FK { get; set; }
         
        [JsonProperty("userID")] 
        public int? UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }

        [JsonProperty("sow_fk")] 
        public int? SOW_FK { get; set; }

        [JsonProperty("sowDate")]
        //[JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? SOWDate { get; set; }

        [JsonProperty("sowName")]
        public string SOWName { get; set; }

        [JsonProperty("btsName")]
        public string BTSName { get; set; }

        [JsonProperty("btsAddress")]
        public string BTSAddress { get; set; }

        [Required]
        [JsonProperty("checkInTime")]
        //[JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? WaktuCheckIn { get; set; }

        [Required]
        [JsonProperty("longitudeCheckIn")]
        public string LongitudeCheckIn { get; set; }

        [Required]
        [JsonProperty("latitudeCheckIn")]
        public string LatitudeCheckIn { get; set; }

        [Required]
        [JsonProperty("mccCheckIn")]
        public string MCCCheckIn { get; set; }

        [Required]
        [JsonProperty("mncCheckIn")]
        public string MNCCheckIn { get; set; }

        [Required]
        [JsonProperty("lacCheckIn")]
        public string LACCheckIn { get; set; }
         
        [Required]
        [JsonProperty("cellIDCheckIn")]
        public string CellIDCheckIn { get; set; } 

        [Required]
        [JsonProperty("waktuCheckOut")]
        //[JsonConverter(typeof(CustomDateTimeConverter))]
        public DateTime? WaktuCheckOut { get; set; }

        [Required]
        [JsonProperty("longitudeCheckOut")]
        public string LongitudeCheckOut { get; set; }

        [Required]
        [JsonProperty("latitudeCheckOut")]
        public string LatitudeCheckOut { get; set; }

        [Required]
        [JsonProperty("mccCheckOut")]
        public string MCCCheckOut { get; set; }

        [Required]
        [JsonProperty("mncCheckOut")]
        public string MNCCheckOut { get; set; }

        [Required]
        [JsonProperty("lacCheckOut")]
        public string LACCheckOut { get; set; } 

        [Required]
        [JsonProperty("cellIDCheckOut")]
        public string CellIDCheckOut { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("fileSubmitted")]
        public string FileSubmitted { get; set; }

        public SOWResultDTO SOWResult { get; set; } = new SOWResultDTO();

        public List<SOWTrackResultDTO> SOWTrackResults { get; set; } = new List<SOWTrackResultDTO>();
    }
}
