using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.DailyTask.Queries
{
    public class DailyTaskSearchFilter : SearchFilter
    {
        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }
    }

    public class DailyTaskSearch : QueryBase
    {
        public DailyTaskSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<DailyTaskDTO> GetDataByFilter(DailyTaskSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "DailyTask_PK";
            DailyTaskQuery dailyTaskQuery = new DailyTaskQuery(this.Db);

            var filteredRecords =
                dailyTaskQuery.GetQuery()
                .Where(dailyTask =>
                    dailyTask.UserId.Contains(filter.Keyword)
                    || dailyTask.UserName.Contains(filter.Keyword) 
                    )
                    .AsQueryable();

            //if (!string.IsNullOrEmpty(filter.UserId))
            //{
            //    filteredRecords = filteredRecords
            //        .Where(x =>
            //            x.UserId == filter.UserId
            //            );
            //}

            //if (!string.IsNullOrEmpty(filter.UserName))
            //{
            //    filteredRecords = filteredRecords
            //        .Where(x =>
            //            x.UserName == filter.UserName
            //            );
            //}

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<DailyTaskDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = dailyTaskQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
