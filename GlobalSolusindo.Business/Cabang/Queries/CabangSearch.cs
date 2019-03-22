using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Cabang.Queries
{
    public class CabangSearchFilter : SearchFilter
    {
    }

    public class CabangSearch : QueryBase
    {
        public CabangSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CabangDTO> GetDataByFilter(CabangSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Cabang_PK";
            CabangQuery cabangQuery = new CabangQuery(this.Db);

            var filteredRecords =
                cabangQuery.GetQuery()
                .Where(cabang =>
                    cabang.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CabangDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = cabangQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
