using GlobalSolusindo.Base;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.Report.TaskEngineer
{
    public class PeriodDTO : DTO
    {
        [JsonProperty("value")]
        public DateTime? value { get; set; }

        [JsonProperty("name")]
        public string name { get; set; }
    }
}
