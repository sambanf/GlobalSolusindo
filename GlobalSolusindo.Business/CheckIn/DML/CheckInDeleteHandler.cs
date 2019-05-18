using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.CheckIn.DML
{
    public class CheckInDeleteHandler : DeleteOperation
    {
        public CheckInDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_CheckIn checkIn)
        {
            if (checkIn != null)
                Db.tblT_CheckIn.Remove(checkIn);
        }

        private void SoftDelete(tblT_CheckIn checkIn)
        {
            if (checkIn != null)
                checkIn.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_CheckIn> Execute(int checkInPK, DeleteMethod deleteMethod)
        {
            tblT_CheckIn checkIn = Db.tblT_CheckIn.Find(checkInPK); 
            if (checkIn == null)
            {
                return new DeleteResult<tblT_CheckIn>()
                {
                    Success = false,
                    Message = $"Id '{checkInPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(checkIn);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(checkIn);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_CheckIn>()
            {
                Success = true,
                Message = $"CheckIn with Id '{checkInPK}' successfully deleted.",
                Record = checkIn
            };
        }
    }
}
