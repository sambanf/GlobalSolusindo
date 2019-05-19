using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.IssueType
{
    public class IssueTypeDTO : DTO
    {
        [JsonProperty("issueType_pk")]
        public int IssueType_PK { get; set; } 

        [Required]
        [JsonProperty("title")]
        [Unique(typeof(IssueTypeQuery), nameof(IssueType_PK))]
        public string Title { get; set; } 
    }
}
