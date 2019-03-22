using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Area.Queries
{
    public class AreaQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public AreaQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public AreaQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<AreaDTO> GetQuery()
        {
            var query = from area in Db.tblM_Area
                        where
                        area.Status_FK != deleted
                        select new AreaDTO
                        {
                            Area_PK = area.Area_PK,
                            Title = area.Title,
                            CreatedBy = area.CreatedBy,
                            CreatedDate = area.CreatedDate,
                            UpdatedBy = area.UpdatedBy,
                            UpdatedDate = area.UpdatedDate,
                            Status_FK = area.Status_FK
                        };

            return query;
        }

        public AreaDTO GetByPrimaryKey(int primaryKey)
        {
            AreaDTO record = GetQuery().FirstOrDefault(area => area.Area_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Area_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Area WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Area.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
