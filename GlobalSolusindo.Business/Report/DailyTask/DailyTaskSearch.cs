using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.DailyTask.Queries
{
    public class DailyTaskSearchFilter : SearchFilter
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

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

            if (filter.User_FK > 0)
            {
                filteredRecords = filteredRecords
                    .Where(x => x.User_FK == filter.User_FK);
            }

            if (!string.IsNullOrEmpty(filter.Status) && filter.Status != "ALL")
            {
                filteredRecords = filteredRecords
                    .Where(x => x.Status == filter.Status  );
            }

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
