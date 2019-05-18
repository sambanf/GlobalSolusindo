using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.CostKategori.Queries
{
    public class CostKategoriSearchFilter : SearchFilter
    {
    }

    public class CostKategoriSearch : QueryBase
    {
        public CostKategoriSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CostKategoriDTO> GetDataByFilter(CostKategoriSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "CostKategori_PK";
            CostKategoriQuery costKategoriQuery = new CostKategoriQuery(this.Db);

            var filteredRecords =
                costKategoriQuery.GetQuery()
                .Where(costKategori =>
                    costKategori.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CostKategoriDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = costKategoriQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
