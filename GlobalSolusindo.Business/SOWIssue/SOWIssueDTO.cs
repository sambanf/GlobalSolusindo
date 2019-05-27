using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.SOWIssue
{
    public class SOWIssueDTO : DTO
    {
        [JsonProperty("issueId")]
        public int SOWIssue_PK { get; set; } 

        [Required(ErrorMessage ="Task ID is required")]
        [JsonProperty("taskID")]
        [ForeignKey(typeof(SOWAssignQuery), "SOWAssign_PK")]
        public int? SOWAssign_FK { get; set; }

        [Required(ErrorMessage = "Issue type is required")]
        [JsonProperty("issueTypeID")]
        [ForeignKey(typeof(IssueTypeQuery), "IssueType_PK")]
        public int? IssueType_FK { get; set; }

        [Required]
        [JsonProperty("description")] 
        public string Description { get; set; }
         
        [JsonProperty("photo")]
        public string FilePhotoInBase64 { get; set; }
    }
}
