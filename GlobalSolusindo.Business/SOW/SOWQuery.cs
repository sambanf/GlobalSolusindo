using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;

namespace GlobalSolusindo.Business.SOW
{

    public class SOWSearchFilter : SearchFilter
    {
        public tblM_User User { get; set; }
    }

    public class SOWQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWDTO> GetQuery()
        {
            var query = from sow in Db.tblT_SOW
                        join bts in Db.tblM_BTS on sow.BTS_FK equals bts.BTS_PK into btsTemp
                        from bts in btsTemp.DefaultIfEmpty()
                        join project in Db.tblM_Project on sow.Project_FK equals project.Project_PK into projectTemp
                        from project in projectTemp.DefaultIfEmpty()
                        join sowStatus in Db.tblT_SOWStatus on sow.StatusSOW_FK equals sowStatus.SOWStatus_PK into sowStatusTemp
                        from sowStatus in sowStatusTemp.DefaultIfEmpty()
                        where
                        sow.Status_FK != deleted
                        select new SOWDTO
                        {
                            SOW_PK = sow.SOW_PK,
                            SOWName = sow.SOWName,
                            BTS_FK = sow.BTS_FK.Value,
                            BTSName = bts.Name,
                            Project_FK = sow.Project_FK.Value,
                            DUID = sow.DUID,
                            Technology_FK = sow.Technology_FK,
                            TglMulai = sow.TglMulai,
                            TglSelesai = sow.TglSelesai,
                            StatusSOW_FK = sow.StatusSOW_FK,
                            SOWStatusTitle = sowStatus.Title,
                            CreatedBy = sow.CreatedBy,
                            CreatedDate = sow.CreatedDate,
                            UpdatedBy = sow.UpdatedBy,
                            UpdatedDate = sow.UpdatedDate,
                            Status_FK = sow.Status_FK
                        };

            return query;
        }

        public IQueryable<SOWDTOViewAll> GetQueryforExcel()
        {

            var query = from sowpo in Db.vw_SOWViewAll
                        select new SOWDTOViewAll
                        {
                            PLOUniq = sowpo.SiteIDPO + " - " + sowpo.SiteNamePO + " - " + sowpo.SOW,
                            PMOUniq = sowpo.PMOUniq,
                            DUID = sowpo.DUID,
                            SiteIDPO = sowpo.SiteIDPO,
                            SiteNamePO = sowpo.SiteNamePO,
                            System = sowpo.System,
                            SOW = sowpo.SOW,
                            Long = sowpo.Long,
                            lat = sowpo.Lat,
                            CODate = sowpo.CODate,
                            SSVDate = sowpo.SSVDate,
                            SSODate = sowpo.SSODate,
                            LVDate = sowpo.LVDate,
                            AcceptedDate = sowpo.AcceptedDate,
                            Region = sowpo.Region,
                            PLOQC = sowpo.RNO,
                            LinkReport = sowpo.LinkRNO,
                            RF = sowpo.RF,
                            LinkReport2 = sowpo.LinkRF,
                            Rigger = sowpo.Rigger,
                            LinkAOR = sowpo.LinkRigger,
                            DT = sowpo.DT,
                            LinkSSV = sowpo.SSVLink,
                            LinkSSO = sowpo.SSOLink,
                            NOPO = sowpo.NoPo,
                            Value = sowpo.Value.ToString(),
                            Esarsubmit = sowpo.EsarSubmit1st,
                            VsSubmit = sowpo.VsSubmit1st,
                            Quantity = sowpo.Quantity1st.ToString(),
                            InvoiceSubmit = sowpo.InvoiceSubmit1st,
                            PaidDate = sowpo.PaidDate1st,
                            Esarstatus1 = sowpo.EsarStatus1st.ToString(),
                            Esarsubmit2 = sowpo.EsarSubmit2nd,
                            VsSubmit2 = sowpo.VsSubmit2nd,
                            Quantity2 = sowpo.Quantity2nd.ToString(),
                            InvoiceSubmit2 = sowpo.InvoiceSubmit2nd,
                            PaidDate2 = sowpo.PaidDate2nd,
                            Esarstatus2 = sowpo.EsarStatus2nd.ToString(),
                            remarkpo = sowpo.Remarks,
                        };

            return query;
        }

        public SOWDTO GetByPrimaryKey(int primaryKey)
        {
            SOWDTO record = GetQuery().FirstOrDefault(sow => sow.SOW_PK == primaryKey);
            if (record != null)
            {
                var sowAssigns = new SOWAssignQuery(this.Db).GetWithSP_BySOW_FK(record.SOW_PK);
                record.SOWAssigns = sowAssigns.OrderByDescending(sowAssign => sowAssign.SOWAssign_PK).ToList();

                record.SOWTracks = new SOWTrackQuery(Db).GetBySOWFK(primaryKey);

                if (record.SOWTracks != null)
                {
                    record.SOWTrackResults = new System.Collections.Generic.List<SOWTrackResult.SOWTrackResultDTO>();
                    foreach (var sowTrack in record.SOWTracks)
                    {
                        var sowTrackResult = new SOWTrackResult.SOWTrackResultQuery(Db).GetBySowTrackFk(sowTrack.SOWTrack_PK);
                        if (sowTrackResult == null)
                            continue;

                        record.SOWTrackResults.Add(sowTrackResult);
                    }
                }
            }
            return record;
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

        public SearchResult<SOWDTO> Search(SOWSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
            {
                filter.SortName = "TglMulai";
                filter.SortDir = "desc";
            }
            SOWQuery sowQuery = new SOWQuery(this.Db);

            var filteredRecords =
                sowQuery.GetQuery()
                .Where(sow =>
                    sow.SOWName.Contains(filter.Keyword)
                    || sow.BTSName.Contains(filter.Keyword)
                    );


            var jabatan = GetJabatan(filter.User);
            if (jabatan == null)
            {
                filteredRecords = new List<SOWDTO>().AsQueryable();
            }
            else
            {
                if (!JabatanIsHRDorEssarorBOD(jabatan))
                {
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
                        filteredRecords = new List<SOWDTO>().AsQueryable();
                    }
                }
            }

            var displayedRecords = filteredRecords.
             SortBy(filter.SortName, filter.SortDir)
             .Skip(filter.Skip)
             .Take(filter.PageSize)
             .ToList();


            var searchResult = new SearchResult<SOWDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }


        public IQueryable<SOWNameDTO> GetSOWName()
        {
            var query = from sowname in Db.tblM_SOWName
                        select new SOWNameDTO
                        {
                            id = sowname.SOWName_PK,
                            SOWName = sowname.Title
                        };

            return query;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOW_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOW WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOW.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
