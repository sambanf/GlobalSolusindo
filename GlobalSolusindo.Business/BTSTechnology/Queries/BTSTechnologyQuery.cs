using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.BTSTechnology.Queries
{
    public class BTSTechnologyQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public BTSTechnologyQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public BTSTechnologyQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<BTSTechnologyDTO> GetQuery()
        {
            var query = from btsTechnology in Db.tblM_BTSTechnology
                        join bts in Db.tblM_BTS on btsTechnology.BTS_FK equals bts.BTS_PK
                        join technology in Db.tblM_Technology on btsTechnology.Technology_FK equals technology.Technology_PK
                        where
                        btsTechnology.Status_FK != deleted
                        select new BTSTechnologyDTO
                        {
                            BTSTechnology_PK = btsTechnology.BTSTechnology_PK,
                            Technology_FK = btsTechnology.Technology_FK,
                            BTSName = bts.Name,
                            BTS_FK = btsTechnology.BTS_FK,
                            TechnologyTitle = technology.Title,
                            CreatedBy = btsTechnology.CreatedBy,
                            CreatedDate = btsTechnology.CreatedDate,
                            UpdatedBy = btsTechnology.UpdatedBy,
                            UpdatedDate = btsTechnology.UpdatedDate,
                            Status_FK = btsTechnology.Status_FK
                        };

            return query;
        }

        public BTSTechnologyDTO GetByPrimaryKey(int primaryKey)
        {
            BTSTechnologyDTO record = GetQuery().FirstOrDefault(btsTechnology => btsTechnology.BTSTechnology_PK == primaryKey);
            return record;
        }

        public List<BTSTechnologyDTO> GetByBTSFK(int btsFK)
        {
            List<BTSTechnologyDTO> records = GetQuery().Where(btsTechnology => btsTechnology.BTS_FK == btsFK).ToList();
            return records;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.BTSTechnology_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_BTSTechnology WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_BTSTechnology.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
