using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Technology.Queries
{
    public class TechnologyQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public TechnologyQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public TechnologyQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<TechnologyDTO> GetQuery()
        {
            var query = from technology in Db.tblM_Technology
                        where
                        technology.Status_FK != deleted
                        select new TechnologyDTO
                        {
                            Technology_PK = technology.Technology_PK,
                            Title = technology.Title,
                            CreatedBy = technology.CreatedBy,
                            CreatedDate = technology.CreatedDate,
                            UpdatedBy = technology.UpdatedBy,
                            UpdatedDate = technology.UpdatedDate,
                            Status_FK = technology.Status_FK
                        };

            return query;
        }

        public TechnologyDTO GetByPrimaryKey(int primaryKey)
        {
            TechnologyDTO record = GetQuery().FirstOrDefault(technology => technology.Technology_PK == primaryKey);
            return record;
        }

        public TechnologyDTO GetByTitle(string title)
        {
            TechnologyDTO record = GetQuery().FirstOrDefault(technology => technology.Title == title);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Technology_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Technology WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Technology.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
