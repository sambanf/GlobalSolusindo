using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCutiStatus.Queries
{
    public class IzinCutiStatusQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public IzinCutiStatusQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public IzinCutiStatusQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<IzinCutiStatusDTO> GetQuery()
        {
            var query = from izinCutiStatus in Db.tblM_IzinCutiStatus
                        where
                        izinCutiStatus.Status_FK != deleted
                        select new IzinCutiStatusDTO
                        {
                            IzinCutiStatus_PK = izinCutiStatus.IzinCutiStatus_PK,
                            Title = izinCutiStatus.Title,
                            CreatedBy = izinCutiStatus.CreatedBy,
                            CreatedDate = izinCutiStatus.CreatedDate,
                            UpdatedBy = izinCutiStatus.UpdatedBy,
                            UpdatedDate = izinCutiStatus.UpdatedDate,
                            Status_FK = izinCutiStatus.Status_FK
                        };

            return query;
        }

        public IzinCutiStatusDTO GetByPrimaryKey(int? primaryKey)
        {
            IzinCutiStatusDTO record = GetQuery().FirstOrDefault(izinCutiStatus => izinCutiStatus.IzinCutiStatus_PK == (int)primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.IzinCutiStatus_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_IzinCutiStatus WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_IzinCutiStatus.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
