using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.CostKategori.Queries
{
    public class CostKategoriQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public CostKategoriQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public CostKategoriQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<CostKategoriDTO> GetQuery()
        {
            var query = from costKategori in Db.tblM_CostKategori
                        where
                        costKategori.Status_FK != deleted
                        select new CostKategoriDTO
                        {
                            CostKategori_PK = costKategori.CostKategori_PK,
                            Title = costKategori.Title,
                            CreatedBy = costKategori.CreatedBy,
                            CreatedDate = costKategori.CreatedDate,
                            UpdatedBy = costKategori.UpdatedBy,
                            UpdatedDate = costKategori.UpdatedDate,
                            Status_FK = costKategori.Status_FK
                        };

            return query;
        }

        public CostKategoriDTO GetByPrimaryKey(int primaryKey)
        {
            CostKategoriDTO record = GetQuery().FirstOrDefault(costKategori => costKategori.CostKategori_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.CostKategori_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_CostKategori WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_CostKategori.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
