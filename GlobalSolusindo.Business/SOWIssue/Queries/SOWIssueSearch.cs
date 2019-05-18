using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.SOWIssue.Queries
{
    public class SOWIssueSearchFilter : SearchFilter
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

    public class SOWIssueSearch : QueryBase
    {
        public SOWIssueSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<SOWIssueDTO> GetDataByFilter(SOWIssueSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWIssue_PK";
            SOWIssueQuery sowIssueQuery = new SOWIssueQuery(this.Db);

            var filteredRecords =
                sowIssueQuery.GetQuery()
                .Where(sowIssue =>
                    sowIssue.Description.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWIssueDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowIssueQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
