using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.AuthParam.Queries
{
    public class AuthParamQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public AuthParamQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public AuthParamQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<AuthParamDTO> GetQuery()
        {
            var query = from authParam in Db.tblM_AuthParam
                        where
                        authParam.Status_FK != deleted
                        select new AuthParamDTO
                        {
                            AuthParam_PK = authParam.AuthParam_PK,
                            Title = authParam.Title,
                            Description = authParam.Description,
                            CreatedBy = authParam.CreatedBy,
                            CreatedDate = authParam.CreatedDate,
                            UpdatedBy = authParam.UpdatedBy,
                            UpdatedDate = authParam.UpdatedDate,
                            Status_FK = authParam.Status_FK
                        };

            return query;
        }

        public AuthParamDTO GetByPrimaryKey(int primaryKey)
        {
            AuthParamDTO record = GetQuery().FirstOrDefault(authParam => authParam.AuthParam_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.AuthParam_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_AuthParam WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_AuthParam.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
