using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.KategoriJabatan.Queries
{
    public class KategoriJabatanQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public KategoriJabatanQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public KategoriJabatanQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<KategoriJabatanDTO> GetQuery()
        {
            var query = from kategoriJabatan in Db.tblM_KategoriJabatan
                        where
                        kategoriJabatan.Status_FK != deleted
                        select new KategoriJabatanDTO
                        {
                            KategoriJabatan_PK = kategoriJabatan.KategoriJabatan_PK,
                            Title = kategoriJabatan.Title,
                            CreatedBy = kategoriJabatan.CreatedBy,
                            CreatedDate = kategoriJabatan.CreatedDate,
                            UpdatedBy = kategoriJabatan.UpdatedBy,
                            UpdatedDate = kategoriJabatan.UpdatedDate,
                            Status_FK = kategoriJabatan.Status_FK
                        };

            return query;
        }

        public KategoriJabatanDTO GetByTitle(string title)
        {
            return GetQuery().FirstOrDefault(x => x.Title == title);
        }

        public KategoriJabatanDTO GetByPrimaryKey(int primaryKey)
        {
            KategoriJabatanDTO record = GetQuery().FirstOrDefault(kategoriJabatan => kategoriJabatan.KategoriJabatan_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.KategoriJabatan_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_KategoriJabatan WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_KategoriJabatan.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
