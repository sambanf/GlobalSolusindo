using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultSearchFilter : SearchFilter
    {
    }

    public class SOWTrackResultQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWTrackResultQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWTrackResultQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWTrackResultDTO> GetQuery()
        {
            var query = from sowTrackResult in Db.tblT_SOWTrackResult
                        where
                        sowTrackResult.Status_FK != deleted
                        select new SOWTrackResultDTO
                        {
                            SOWTrackResult_PK = sowTrackResult.SOWTrackResult_PK,
                            CheckIn_FK = sowTrackResult.CheckIn_FK,
                            RouteResult = sowTrackResult.Route,
                            SOWTrack_FK = sowTrackResult.SOWTrack_FK,
                            CreatedBy = sowTrackResult.CreatedBy,
                            CreatedDate = sowTrackResult.CreatedDate,
                            UpdatedBy = sowTrackResult.UpdatedBy,
                            UpdatedDate = sowTrackResult.UpdatedDate,
                            Status_FK = sowTrackResult.Status_FK
                        };

            return query;
        }

        public SearchResult<SOWTrackResultDTO> GetDataByFilter(SOWTrackResultSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWTrackResult_PK";

            var filteredRecords =
                 GetQuery();

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWTrackResultDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public SOWTrackResultDTO GetByPrimaryKey(int primaryKey)
        {
            SOWTrackResultDTO record = GetQuery().FirstOrDefault(sowTrackResult => sowTrackResult.SOWTrackResult_PK == primaryKey);
            return record;
        }

        public List<SOWTrackResultDTO> GetByCheckinFK(int checkinFk)
        {
            var records = GetQuery().Where(sowTrackResult => sowTrackResult.CheckIn_FK == checkinFk).ToList();
            return records;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWTrackResult_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWTrackResult WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWTrackResult.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
