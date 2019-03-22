using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Area.Queries
{
    public class AreaSearchFilter : SearchFilter
    {
    }

    public class AreaSearch : QueryBase
    {
        public AreaSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<AreaDTO> GetDataByFilter(AreaSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Area_PK";
            AreaQuery areaQuery = new AreaQuery(this.Db);

            var filteredRecords =
                areaQuery.GetQuery()
                .Where(area =>
                    area.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<AreaDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = areaQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
