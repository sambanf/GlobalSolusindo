using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.TimesheetDaily.Queries
{
    public class TimesheetDailySearchFilter : SearchFilter
    {

        [JsonProperty("userID")]
        public int UserID { get; set; }

        [JsonProperty("month")]
        public int Month { get; set; }

        [JsonProperty("year")]
        public int Year { get; set; }

        [JsonProperty("day")]
        public int Day { get; set; }
    }

    public class TimesheetDailyDTO
    {
        [JsonProperty("bts")]
        public string BTS { get; set; }

        [JsonProperty("task")]
        public string Task { get; set; }

        [JsonProperty("time")]
        public string Time { get; set; }

        [JsonProperty("duration")]
        public int? Duration { get; set; }

        [JsonProperty("isDiffDay")]
        public bool? IsDiffDay { get; set; }

    }

    public class TimesheetDailySearch : QueryBase
    {
        public TimesheetDailySearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<TimesheetDailyDTO> GetDataByFilter(TimesheetDailySearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserID";

            var filteredRecords = Db.GetTimesheetDaily(filter.UserID, filter.Month, filter.Year, filter.Day).Select(x => new TimesheetDailyDTO
            {
                BTS = x.Name,
                Task = x.Technology,
                Time = x.Time,
                Duration = x.Duration,
                IsDiffDay = x.IsDiffDay

            })
            .ToList();

            var displayedRecords = filteredRecords;

            var searchResult = new SearchResult<TimesheetDailyDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = filteredRecords.Count();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
