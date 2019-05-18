using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWStatus.DML
{
    public class SOWStatusDeleteHandler : DeleteOperation
    {
        public SOWStatusDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWStatus sowStatus)
        {
            if (sowStatus != null)
                Db.tblT_SOWStatus.Remove(sowStatus);
        }

        private void SoftDelete(tblT_SOWStatus sowStatus)
        {
            if (sowStatus != null)
                sowStatus.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWStatus> Execute(int sowStatusPK, DeleteMethod deleteMethod)
        {
            tblT_SOWStatus sowStatus = Db.tblT_SOWStatus.Find(sowStatusPK); 
            if (sowStatus == null)
            {
                return new DeleteResult<tblT_SOWStatus>()
                {
                    Success = false,
                    Message = $"Id '{sowStatusPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowStatus);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowStatus);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWStatus>()
            {
                Success = true,
                Message = $"SOWStatus with Id '{sowStatusPK}' successfully deleted.",
                Record = sowStatus
            };
        }
    }
}
