using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Kota.DML
{
    public class KotaDeleteHandler : DeleteOperation
    {
        public KotaDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Kota kota)
        {
            if (kota != null)
                Db.tblM_Kota.Remove(kota);
        }

        private void SoftDelete(tblM_Kota kota)
        {
            if (kota != null)
                kota.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Kota> Execute(int kotaPK, DeleteMethod deleteMethod)
        {
            tblM_Kota kota = Db.tblM_Kota.Find(kotaPK); 
            if (kota == null)
            {
                return new DeleteResult<tblM_Kota>()
                {
                    Success = false,
                    Message = $"Id '{kotaPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(kota);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(kota);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Kota>()
            {
                Success = true,
                Message = $"Kota with Id '{kotaPK}' successfully deleted.",
                Record = kota
            };
        }
    }
}
