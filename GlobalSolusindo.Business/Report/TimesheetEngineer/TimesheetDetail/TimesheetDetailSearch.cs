using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.TimesheetDetail.Queries
{
    public class TimesheetDetailSearchFilter : SearchFilter
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }
    }

    public class TimesheetDetailSearchResult : SearchResult<TimesheetDetailDTO>
    {
        public TimesheetDetailSearchResult(TimesheetDetailSearchFilter filter) : base(filter)
        {
        }

        [JsonProperty("user")]
        public UserDTO User { get; set; }
    }

    public class TimesheetDetailSearch : QueryBase
    {
        public TimesheetDetailSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public TimesheetDetailSearchResult GetDataByFilter(TimesheetDetailSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "User_FK";
            TimesheetDetailQuery timesheetDetailQuery = new TimesheetDetailQuery(this.Db);

            var filteredRecords =
                timesheetDetailQuery.GetQuery(filter.User_FK)
                .Where(timesheetDetail =>
                    timesheetDetail.BulanName.Contains(filter.Keyword)
                    )
                    .AsQueryable();

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new TimesheetDetailSearchResult(filter);
            
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = timesheetDetailQuery.GetTotalRecords(filter.User_FK);
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;
            searchResult.User = new UserQuery(Db).GetByPrimaryKey(filter.User_FK);

            return searchResult;
        }
    }
}
