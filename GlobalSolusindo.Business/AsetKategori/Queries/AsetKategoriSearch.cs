using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.AsetKategori.Queries
{
    public class AsetKategoriSearchFilter : SearchFilter
    {
    }

    public class AsetKategoriSearch : QueryBase
    {
        public AsetKategoriSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<AsetKategoriDTO> GetDataByFilter(AsetKategoriSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "AsetKategori_PK";
            AsetKategoriQuery asetKategoriQuery = new AsetKategoriQuery(this.Db);

            var filteredRecords =
                asetKategoriQuery.GetQuery()
                .Where(asetKategori =>
                    asetKategori.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<AsetKategoriDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = asetKategoriQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
