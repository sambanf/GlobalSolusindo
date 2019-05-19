using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.Project;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOW.EntryForm
{
    public class SOWEntryFormData
    {
        [JsonProperty("btses")]
        public List<BTSDTO> BTSes { get; set; } = new List<BTSDTO>();

        [JsonProperty("projects")]
        public List<ProjectDTO> Projects { get; set; } = new List<ProjectDTO>();
    }
}
