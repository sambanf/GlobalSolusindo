using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.IssueType.Queries
{
    public class IssueTypeQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public IssueTypeQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public IssueTypeQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<IssueTypeDTO> GetQuery()
        {
            var query = from issueType in Db.tblM_IssueType
                        where
                        issueType.Status_FK != deleted
                        select new IssueTypeDTO
                        {
                            IssueType_PK = issueType.IssueType_PK,
                            Title = issueType.Title,
                            CreatedBy = issueType.CreatedBy,
                            CreatedDate = issueType.CreatedDate,
                            UpdatedBy = issueType.UpdatedBy,
                            UpdatedDate = issueType.UpdatedDate,
                            Status_FK = issueType.Status_FK
                        };

            return query;
        }

        public IssueTypeDTO GetByPrimaryKey(int primaryKey)
        {
            IssueTypeDTO record = GetQuery().FirstOrDefault(issueType => issueType.IssueType_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.IssueType_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_IssueType WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_IssueType.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
