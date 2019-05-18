using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultSearchFilter : SearchFilter
    {
    }

    public class SOWResultQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWResultQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWResultQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWResultDTO> GetQuery()
        {
            var query = from sowResult in Db.tblT_SOWResult
                        where
                        sowResult.Status_FK != deleted
                        select new SOWResultDTO
                        {
                            SOWResult_PK = sowResult.SOWResult_PK,
                            CheckIn_FK = sowResult.CheckIn_FK,
                            ApprovedBy = sowResult.ApprovedBy,
                            ApprovedDate = sowResult.ApprovedDate,
                            FileUrl = sowResult.FileUrl,
                            CreatedBy = sowResult.CreatedBy,
                            CreatedDate = sowResult.CreatedDate,
                            UpdatedBy = sowResult.UpdatedBy,
                            UpdatedDate = sowResult.UpdatedDate,
                            Status_FK = sowResult.Status_FK
                        };

            return query;
        }

        public SearchResult<SOWResultDTO> GetDataByFilter(SOWResultSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWResult_PK";

            var filteredRecords =
                 GetQuery()
                .Where(sowResult =>
                    sowResult.FileUrl.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWResultDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public SOWResultDTO GetByPrimaryKey(int primaryKey)
        {
            SOWResultDTO record = GetQuery().FirstOrDefault(sowResult => sowResult.SOWResult_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWResult_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWResult WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWResult.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
