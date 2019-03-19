using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.Position.Queries
{
    public class PositionSearchFilter : SearchFilter
    {
    }

    public class PositionSearch : QueryBase
    {
        public PositionSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<PositionDTO> GetDataByFilter(PositionSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Position_PK";
            PositionQuery positionQuery = new PositionQuery(this.Db);

            var filteredRecords =
                positionQuery.GetQuery()
                .Where(position => 
                    position.Name.Contains(filter.Keyword)
                    ||
                    position.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();
             
            var searchResult = new SearchResult<PositionDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = positionQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
