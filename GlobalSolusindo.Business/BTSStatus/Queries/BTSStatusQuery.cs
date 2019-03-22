using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.BTSStatus.Queries
{
    public class BTSStatusQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public BTSStatusQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public BTSStatusQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<BTSStatusDTO> GetQuery()
        {
            var query = from btsStatus in Db.tblM_BTSStatus
                        where
                        btsStatus.Status_FK != deleted
                        select new BTSStatusDTO
                        {
                            BTSStatus_PK = btsStatus.BTSStatus_PK,
                            Title = btsStatus.Title,
                            CreatedBy = btsStatus.CreatedBy,
                            CreatedDate = btsStatus.CreatedDate,
                            UpdatedBy = btsStatus.UpdatedBy,
                            UpdatedDate = btsStatus.UpdatedDate,
                            Status_FK = btsStatus.Status_FK
                        };

            return query;
        }

        public BTSStatusDTO GetByPrimaryKey(int? primaryKey)
        {
            BTSStatusDTO record = GetQuery().FirstOrDefault(btsStatus => btsStatus.BTSStatus_PK == (int)primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.BTSStatus_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_BTSStatus WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_BTSStatus.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
