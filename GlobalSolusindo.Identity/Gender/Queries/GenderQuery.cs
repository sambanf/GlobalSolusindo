using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.Gender.Queries
{
    public class GenderQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public GenderQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public GenderQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<GenderDTO> GetQuery()
        {
            var query = from Gender in Db.tblM_Gender
                        select new GenderDTO
                        {
                            Gender_PK = Gender.Gender_PK,
                            Name = Gender.Name
                        };

            return query;
        }

        public GenderDTO GetByName(string name)
        {
            return GetQuery().FirstOrDefault(x => x.Name == name);
        }

        public GenderDTO GetByPrimaryKey(int primaryKey)
        {
            GenderDTO record = GetQuery().FirstOrDefault(Gender => Gender.Gender_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Gender_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Gender WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Gender.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
