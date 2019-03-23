using GlobalSolusindo.Business.DeliveryArea;
using GlobalSolusindo.Business.Operator;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Project.EntryForm
{
    public class ProjectEntryFormData
    {
        [JsonProperty("operators")]
        public List<OperatorDTO> Operators { get; set; } = new List<OperatorDTO>();

        [JsonProperty("deliveryAreas")]
        public List<DeliveryAreaDTO> DeliveryAreas { get; set; } = new List<DeliveryAreaDTO>();
    }
}