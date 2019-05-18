using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.KategoriJabatan.Queries
{
    public class KategoriJabatanSearchFilter : SearchFilter
    {
    }

    public class KategoriJabatanSearch : QueryBase
    {
        public KategoriJabatanSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<KategoriJabatanDTO> GetDataByFilter(KategoriJabatanSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "KategoriJabatan_PK";
            KategoriJabatanQuery kategoriJabatanQuery = new KategoriJabatanQuery(this.Db);

            var filteredRecords =
                kategoriJabatanQuery.GetQuery()
                .Where(kategoriJabatan =>
                    kategoriJabatan.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<KategoriJabatanDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = kategoriJabatanQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
