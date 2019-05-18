using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Cabang.Queries
{
    public class CabangQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public CabangQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public CabangQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<CabangDTO> GetQuery()
        {
            var query = from cabang in Db.tblM_Cabang
                        where
                        cabang.Status_FK != deleted
                        select new CabangDTO
                        {
                            Cabang_PK = cabang.Cabang_PK,
                            Title = cabang.Title,
                            CreatedBy = cabang.CreatedBy,
                            CreatedDate = cabang.CreatedDate,
                            UpdatedBy = cabang.UpdatedBy,
                            UpdatedDate = cabang.UpdatedDate,
                            Status_FK = cabang.Status_FK
                        };

            return query;
        }

        public CabangDTO GetByPrimaryKey(int primaryKey)
        {
            CabangDTO record = GetQuery().FirstOrDefault(cabang => cabang.Cabang_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Cabang_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Cabang WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Cabang.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
