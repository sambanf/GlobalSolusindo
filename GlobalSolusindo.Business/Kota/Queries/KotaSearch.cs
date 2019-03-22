using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Kota.Queries
{
    public class KotaSearchFilter : SearchFilter
    {
    }

    public class KotaSearch : QueryBase
    {
        public KotaSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<KotaDTO> GetDataByFilter(KotaSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Kota_PK";
            KotaQuery kotaQuery = new KotaQuery(this.Db);

            var filteredRecords =
                kotaQuery.GetQuery()
                .Where(kota =>
                    kota.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<KotaDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = kotaQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
