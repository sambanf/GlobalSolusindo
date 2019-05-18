using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.SOWStatus.Queries
{
    public class SOWStatusSearchFilter : SearchFilter
    {
    }

    public class SOWStatusSearch : QueryBase
    {
        public SOWStatusSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<SOWStatusDTO> GetDataByFilter(SOWStatusSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWStatus_PK";
            SOWStatusQuery sowStatusQuery = new SOWStatusQuery(this.Db);

            var filteredRecords =
                sowStatusQuery.GetQuery()
                .Where(sowStatus =>
                    sowStatus.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWStatusDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowStatusQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
