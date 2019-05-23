using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.TaskEngineer.Queries
{
    public enum TaskEngineerTimeFilter
    {
        JangkaWaktu = 1,
        Periode = 2
    }

    public class TaskEngineerSearchFilter : SearchFilter
    {
        [JsonProperty("userId")]
        public string UserId { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("bts_fk")]
        public int BTS_FK { get; set; }

        [JsonProperty("tglMulai")]
        public DateTime? TglMulai { get; set; }

        [JsonProperty("tglSelesai")]
        public DateTime? TglSelesai { get; set; }

        [JsonProperty("periode")]
        public int Periode { get; set; }

        [JsonProperty("timeFilter")]
        public TaskEngineerTimeFilter TimeFilter { get; set; }
    }

    public class TaskEngineerSearch : QueryBase
    {
        public TaskEngineerSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<TaskEngineerDTO> GetDataByFilter(TaskEngineerSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "TaskEngineer_PK";
            TaskEngineerQuery taskEngineerQuery = new TaskEngineerQuery(this.Db);

            var filteredRecords =
                taskEngineerQuery.GetQuery()
                .Where(taskEngineer =>
                    taskEngineer.AssignNumber.Contains(filter.Keyword)
                    || taskEngineer.UserId.Contains(filter.Keyword)
                    || taskEngineer.UserName.Contains(filter.Keyword)
                    || taskEngineer.KategoriJabatanTitle.Contains(filter.Keyword)
                    || taskEngineer.BTSName.Contains(filter.Keyword)
                    );

            if (!string.IsNullOrEmpty(filter.UserId))
            {
                filteredRecords = filteredRecords
                    .Where(x =>
                        x.UserId == filter.UserId
                        );
            }

            if (!string.IsNullOrEmpty(filter.UserName))
            {
                filteredRecords = filteredRecords
                    .Where(x =>
                        x.UserName == filter.UserName
                        );
            }

            if (filter.BTS_FK != 0)
            {
                filteredRecords = filteredRecords
                    .Where(x => 
                        x.BTS_FK == filter.BTS_FK
                        );
            }

            switch (filter.TimeFilter)
            {
                case TaskEngineerTimeFilter.JangkaWaktu:
                    if (filter.TglMulai != null && filter.TglSelesai != null)
                    {
                        filteredRecords = filteredRecords
                            .Where(x =>
                                x.BTS_FK == filter.BTS_FK
                                );
                    }
                    break;
                case TaskEngineerTimeFilter.Periode:
                    if (filter.Periode != 0)
                    {
                        filteredRecords = filteredRecords
                            .Where(x => 
                                x.AssignTglMulai.Value.Date.Month >= filter.Periode && x.AssignTglSelesai.Value.Date.Month <= filter.Periode
                                );
                    }
                    break;
                default:
                    break;
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<TaskEngineerDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = taskEngineerQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
