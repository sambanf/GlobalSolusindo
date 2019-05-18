using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Project.Queries
{
    public class ProjectQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public ProjectQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public ProjectQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<ProjectDTO> GetQuery()
        {
            var query = from project in Db.tblM_Project
                        join _operator in Db.tblM_Operator on project.Operator_FK equals _operator.Operator_PK into operatorTemp
                        from _operator in operatorTemp.DefaultIfEmpty()
                        join deliveryArea in Db.tblM_DeliveryArea on project.DeliveryArea_FK equals deliveryArea.DeliveryArea_PK into deliveryAreaTemp
                        from deliveryArea in deliveryAreaTemp.DefaultIfEmpty()

                        where
                        project.Status_FK != deleted
                        select new ProjectDTO
                        {
                            Project_PK = project.Project_PK,
                            Title = project.Title,
                            Operator_FK = project.Operator_FK.Value,
                            OperatorTitle = _operator.Title,
                            DeliveryArea_FK = project.DeliveryArea_FK.Value,
                            DeliveryAreaTitle = deliveryArea.Title,
                            CreatedBy = project.CreatedBy,
                            CreatedDate = project.CreatedDate,
                            UpdatedBy = project.UpdatedBy,
                            UpdatedDate = project.UpdatedDate,
                            Status_FK = project.Status_FK
                        };

            return query;
        }

        public ProjectDTO GetByPrimaryKey(int primaryKey)
        {
            ProjectDTO record = GetQuery().FirstOrDefault(project => project.Project_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Project_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Project WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Project.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
