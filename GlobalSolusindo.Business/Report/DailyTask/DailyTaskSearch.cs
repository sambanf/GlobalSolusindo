using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.DailyTask.Queries
{
    public class DailyTaskSearchFilter : SearchFilter
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        public tblM_User User { get; set; }
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
                dailyTaskQuery.GetQuery(filter.Keyword).AsQueryable();


            var jabatan = GetJabatan(filter.User);
            if (jabatan == null)
            {
                filteredRecords = dailyTaskQuery.GetQuery(filter.Keyword).AsQueryable();
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
                        filteredRecords = dailyTaskQuery.GetQuery(filter.Keyword).AsQueryable();
                    }
                }
            }

            if (filter.User_FK > 0)
            {
                filteredRecords = filteredRecords
                    .Where(x => x.User_FK == filter.User_FK);
            }

            if (!string.IsNullOrEmpty(filter.Status) && filter.Status != "ALL")
            {
                filteredRecords = filteredRecords
                    .Where(x => x.Status == filter.Status);
            }

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
