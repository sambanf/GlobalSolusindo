using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWDeleteHandler : DeleteOperation
    {
        public SOWDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void SoftDeleteSOWAssign(int sowPK)
        {
            var assigns = Db.tblT_SOWAssign.Where(x => x.SOW_FK == sowPK);
            foreach (var assign in assigns)
            {
                assign.Status_FK = (int)RecordStatus.Deleted;
            }
        }

        private void SoftDeleteSOWTrack(int sowPK)
        {
            var tracks = Db.tblT_SOWTrack.Where(x => x.SOW_FK == sowPK);
            foreach (var track in tracks)
            {
                track.Status_FK = (int)RecordStatus.Deleted;
            }
        }

        private void HardDelete(tblT_SOW sow)
        {
            if (sow != null)
            { 
                Db.tblT_SOW.Remove(sow);
            }
        }

        private void SoftDelete(tblT_SOW sow)
        {
            if (sow != null)
            {
                SoftDeleteSOWAssign(sow.SOW_PK);
                SoftDeleteSOWTrack(sow.SOW_PK);
                sow.Status_FK = (int)RecordStatus.Deleted;
            } 
        }

        public DeleteResult<tblT_SOW> Execute(int sowPK, DeleteMethod deleteMethod)
        {
            tblT_SOW sow = Db.tblT_SOW.Find(sowPK);
            if (sow == null)
            {
                return new DeleteResult<tblT_SOW>()
                {
                    Success = false,
                    Message = $"Id '{sowPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sow);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sow);
                    break;
                default:
                    break;
            }

            Db.SaveChanges();

            return new DeleteResult<tblT_SOW>()
            {
                Success = true,
                Message = $"SOW with Id '{sowPK}' successfully deleted.",
                Record = sow
            };
        }
    }
}
