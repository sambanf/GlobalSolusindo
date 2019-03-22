using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Operator.Queries
{
    public class OperatorQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public OperatorQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public OperatorQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<OperatorDTO> GetQuery()
        {
            var query = from _operator in Db.tblM_Operator
                        where
                        _operator.Status_FK != deleted
                        select new OperatorDTO
                        {
                            Operator_PK = _operator.Operator_PK,
                            Title = _operator.Title,
                            CreatedBy = _operator.CreatedBy,
                            CreatedDate = _operator.CreatedDate,
                            UpdatedBy = _operator.UpdatedBy,
                            UpdatedDate = _operator.UpdatedDate,
                            Status_FK = _operator.Status_FK
                        };

            return query;
        }

        public OperatorDTO GetByPrimaryKey(int primaryKey)
        {
            OperatorDTO record = GetQuery().FirstOrDefault(_operator => _operator.Operator_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Operator_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Operator WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Operator.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
