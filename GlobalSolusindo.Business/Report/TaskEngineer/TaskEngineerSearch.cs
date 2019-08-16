using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using GlobalSolusindo.Business.Report.TaskEngineer;

namespace GlobalSolusindo.Business.TaskEngineer.Queries
{
    public enum TaskEngineerTimeFilter
    {
        JangkaWaktu = 1,
        Periode = 2
    }

    public class TaskEngineerSearchFilter : SearchFilter
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("bts_fk")]
        public int BTS_FK { get; set; }

        [JsonProperty("tglMulai")]
        public DateTime? TglMulai { get; set; }

        [JsonProperty("tglSelesai")]
        public DateTime? TglSelesai { get; set; }

        [JsonProperty("periode")]
        public DateTime Periode { get; set; }

        [JsonProperty("timeFilter")]
        public TaskEngineerTimeFilter TimeFilter { get; set; }

        public tblM_User User { get; set; }
    }

    //public class PeriodDTO : DTO
    //{
    //    [JsonProperty("value")]
    //    public DateTime? value { get; set; }

    //    [JsonProperty("name")]
    //    public string name { get; set; }
    //}


    public class TaskEngineerSearch : QueryBase
    {
        public TaskEngineerSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<PeriodDTO> GetPeriod(TaskEngineerSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "value";
            TaskEngineerQuery taskEngineerQuery = new TaskEngineerQuery(this.Db);

            var filteredRecords =
                taskEngineerQuery.GetPeriod();
            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<PeriodDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = taskEngineerQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
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

            if (filter.User_FK > 0)
            {
                filteredRecords = filteredRecords
                    .Where(x => x.User_FK == filter.User_FK);
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
                                x.AssignTglMulai >= filter.TglMulai && x.AssignTglMulai <= filter.TglSelesai
                                );
                    }
                    break;
                case TaskEngineerTimeFilter.Periode:
                    if (filter.Periode != null)
                    {
                        DateTime NewDate = filter.Periode;
                        DateTime EndDate = filter.Periode.AddMonths(1).AddDays(-1);
                        
                        filteredRecords = filteredRecords
                            .Where(x =>
                                x.AssignTglMulai >= NewDate && x.AssignTglMulai <= EndDate
                                );
                    }
                    break;
                default:
                    break;
            }


            var jabatan = GetJabatan(filter.User);
            if (jabatan == null)
            {
                filteredRecords =
                taskEngineerQuery.GetQuery()
                .Where(taskEngineer =>
                    taskEngineer.AssignNumber.Contains(filter.Keyword)
                    || taskEngineer.UserId.Contains(filter.Keyword)
                    || taskEngineer.UserName.Contains(filter.Keyword)
                    || taskEngineer.KategoriJabatanTitle.Contains(filter.Keyword)
                    || taskEngineer.BTSName.Contains(filter.Keyword)
                    );
            }
            else
            {
                if (!JabatanIsHRDorEssarorBOD(jabatan))
                {
                    if (JabatanIsProjectManager(jabatan) || JabatanIsTeamLead(jabatan) || JabatanIsDTCoor(jabatan))
                    {
                        var projectIds = GetProjectIds(jabatan, filter.User);
                        if (projectIds != null)
                        {
                            filteredRecords = filteredRecords.Where(x => projectIds.Contains(x.Project_FK));
                        }
                    }
                    else
                    {
                        filteredRecords =
                        taskEngineerQuery.GetQuery()
                        .Where(taskEngineer =>
                            taskEngineer.AssignNumber.Contains(filter.Keyword)
                            || taskEngineer.UserId.Contains(filter.Keyword)
                            || taskEngineer.UserName.Contains(filter.Keyword)
                            || taskEngineer.KategoriJabatanTitle.Contains(filter.Keyword)
                            || taskEngineer.BTSName.Contains(filter.Keyword)
                            );
                            }
                }
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

        private tblM_KategoriJabatan GetJabatan(tblM_User user)
        {
            var jabatan = Db.tblM_KategoriJabatan.Find(user.KategoriJabatan_FK);
            return jabatan;
        }

        private bool JabatanIsProjectManager(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("pm") ||
                jabatan.Title.ToLower().Contains("project manager");
        }

        private bool JabatanIsTeamLead(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("tl") ||
                jabatan.Title.ToLower().Contains("team lead");
        }

        private bool JabatanIsHRDorEssarorBOD(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("bod")
                || jabatan.Title.ToLower().Contains("hrd");
        }
        private bool JabatanIsDTCoor(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("dt coordinator");
        }
        public List<int> GetProjectIds(tblM_KategoriJabatan jabatan, tblM_User user)
        {
            if (JabatanIsTeamLead(jabatan))
            {
                var projectIds = Db.tblM_UserDetail
                    .Where(x => x.Project != null && x.UserDetail_PK == user.UserDetail_FK)
                    .Select(x => x.Project.Value)
                    .ToList();

                return projectIds;
            }

            if (JabatanIsProjectManager(jabatan))
            {
                var projectIds = Db.tblM_Project
                    .Where(x => x.User_FK == user.User_PK)
                    .Select(x => x.Project_PK)
                    .ToList();

                return projectIds;
            }
            if (JabatanIsDTCoor(jabatan))
            {
                var projectIds = Db.tblM_UserDetail
                    .Where(x => x.Project != null && x.UserDetail_PK == user.UserDetail_FK)
                    .Select(x => x.Project.Value)
                    .ToList();

                return projectIds;
            }
            return null;
        }
    }
}
