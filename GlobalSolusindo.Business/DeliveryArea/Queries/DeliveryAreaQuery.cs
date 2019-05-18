using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.DeliveryArea.Queries
{
    public class DeliveryAreaQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public DeliveryAreaQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public DeliveryAreaQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<DeliveryAreaDTO> GetQuery()
        {
            var query = from deliveryArea in Db.tblM_DeliveryArea
                        where
                        deliveryArea.Status_FK != deleted
                        select new DeliveryAreaDTO
                        {
                            DeliveryArea_PK = deliveryArea.DeliveryArea_PK,
                            Title = deliveryArea.Title,
                            CreatedBy = deliveryArea.CreatedBy,
                            CreatedDate = deliveryArea.CreatedDate,
                            UpdatedBy = deliveryArea.UpdatedBy,
                            UpdatedDate = deliveryArea.UpdatedDate,
                            Status_FK = deliveryArea.Status_FK
                        };

            return query;
        }

        public DeliveryAreaDTO GetByPrimaryKey(int primaryKey)
        {
            DeliveryAreaDTO record = GetQuery().FirstOrDefault(deliveryArea => deliveryArea.DeliveryArea_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.DeliveryArea_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_DeliveryArea WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_DeliveryArea.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
