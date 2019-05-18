using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.AuthParam.Queries
{
    public class AuthParamSearchFilter : SearchFilter
    {
    }

    public class AuthParamSearch : QueryBase
    {
        public AuthParamSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<AuthParamDTO> GetDataByFilter(AuthParamSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "AuthParam_PK";
            AuthParamQuery authParamQuery = new AuthParamQuery(this.Db);

            var filteredRecords =
                authParamQuery.GetQuery()
                .Where(authParam => 
                    authParam.Title.Contains(filter.Keyword)
                    ||
                    authParam.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();
             
            var searchResult = new SearchResult<AuthParamDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = authParamQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
