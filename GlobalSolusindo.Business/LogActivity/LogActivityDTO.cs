using GlobalSolusindo.Base;
using GlobalSolusindo.Business.LogActivity.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.LogActivity
{
    
    public class LogActivityDTO : DTO
    {
        [JsonProperty("loginActivity_pk")]
        public int LogActivity_PK { get; set; }

        //[Required]
        [JsonProperty("username")]
        //[Unique(typeof(LogActivityQuery), nameof(LogActivity_PK))]
        public string UserName { get; set; }

        [JsonProperty("ipAddress")]
        public string IPAddress { get; set; }

        [JsonProperty("activityDateTime")]
        public DateTime? ActivityDateTime { get; set; }

        [JsonProperty("activityName")]
        public string ActivityName { get; set; }

        [JsonProperty("activityKey")]
        public string ActivityKey { get; set; }

        [JsonProperty("activityResult")]
        public string ActivityResult { get; set; }

        [JsonProperty("activityDescription")]
        public string ActivityDescription { get; set; }
        
        [JsonProperty("valueOld")]
        public string ValueOld { get; set; }

        [JsonProperty("valueNew")]
        public string ValueNew { get; set; }
    }
}
