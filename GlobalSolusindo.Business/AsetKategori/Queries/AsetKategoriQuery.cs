using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.AsetKategori.Queries
{
    public class AsetKategoriQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public AsetKategoriQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public AsetKategoriQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<AsetKategoriDTO> GetQuery()
        {
            var query = from asetKategori in Db.tblM_AsetKategori
                        where
                        asetKategori.Status_FK != deleted
                        select new AsetKategoriDTO
                        {
                            AsetKategori_PK = asetKategori.AsetKategori_PK,
                            Title = asetKategori.Title,
                            CreatedBy = asetKategori.CreatedBy,
                            CreatedDate = asetKategori.CreatedDate,
                            UpdatedBy = asetKategori.UpdatedBy,
                            UpdatedDate = asetKategori.UpdatedDate,
                            Status_FK = asetKategori.Status_FK
                        };

            return query;
        }

        public AsetKategoriDTO GetByPrimaryKey(int primaryKey)
        {
            AsetKategoriDTO record = GetQuery().FirstOrDefault(asetKategori => asetKategori.AsetKategori_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.AsetKategori_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_AsetKategori WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_AsetKategori.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
