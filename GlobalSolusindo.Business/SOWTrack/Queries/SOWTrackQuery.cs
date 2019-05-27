using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWTrack.Queries
{
    public class SOWTrackQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWTrackQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWTrackQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWTrackDTO> GetQuery()
        {
            var query = from sowTrack in Db.tblT_SOWTrack
                        join technology in Db.tblM_Technology on sowTrack.Technology_FK equals technology.Technology_PK
                        where
                        sowTrack.Status_FK != deleted
                        select new SOWTrackDTO
                        {
                            SOWTrack_PK = sowTrack.SOWTrack_PK,
                            Technology_FK = sowTrack.Technology_FK,
                            TechnologyTitle = technology.Title,
                            SOW_FK = sowTrack.SOW_FK,
                            Route = sowTrack.Route,
                            CreatedBy = sowTrack.CreatedBy,
                            CreatedDate = sowTrack.CreatedDate,
                            UpdatedBy = sowTrack.UpdatedBy,
                            UpdatedDate = sowTrack.UpdatedDate,
                            Status_FK = sowTrack.Status_FK
                        };

            return query;
        }

        public SOWTrackDTO GetByPrimaryKey(int primaryKey)
        {
            SOWTrackDTO record = GetQuery().FirstOrDefault(sowTrack => sowTrack.SOWTrack_PK == primaryKey);
            return record;
        }

        public SOWTrackDTO GetBySOWFKAndTechnologyTitle(int sowFK, string technologyTitle)
        {
            return GetQuery().FirstOrDefault(x => x.SOW_FK == sowFK && x.TechnologyTitle == technologyTitle);
        } 

        public List<SOWTrackDTO> GetBySOWFK(int sowFK)
        {
            return GetQuery().Where(x => x.SOW_FK == sowFK).ToList();
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWTrack_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWTrack WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWTrack.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
