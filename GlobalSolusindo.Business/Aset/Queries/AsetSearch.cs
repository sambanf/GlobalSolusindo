using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Aset.Queries
{
    public class AsetSearchFilter : SearchFilter
    {
    }

    public class AsetSearch : QueryBase
    {
        public AsetSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<AsetDTO> GetDataByFilter(AsetSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Aset_PK";
            AsetQuery asetQuery = new AsetQuery(this.Db);

            var filteredRecords =
                asetQuery.GetQuery()
                .Where(aset => 
                    aset.AsetID.Contains(filter.Keyword)
                    ||
                    aset.KategoriAsetName.Contains(filter.Keyword)
                    ||
                    aset.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();
             
            var searchResult = new SearchResult<AsetDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = asetQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
