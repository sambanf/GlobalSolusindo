using Newtonsoft.Json;

namespace GlobalSolusindo.Business.TimesheetDetail
{
    public class TimesheetDetailDTO
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }

        [JsonProperty("bulan")]
        public int Bulan { get; set; }

        [JsonProperty("bulanName")]
        public string BulanName { get; set; }

        [JsonProperty("tahun")]
        public int Tahun { get; set; }  
    }
}
