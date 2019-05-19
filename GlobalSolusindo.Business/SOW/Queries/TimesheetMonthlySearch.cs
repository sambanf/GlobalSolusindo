using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.TimesheetMonthly.Queries
{
    public class TimesheetMonthlySearchFilter : SearchFilter
    {

        [JsonProperty("userID")]
        public int UserID { get; set; }

        [JsonProperty("month")]
        public int Month { get; set; }

        [JsonProperty("year")]
        public int Year { get; set; }
    }

    public class TimesheetMonthly
    {
        [JsonProperty("date")]
        public DateTime? Date { get; set; }

        [JsonProperty("first_checkin")]
        public string FirstCheckIn { get; set; }

        [JsonProperty("first_location")]
        public string FirstLocation { get; set; }

        [JsonProperty("last_checkout")]
        public string LastCheckOut { get; set; }

        [JsonProperty("last_location")]
        public string LastLocation { get; set; }

        [JsonProperty("isDiffDay")]
        public bool? IsDiffDay { get; set; }

        [JsonProperty("total_task")]
        public int? TotalTask { get; set; }
    }

    public class TimesheetMonthlySearch : QueryBase
    {
        public TimesheetMonthlySearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<DateTime?> GetDataByFilter(TimesheetMonthlySearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserID";

            var filteredRecords = Db.GetTimesheetMonthly(filter.UserID, filter.Month, filter.Year).ToList();
            var displayedRecords = filteredRecords;

            var searchResult = new SearchResult<DateTime?>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = filteredRecords.Count();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public SearchResult<TimesheetMonthly> GetDataByFilterV2(TimesheetMonthlySearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserID";

            var filteredRecords = Db.GetTimesheetMonthlyV2(filter.UserID, filter.Month, filter.Year).Select(x => new TimesheetMonthly
            {
                Date = x.Date,
                FirstCheckIn = x.FirstCheckIn.Value.ToString("HH:mm"),
                FirstLocation = x.FirstLocation,
                LastCheckOut = x.LastCheckOut == null ? null : x.LastCheckOut.Value.ToString("HH:mm"),
                LastLocation = x.LastLocation,
                IsDiffDay = x.IsDiffDay,
                TotalTask = x.TotalTask 
            }).ToList();
            var displayedRecords = filteredRecords;

            var searchResult = new SearchResult<TimesheetMonthly>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = filteredRecords.Count();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
