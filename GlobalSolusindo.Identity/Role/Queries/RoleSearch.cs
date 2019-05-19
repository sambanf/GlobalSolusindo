using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.Role.Queries
{
    public class RoleSearchFilter : SearchFilter
    {
    }

    public class RoleSearch : QueryBase
    {
        public RoleSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<RoleDTO> GetDataByFilter(RoleSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Role_PK";
            RoleQuery roleQuery = new RoleQuery(this.Db);

            var filteredRecords =
                roleQuery.GetQuery()
                .Where(role => 
                    role.Title.Contains(filter.Keyword)
                    ||
                    role.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize).ToList();
             
            var searchResult = new SearchResult<RoleDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = roleQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
