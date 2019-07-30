using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.LogActivity.Queries
{
    public class LogActivityQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public LogActivityQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public LogActivityQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<LogActivityDTO> GetQuery()
        {
            var query = from logActivity in Db.tblT_LogActivity
                        select new LogActivityDTO
                        {
                            LogActivity_PK = logActivity.LogActivity_PK,
                            UserName = logActivity.UserName,
                            IPAddress = logActivity.IPAddress,
                            ActivityDateTime = logActivity.ActivityDateTime,
                            ActivityName = logActivity.ActivityName,
                            ActivityKey = logActivity.ActivityKey,
                            ActivityResult = logActivity.ActivityResult,
                            ActivityDescription = logActivity.ActivityDescription,
                            ValueOld = logActivity.ValueOld,
                            ValueNew = logActivity.ValueNew
                        };

            return query;
        }

        public LogActivityDTO GetByPrimaryKey(int primaryKey)
        {
            LogActivityDTO record = GetQuery().FirstOrDefault(logActivity => logActivity.LogActivity_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.LogActivity_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_LogActivity WHERE {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_LogActivity.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
