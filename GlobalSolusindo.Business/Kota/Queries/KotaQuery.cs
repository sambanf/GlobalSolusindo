using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Kota.Queries
{
    public class KotaQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public KotaQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public KotaQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<KotaDTO> GetQuery()
        {
            var query = from kota in Db.tblM_Kota
                        where
                        kota.Status_FK != deleted
                        select new KotaDTO
                        {
                            Kota_PK = kota.Kota_PK,
                            Title = kota.Title,
                            CreatedBy = kota.CreatedBy,
                            CreatedDate = kota.CreatedDate,
                            UpdatedBy = kota.UpdatedBy,
                            UpdatedDate = kota.UpdatedDate,
                            Status_FK = kota.Status_FK
                        };

            return query;
        }

        public KotaDTO GetByPrimaryKey(int primaryKey)
        {
            KotaDTO record = GetQuery().FirstOrDefault(kota => kota.Kota_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Kota_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Kota WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Kota.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
