using GlobalSolusindo.Identity.Position;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryFormData
    {
        [JsonProperty("positions")]
        public List<PositionDTO> Positions { get; set; } = new List<PositionDTO>();
    }
}
