using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTSStatus;
using GlobalSolusindo.Business.Cabang;
using GlobalSolusindo.Business.Kota;
using GlobalSolusindo.Business.Operator;
using GlobalSolusindo.Business.Technology;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.BTS.EntryForm
{
    public class BTSEntryFormData
    {
        [JsonProperty("operators")]
        public List<OperatorDTO> Operators { get; set; } = new List<OperatorDTO>();

        [JsonProperty("btsStatuses")]
        public List<BTSStatusDTO> BTSStatuses { get; set; } = new List<BTSStatusDTO>();

        [JsonProperty("areas")]
        public List<AreaDTO> Areas { get; set; } = new List<AreaDTO>();

        [JsonProperty("kotas")]
        public List<KotaDTO> Kotas { get; set; } = new List<KotaDTO>();

        [JsonProperty("cabangs")]
        public List<CabangDTO> Cabangs { get; set; } = new List<CabangDTO>();

        [JsonProperty("technologies")]
        public List<TechnologyDTO> Technologies { get; set; }
    }
}
