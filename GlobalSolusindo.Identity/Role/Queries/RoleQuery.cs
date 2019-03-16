using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.Role.Queries
{
    public class RoleQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public RoleQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public RoleQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<RoleDTO> GetQuery()
        {
            var query = from role in Db.tblM_Role
                        where
                        role.Status_FK != deleted
                        select new RoleDTO
                        {
                            Role_PK = role.Role_PK,
                            Title = role.Title,
                            Description = role.Description,
                            CreatedBy = role.CreatedBy,
                            CreatedDate = role.CreatedDate,
                            UpdatedBy = role.UpdatedBy,
                            UpdatedDate = role.UpdatedDate,
                            Status_FK = role.Status_FK
                        };

            return query;
        }

        public RoleDTO GetByPrimaryKey(int primaryKey)
        {
            RoleDTO record = GetQuery().FirstOrDefault(role => role.Role_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Role_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Role WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Role.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
