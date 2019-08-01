using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.CategoryContract.Queries
{
    public class CategoryContractQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public CategoryContractQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public CategoryContractQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<CategoryContractDTO> GetQuery()
        {
            var query = from CategoryContract in Db.tblM_CategoryContract
                        select new CategoryContractDTO
                        {
                            CategoryContractPK = CategoryContract.CategoryContractPK,
                            Name = CategoryContract.Name
                        };

            return query;
        }

        public CategoryContractDTO GetByName(string name)
        {
            return GetQuery().FirstOrDefault(x => x.Name == name);
        }

        public CategoryContractDTO GetByPrimaryKey(int primaryKey)
        {
            CategoryContractDTO record = GetQuery().FirstOrDefault(CategoryContract => CategoryContract.CategoryContractPK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.CategoryContractPK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_CategoryContract WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_CategoryContract.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
