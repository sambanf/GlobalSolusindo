using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.RoleGroup.Queries
{
    public class RoleGroupQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public RoleGroupQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public RoleGroupQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<RoleGroupDTO> GetQuery()
        {
            var query = from roleGroup in Db.tblM_RoleGroup
                        where
                        roleGroup.Status_FK != deleted
                        select new RoleGroupDTO
                        {
                            RoleGroup_PK = roleGroup.RoleGroup_PK,
                            Title = roleGroup.Title,
                            Description = roleGroup.Description,
                            CreatedBy = roleGroup.CreatedBy,
                            CreatedDate = roleGroup.CreatedDate,
                            UpdatedBy = roleGroup.UpdatedBy,
                            UpdatedDate = roleGroup.UpdatedDate,
                            Status_FK = roleGroup.Status_FK
                        };

            return query;
        }

        public RoleGroupDTO GetByPrimaryKey(int primaryKey)
        {
            RoleGroupDTO record = GetQuery().FirstOrDefault(roleGroup => roleGroup.RoleGroup_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.RoleGroup_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_RoleGroup WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_RoleGroup.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
