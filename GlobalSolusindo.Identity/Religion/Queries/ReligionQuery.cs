using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.Religion.Queries
{
    public class ReligionQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public ReligionQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public ReligionQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<ReligionDTO> GetQuery()
        {
            var query = from Religion in Db.tblM_Religion
                        select new ReligionDTO
                        {
                            ReligionPK = Religion.ReligionPK,
                            Name = Religion.Name
                        };

            return query;
        }

        public ReligionDTO GetByName(string name)
        {
            return GetQuery().FirstOrDefault(x => x.Name == name);
        }

        public ReligionDTO GetByPrimaryKey(int primaryKey)
        {
            ReligionDTO record = GetQuery().FirstOrDefault(Religion => Religion.ReligionPK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.ReligionPK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Religion WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Religion.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
