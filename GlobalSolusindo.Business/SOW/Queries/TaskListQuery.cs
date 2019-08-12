using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.Queries
{
    public class TaskListQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public TaskListQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public TaskListQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWIssueDT> GetSOWIssues()
        {
            var query = from sow in Db.vw_SOWIssue
                        select new SOWIssueDT
                        {
                            SOW_FK = sow.SOW_FK,
                            IssueName = sow.IssueName,
                            User_FK = sow.User_FK,
                            KJabatan = sow.KategoriJabatan_PK
                        };

            return query;
        }

        public IQueryable<SOWLinkDT> GetSOWLinks()
        {
            var query = from sow in Db.vw_SOWLink
                        select new SOWLinkDT
                        {
                            SOW_PK = sow.SOW_PK,
                            RNO  = sow.RNO,
                            LinkRNO =  sow.LinkRNO,
                            RF   = sow.RF,
                            LinkRF  =  sow.LinkRF,
                            Rigger  = sow.Rigger,
                            LinkRigger =   sow.LinkRigger,
                            DT = sow.DT,
                            SSVLink = sow.SSVLink,
                            SSOLink = sow.SSOLink

                        };

            return query;
        }



        public IQueryable<TaskListDTO> GetQuery()
        {
            var query = from sow in Db.tblT_SOW
                        join sowAssign in Db.tblT_SOWAssign on sow.SOW_PK equals sowAssign.SOW_FK
                        join bts in Db.tblM_BTS on sow.BTS_FK equals bts.BTS_PK into btsTemp
                        from bts in btsTemp.DefaultIfEmpty()
                        join project in Db.tblM_Project on sow.Project_FK equals project.Project_PK into projectTemp
                        from project in projectTemp.DefaultIfEmpty()
                        join sowStatus in Db.tblT_SOWStatus on sow.StatusSOW_FK equals sowStatus.SOWStatus_PK into sowStatusTemp
                        from sowStatus in sowStatusTemp.DefaultIfEmpty()
                        where
                        sow.Status_FK != deleted
                        select new TaskListDTO
                        {
                            UserId = sowAssign.User_FK.Value,
                            TaskId = sowAssign.SOWAssign_PK,
                            BTS = bts.Name,
                            Address = bts.Alamat,
                            Status = sow.StatusSOW_FK == null ? 0 : 1,
                            Reported = false,
                            Network = (from sowTrack in Db.tblT_SOWTrack
                                       join sowTrackResult in Db.tblT_SOWTrackResult on sowTrack.SOWTrack_PK equals sowTrackResult.SOWTrack_FK
                                       join tipePekerjaan in Db.tblM_TipePekerjaan on sowTrack.TipePekerjaan_FK equals tipePekerjaan.TipePekerjaan_PK
                                       where
                                       sowTrack.SOW_FK == sow.SOW_PK
                                       select new NetworkType
                                       {
                                           Type = tipePekerjaan.Title,
                                           //Status = sowTrackResult.SOWTrack_FK == null ? 0 : 1
                                       }).ToList(),
                        };

            return query;
        }
    }
}
