using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.Gender.Queries
{
    public class GenderSearchFilter : SearchFilter
    {
    }

    public class GenderSearch : QueryBase
    {
        public GenderSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<GenderDTO> GetDataByFilter(GenderSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Gender_PK";
            GenderQuery GenderQuery = new GenderQuery(this.Db);

            var filteredRecords =
                GenderQuery.GetQuery()
                .Where(Gender =>
                    Gender.Name.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<GenderDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GenderQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
