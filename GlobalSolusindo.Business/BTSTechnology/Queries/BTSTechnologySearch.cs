using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.BTSTechnology.Queries
{
    public class BTSTechnologySearchFilter : SearchFilter
    {
    }

    public class BTSTechnologySearch : QueryBase
    {
        public BTSTechnologySearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<BTSTechnologyDTO> GetDataByFilter(BTSTechnologySearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "BTSTechnology_PK";
            BTSTechnologyQuery btsTechnologyQuery = new BTSTechnologyQuery(this.Db);

            var filteredRecords =
                btsTechnologyQuery.GetQuery()
                .Where(btsTechnology =>
                    btsTechnology.BTSName.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<BTSTechnologyDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = btsTechnologyQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
