using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Technology.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.BTSTechnology
{
    public class BTSTechnologyDTO : DTO
    {
        [JsonProperty("btsTechnology_pk")]
        public int BTSTechnology_PK { get; set; }

        [Required]
        [JsonProperty("technology_fk")]
        [ForeignKey(typeof(TechnologyQuery), "Technology_PK")]
        public int Technology_FK { get; set; }

        public string TechnologyTitle { get; set; }
         
        public int BTS_FK { get; set; }

        public string BTSName { get; set; }
    }
}
