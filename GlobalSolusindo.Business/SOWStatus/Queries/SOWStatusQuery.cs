using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWStatus.Queries
{
    public class SOWStatusQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWStatusQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWStatusQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWStatusDTO> GetQuery()
        {
            var query = from sowStatus in Db.tblT_SOWStatus
                        where
                        sowStatus.Status_FK != deleted
                        select new SOWStatusDTO
                        {
                            SOWStatus_PK = sowStatus.SOWStatus_PK,
                            Title = sowStatus.Title,
                            CreatedBy = sowStatus.CreatedBy,
                            CreatedDate = sowStatus.CreatedDate,
                            UpdatedBy = sowStatus.UpdatedBy,
                            UpdatedDate = sowStatus.UpdatedDate,
                            Status_FK = sowStatus.Status_FK
                        };

            return query;
        }

        public SOWStatusDTO GetByPrimaryKey(int? primaryKey)
        {
            SOWStatusDTO record = GetQuery().FirstOrDefault(sowStatus => sowStatus.SOWStatus_PK == (int)primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWStatus_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWStatus WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWStatus.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
