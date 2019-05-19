using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultDeleteHandler : DeleteOperation
    {
        public SOWTrackResultDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWTrackResult sowTrackResult)
        {
            if (sowTrackResult != null)
                Db.tblT_SOWTrackResult.Remove(sowTrackResult);
        }

        private void SoftDelete(tblT_SOWTrackResult sowTrackResult)
        {
            if (sowTrackResult != null)
                sowTrackResult.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWTrackResult> Execute(int sowTrackResultPK, DeleteMethod deleteMethod)
        {
            tblT_SOWTrackResult sowTrackResult = Db.tblT_SOWTrackResult.Find(sowTrackResultPK); 
            if (sowTrackResult == null)
            {
                return new DeleteResult<tblT_SOWTrackResult>()
                {
                    Success = false,
                    Message = $"Id '{sowTrackResultPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowTrackResult);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowTrackResult);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWTrackResult>()
            {
                Success = true,
                Message = $"SOWTrackResult with Id '{sowTrackResultPK}' successfully deleted.",
                Record = sowTrackResult
            };
        }
    }
}
