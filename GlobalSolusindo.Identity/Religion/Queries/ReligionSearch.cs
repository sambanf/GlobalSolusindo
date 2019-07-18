using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.Religion.Queries
{
    public class ReligionSearchFilter : SearchFilter
    {
    }

    public class ReligionSearch : QueryBase
    {
        public ReligionSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<ReligionDTO> GetDataByFilter(ReligionSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Religion_PK";
            ReligionQuery ReligionQuery = new ReligionQuery(this.Db);

            var filteredRecords =
                ReligionQuery.GetQuery()
                .Where(Religion =>
                    Religion.Name.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<ReligionDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = ReligionQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
