using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.Operator.Queries
{
    public class OperatorSearchFilter : SearchFilter
    {
        public bool forexcel { get; set; }
    }

    public class OperatorSearch : QueryBase
    {
        public OperatorSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<OperatorDTO> GetDataByFilter(OperatorSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Operator_PK";
            OperatorQuery _operatorQuery = new OperatorQuery(this.Db);

            var filteredRecords =
                _operatorQuery.GetQuery()
                .Where(_operator =>
                    _operator.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.ToList();
            if (!filter.forexcel)
            {
                displayedRecords = filteredRecords.SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            }

            var searchResult = new SearchResult<OperatorDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = _operatorQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
