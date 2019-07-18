using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.MaritalStatus.Queries
{
    public class MaritalStatusQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public MaritalStatusQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public MaritalStatusQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<MaritalStatusDTO> GetQuery()
        {
            var query = from MaritalStatus in Db.tblM_MaritalStatus
                        select new MaritalStatusDTO
                        {
                            MaritalStatus_PK = MaritalStatus.MaritalPK,
                            Name = MaritalStatus.Name
                        };

            return query;
        }

        public MaritalStatusDTO GetByName(string name)
        {
            return GetQuery().FirstOrDefault(x => x.Name == name);
        }

        public MaritalStatusDTO GetByPrimaryKey(int primaryKey)
        {
            MaritalStatusDTO record = GetQuery().FirstOrDefault(MaritalStatus => MaritalStatus.MaritalStatus_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.MaritalStatus_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_MaritalStatus WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_MaritalStatus.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
