using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.IssueType.Queries
{
    public class IssueTypeSearchFilter : SearchFilter
    {
        private int length;
        private int page;

        [JsonProperty("length")]
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
                PageSize = value;
            }
        }

        [JsonProperty("page")]
        public int Page
        {
            get
            {
                return page;
            }
            set
            {
                page = value;
                PageIndex = value;
            }
        }
    }

    public class IssueTypeSearch : QueryBase
    {
        public IssueTypeSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<IssueTypeDTO> GetDataByFilter(IssueTypeSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "IssueType_PK";
            IssueTypeQuery issueTypeQuery = new IssueTypeQuery(this.Db);

            var filteredRecords =
                issueTypeQuery.GetQuery()
                .Where(issueType =>
                    issueType.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<IssueTypeDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = issueTypeQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
