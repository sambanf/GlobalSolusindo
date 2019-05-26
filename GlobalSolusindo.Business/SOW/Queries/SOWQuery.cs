using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.Queries
{
    public class SOWQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWDTO> GetQuery()
        {
            var query = from sow in Db.tblT_SOW
                        join bts in Db.tblM_BTS on sow.BTS_FK equals bts.BTS_PK into btsTemp
                        from bts in btsTemp.DefaultIfEmpty()
                        join project in Db.tblM_Project on sow.Project_FK equals project.Project_PK into projectTemp
                        from project in projectTemp.DefaultIfEmpty()
                        join sowStatus in Db.tblT_SOWStatus on sow.StatusSOW_FK equals sowStatus.SOWStatus_PK into sowStatusTemp
                        from sowStatus in sowStatusTemp.DefaultIfEmpty()
                        where
                        sow.Status_FK != deleted
                        select new SOWDTO
                        {
                            SOW_PK = sow.SOW_PK,
                            SOWName = sow.SOWName,
                            BTS_FK = sow.BTS_FK.Value,
                            BTSName = bts.Name,
                            Project_FK = sow.Project_FK.Value,
                            ProjectTitle = project.Title,
                            TglMulai = sow.TglMulai,
                            TglSelesai = sow.TglSelesai,
                            StatusSOW_FK = sow.StatusSOW_FK,
                            SOWStatusTitle = sowStatus.Title,
                            CreatedBy = sow.CreatedBy,
                            CreatedDate = sow.CreatedDate,
                            UpdatedBy = sow.UpdatedBy,
                            UpdatedDate = sow.UpdatedDate,
                            Status_FK = sow.Status_FK
                        };

            return query;
        }

        public SOWDTO GetByPrimaryKey(int primaryKey)
        {
            SOWDTO record = GetQuery().FirstOrDefault(sow => sow.SOW_PK == primaryKey);
            if (record != null)
            {
                var sowAssigns = new SOWAssignQuery(this.Db).GetWithSP_BySOW_FK(record.SOW_PK);
                record.SOWAssigns = sowAssigns.OrderByDescending(sowAssign => sowAssign.SOWAssign_PK).ToList();

                record.SOWTracks = new SOWTrackQuery(Db).GetBySOWFK(primaryKey);
            }
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOW_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOW WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOW.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
