using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using Newtonsoft.Json;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWIssue.Queries
{
    public class SOWIssueSearchFilter : SearchFilter
    {
        private int length;
        private int page;

        [JsonProperty("length")]
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
                PageSize = value;
            }
        }

        [JsonProperty("page")]
        public int Page
        {
            get
            {
                return page;
            }
            set
            {
                page = value;
                PageIndex = value;
            }
        }

        [JsonProperty("taskID")]
        public int? TaskID { get; set; }
    }

    public class SOWIssueQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWIssueQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWIssueQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWIssueDTO> GetQuery()
        {
            var query = from sowIssue in Db.tblT_SOWIssue
                        join sowAssign in Db.tblT_SOWAssign on sowIssue.SOWAssign_FK equals sowAssign.SOWAssign_PK into sowAssignTemp
                        from sowAssign in sowAssignTemp.DefaultIfEmpty()
                        join issueType in Db.tblM_IssueType on sowIssue.IssueType_FK equals issueType.IssueType_PK into issueTypeTemp
                        from issueType in issueTypeTemp.DefaultIfEmpty()
                        where
                        sowIssue.Status_FK != deleted
                        select new SOWIssueDTO
                        {
                            SOWIssue_PK = sowIssue.SOWIssue_PK,
                            SOWAssign_FK = sowIssue.SOWAssign_FK,
                            IssueType_FK = sowIssue.IssueType_FK,
                            Description = sowIssue.Description,
                            CreatedBy = sowIssue.CreatedBy,
                            CreatedDate = sowIssue.CreatedDate,
                            UpdatedBy = sowIssue.UpdatedBy,
                            UpdatedDate = sowIssue.UpdatedDate,
                            Status_FK = sowIssue.Status_FK
                        };

            return query;
        }

        public SOWIssueDTO GetByPrimaryKey(int primaryKey)
        {
            SOWIssueDTO record = GetQuery().FirstOrDefault(sowIssue => sowIssue.SOWIssue_PK == primaryKey);
            return record;
        }

        public SearchResult<SOWIssueDTO> Search(SOWIssueSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWIssue_PK";
            SOWIssueQuery sowIssueQuery = new SOWIssueQuery(this.Db);

            var filteredRecords =
                sowIssueQuery.GetQuery()
                .Where(sowIssue =>
                    sowIssue.Description.Contains(filter.Keyword));

            if (filter.TaskID == null || filter.TaskID <= 0)
            {
                throw new Kairos.KairosException("Task ID is required.");
            }

            filteredRecords = filteredRecords.Where(x => x.SOWAssign_FK == filter.TaskID);

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWIssueDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowIssueQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWIssue_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWIssue WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWIssue.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
