using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Project.ListForm
{
    public class ProjectListFormData
    {
    }

    public class ProjectListModel
    {
        [JsonProperty("formData")]
        public ProjectListFormData FormData { get; set; } = new ProjectListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<ProjectDTO> SearchResult { get; set; }
    }

    public class ProjectListDataProvider : FactoryBase
    {
        private ProjectQuery projectQuery;

        public ProjectListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public ProjectListDataProvider(GlobalSolusindoDb db, tblM_User user, ProjectQuery projectSearch) : base(db, user)
        {
            this.projectQuery = projectSearch;
        }

        public ProjectListModel Get(ProjectSearchFilter searchFilter)
        {
            ProjectListFormData formData = new ProjectListFormData();
            SearchResult<ProjectDTO> searchResult = projectQuery.Search(searchFilter);
            return new ProjectListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
