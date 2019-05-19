using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IzinCuti.DML
{
    public class IzinCutiDeleteHandler : DeleteOperation
    {
        public IzinCutiDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_IzinCuti izinCuti)
        {
            if (izinCuti != null)
                Db.tblT_IzinCuti.Remove(izinCuti);
        }

        private void SoftDelete(tblT_IzinCuti izinCuti)
        {
            if (izinCuti != null)
                izinCuti.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_IzinCuti> Execute(int izinCutiPK, DeleteMethod deleteMethod)
        {
            tblT_IzinCuti izinCuti = Db.tblT_IzinCuti.Find(izinCutiPK); 
            if (izinCuti == null)
            {
                return new DeleteResult<tblT_IzinCuti>()
                {
                    Success = false,
                    Message = $"Id '{izinCutiPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(izinCuti);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(izinCuti);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_IzinCuti>()
            {
                Success = true,
                Message = $"IzinCuti with Id '{izinCutiPK}' successfully deleted.",
                Record = izinCuti
            };
        }
    }
}
