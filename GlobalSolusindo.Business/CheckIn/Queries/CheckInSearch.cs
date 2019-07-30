using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.CheckIn.Queries
{
    public class CheckInSearchFilter : SearchFilter
    {
        [JsonProperty("userId")]
        public int UserId { get; set; }
    }

    public class TaskApprovalSearchFilter : SearchFilter
    {
        public tblM_User User { get; set; }
    }

    public class CheckInSearch : QueryBase
    {
        public CheckInSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CheckInDTO> GetDataByFilter(CheckInSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "CheckIn_PK";
            CheckInQuery checkInQuery = new CheckInQuery(this.Db);

            var unfilteredRecords = checkInQuery.GetQuery();
            var filteredRecords = unfilteredRecords;

            if (filter.UserId != 0)
            {
                filteredRecords = filteredRecords.Where(x => x.UserId == filter.UserId);
            }

            filteredRecords =
              filteredRecords
              .Where(checkIn =>
                  checkIn.SOWName.Contains(filter.Keyword)
                  || checkIn.UserName.Contains(filter.Keyword)
                  || checkIn.BTSName.Contains(filter.Keyword)
                  || checkIn.BTSAddress.Contains(filter.Keyword)
                  || checkIn.KategoriJabatanTitle.Contains(filter.Keyword)
                  );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CheckInDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = checkInQuery.GetTotalRecords();
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
            return jabatan.Title.ToLower().Contains("bod") ||
                jabatan.Title.ToLower().Contains("hrd")
                || jabatan.Title.ToLower().Contains("essar");
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
            return null;
        }
        public SearchResult<CheckInDTO> Search(TaskApprovalSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "CheckIn_PK";
            CheckInQuery checkInQuery = new CheckInQuery(this.Db);

            var unfilteredRecords = checkInQuery.GetQueryLatest();
            var filteredRecords = unfilteredRecords;

            //if (filter.UserId != 0)
            //{
            //    filteredRecords = filteredRecords.Where(x => x.UserId == filter.UserId);
            //}

            filteredRecords =
              filteredRecords
              .Where(checkIn =>
                  checkIn.SOWName.Contains(filter.Keyword)
                  || checkIn.UserName.Contains(filter.Keyword)
                  || checkIn.BTSName.Contains(filter.Keyword)
                  || checkIn.BTSAddress.Contains(filter.Keyword)
                  || checkIn.KategoriJabatanTitle.Contains(filter.Keyword)
                  );

            var jabatan = GetJabatan(filter.User);
            if (jabatan == null)
            {
                filteredRecords = new List<CheckInDTO>().AsQueryable();
            }
            else
            {
                //if (!JabatanIsHRDorEssarorBOD(jabatan))
                //{
                    if (JabatanIsProjectManager(jabatan) || JabatanIsTeamLead(jabatan))
                    {
                        var projectIds = GetProjectIds(jabatan, filter.User);
                        if (projectIds != null)
                        {
                            filteredRecords = filteredRecords.Where(x => projectIds.Contains(x.Project_FK));
                        }
                    }
                    else
                    {
                        filteredRecords = new List<CheckInDTO>().AsQueryable();
                    }
                //}
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CheckInDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = checkInQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
