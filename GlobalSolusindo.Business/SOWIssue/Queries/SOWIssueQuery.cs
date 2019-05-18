using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWIssue.Queries
{
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
