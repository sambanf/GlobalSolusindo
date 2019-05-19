using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Project.ListForm
{
    public class ProjectListModel
    {
        [JsonProperty("formData")]
        public ProjectListFormData FormData { get; set; } = new ProjectListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<ProjectDTO> SearchResult { get; set; }
    }
}
