using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTSStatus.DML
{
    public class BTSStatusDeleteHandler : DeleteOperation
    {
        public BTSStatusDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_BTSStatus btsStatus)
        {
            if (btsStatus != null)
                Db.tblM_BTSStatus.Remove(btsStatus);
        }

        private void SoftDelete(tblM_BTSStatus btsStatus)
        {
            if (btsStatus != null)
                btsStatus.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_BTSStatus> Execute(int btsStatusPK, DeleteMethod deleteMethod)
        {
            tblM_BTSStatus btsStatus = Db.tblM_BTSStatus.Find(btsStatusPK); 
            if (btsStatus == null)
            {
                return new DeleteResult<tblM_BTSStatus>()
                {
                    Success = false,
                    Message = $"Id '{btsStatusPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(btsStatus);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(btsStatus);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_BTSStatus>()
            {
                Success = true,
                Message = $"BTSStatus with Id '{btsStatusPK}' successfully deleted.",
                Record = btsStatus
            };
        }
    }
}
