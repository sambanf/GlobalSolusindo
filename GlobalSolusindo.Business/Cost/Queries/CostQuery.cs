using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Cost.Queries
{
    public class CostQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public CostQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public CostQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<CostDTO> GetQuery()
        {
            var query = from cost in Db.tblT_Cost
                        join costCategory in Db.tblM_CostKategori on cost.KategoriCost_FK equals costCategory.CostKategori_PK into costCategoryTemp
                        from costCategory in costCategoryTemp.DefaultIfEmpty()
                        join sow in Db.tblT_SOW on cost.SOW_FK equals sow.SOW_PK into sowTemp
                        from sow in sowTemp.DefaultIfEmpty()
                        where
                        cost.Status_FK != deleted
                        select new CostDTO
                        {
                            Cost_PK = cost.Cost_PK,
                            KategoriCost_FK = cost.KategoriCost_FK.Value,
                            KategoriCostTitle = costCategory.Title,
                            SOW_FK = cost.SOW_FK.Value,
                            SOWName = sow.SOWName,
                            Tanggal = cost.Tanggal.Value,
                            Nominal = cost.Nominal,
                            Deskripsi = cost.Deskripsi,
                            CreatedBy = cost.CreatedBy,
                            CreatedDate = cost.CreatedDate,
                            UpdatedBy = cost.UpdatedBy,
                            UpdatedDate = cost.UpdatedDate,
                            Status_FK = cost.Status_FK
                        };

            return query;
        }

        public CostDTO GetByPrimaryKey(int primaryKey)
        {
            CostDTO record = GetQuery().FirstOrDefault(cost => cost.Cost_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Cost_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_Cost WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_Cost.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
