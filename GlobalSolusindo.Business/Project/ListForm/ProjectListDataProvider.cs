using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Project.ListForm
{
    public class ProjectListDataProvider : FactoryBase
    {
        private ProjectSearch projectSearch;

        public ProjectListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public ProjectListDataProvider(GlobalSolusindoDb db, tblM_User user, ProjectSearch projectSearch) : base(db, user)
        {
            this.projectSearch = projectSearch;
        }

        public ProjectListModel Get(ProjectSearchFilter searchFilter)
        {
            ProjectListFormData formData = new ProjectListFormData();
            SearchResult<ProjectDTO> searchResult = projectSearch.GetDataByFilter(searchFilter);
            return new ProjectListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
