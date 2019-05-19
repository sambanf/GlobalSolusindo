using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Technology.Queries
{
    public class TechnologySearchFilter : SearchFilter
    {
    }

    public class TechnologySearch : QueryBase
    {
        public TechnologySearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<TechnologyDTO> GetDataByFilter(TechnologySearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Technology_PK";
            TechnologyQuery technologyQuery = new TechnologyQuery(this.Db);

            var filteredRecords =
                technologyQuery.GetQuery()
                .Where(technology =>
                    technology.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<TechnologyDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = technologyQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
