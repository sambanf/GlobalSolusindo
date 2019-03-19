using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.Position.Queries
{
    public class PositionQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public PositionQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public PositionQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<PositionDTO> GetQuery()
        {
            var query = from position in Db.tblM_Position
                        where
                        position.Status_FK != deleted
                        select new PositionDTO
                        {
                            Position_PK = position.Position_PK,
                            Name = position.Name,
                            Description = position.Description,
                            CreatedBy = position.CreatedBy,
                            CreatedDate = position.CreatedDate,
                            UpdatedBy = position.UpdatedBy,
                            UpdatedDate = position.UpdatedDate,
                            Status_FK = position.Status_FK
                        };

            return query;
        }

        public PositionDTO GetByPrimaryKey(int primaryKey)
        {
            PositionDTO record = GetQuery().FirstOrDefault(position => position.Position_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Position_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Position WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Position.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
