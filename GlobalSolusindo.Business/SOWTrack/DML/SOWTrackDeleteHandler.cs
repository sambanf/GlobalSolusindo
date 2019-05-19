using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWTrack.DML
{
    public class SOWTrackDeleteHandler : DeleteOperation
    {
        public SOWTrackDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWTrack sowTrack)
        {
            if (sowTrack != null)
                Db.tblT_SOWTrack.Remove(sowTrack);
        }

        private void SoftDelete(tblT_SOWTrack sowTrack)
        {
            if (sowTrack != null)
                sowTrack.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWTrack> Execute(int sowTrackPK, DeleteMethod deleteMethod)
        {
            tblT_SOWTrack sowTrack = Db.tblT_SOWTrack.Find(sowTrackPK); 
            if (sowTrack == null)
            {
                return new DeleteResult<tblT_SOWTrack>()
                {
                    Success = false,
                    Message = $"Id '{sowTrackPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowTrack);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowTrack);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWTrack>()
            {
                Success = true,
                Message = $"SOWTrack with Id '{sowTrackPK}' successfully deleted.",
                Record = sowTrack
            };
        }
    }
}
