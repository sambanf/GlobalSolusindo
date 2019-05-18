using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IzinCutiStatus.DML
{
    public class IzinCutiStatusDeleteHandler : DeleteOperation
    {
        public IzinCutiStatusDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_IzinCutiStatus izinCutiStatus)
        {
            if (izinCutiStatus != null)
                Db.tblM_IzinCutiStatus.Remove(izinCutiStatus);
        }

        private void SoftDelete(tblM_IzinCutiStatus izinCutiStatus)
        {
            if (izinCutiStatus != null)
                izinCutiStatus.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_IzinCutiStatus> Execute(int izinCutiStatusPK, DeleteMethod deleteMethod)
        {
            tblM_IzinCutiStatus izinCutiStatus = Db.tblM_IzinCutiStatus.Find(izinCutiStatusPK); 
            if (izinCutiStatus == null)
            {
                return new DeleteResult<tblM_IzinCutiStatus>()
                {
                    Success = false,
                    Message = $"Id '{izinCutiStatusPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(izinCutiStatus);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(izinCutiStatus);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_IzinCutiStatus>()
            {
                Success = true,
                Message = $"IzinCutiStatus with Id '{izinCutiStatusPK}' successfully deleted.",
                Record = izinCutiStatus
            };
        }
    }
}
