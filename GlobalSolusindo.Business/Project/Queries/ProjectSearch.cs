using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Project.Queries
{
    public class ProjectSearchFilter : SearchFilter
    {
    }

    public class ProjectSearch : QueryBase
    {
        public ProjectSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<ProjectDTO> GetDataByFilter(ProjectSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Project_PK";
            ProjectQuery projectQuery = new ProjectQuery(this.Db);

            var filteredRecords =
                projectQuery.GetQuery()
                .Where(project =>
                    project.Title.Contains(filter.Keyword)
                    || project.OperatorTitle.Contains(filter.Keyword)
                    || project.DeliveryAreaTitle.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<ProjectDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = projectQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
