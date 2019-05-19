using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.BTSStatus.Queries
{
    public class BTSStatusSearchFilter : SearchFilter
    {
    }

    public class BTSStatusSearch : QueryBase
    {
        public BTSStatusSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<BTSStatusDTO> GetDataByFilter(BTSStatusSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "BTSStatus_PK";
            BTSStatusQuery btsStatusQuery = new BTSStatusQuery(this.Db);

            var filteredRecords =
                btsStatusQuery.GetQuery()
                .Where(btsStatus =>
                    btsStatus.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<BTSStatusDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = btsStatusQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
