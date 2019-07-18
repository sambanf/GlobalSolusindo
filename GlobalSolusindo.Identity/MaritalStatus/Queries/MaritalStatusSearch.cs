using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.MaritalStatus.Queries
{
    public class MaritalStatusSearchFilter : SearchFilter
    {
    }

    public class MaritalStatusSearch : QueryBase
    {
        public MaritalStatusSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<MaritalStatusDTO> GetDataByFilter(MaritalStatusSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "MaritalStatus_PK";
            MaritalStatusQuery MaritalStatusQuery = new MaritalStatusQuery(this.Db);

            var filteredRecords =
                MaritalStatusQuery.GetQuery()
                .Where(MaritalStatus =>
                    MaritalStatus.Name.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<MaritalStatusDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = MaritalStatusQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
