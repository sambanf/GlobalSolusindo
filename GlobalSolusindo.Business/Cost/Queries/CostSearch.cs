using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Cost.Queries
{
    public class CostSearchFilter : SearchFilter
    {
    }

    public class CostSearch : QueryBase
    {
        public CostSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CostDTO> GetDataByFilter(CostSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Cost_PK";
            CostQuery costQuery = new CostQuery(this.Db);

            var filteredRecords =
                costQuery.GetQuery()
                .Where(cost =>
                    cost.KategoriCostTitle.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CostDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = costQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
