using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.RoleGroup.Queries
{
    public class RoleGroupSearchFilter : SearchFilter
    {
    }

    public class RoleGroupSearch : QueryBase
    {
        public RoleGroupSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<RoleGroupDTO> GetDataByFilter(RoleGroupSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "RoleGroup_PK";
            RoleGroupQuery roleGroupQuery = new RoleGroupQuery(this.Db);

            var filteredRecords =
                roleGroupQuery.GetQuery()
                .Where(roleGroup => 
                    roleGroup.Title.Contains(filter.Keyword)
                    ||
                    roleGroup.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();
             
            var searchResult = new SearchResult<RoleGroupDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = roleGroupQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
