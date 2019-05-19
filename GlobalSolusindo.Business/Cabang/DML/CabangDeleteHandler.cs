using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Cabang.DML
{
    public class CabangDeleteHandler : DeleteOperation
    {
        public CabangDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Cabang cabang)
        {
            if (cabang != null)
                Db.tblM_Cabang.Remove(cabang);
        }

        private void SoftDelete(tblM_Cabang cabang)
        {
            if (cabang != null)
                cabang.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Cabang> Execute(int cabangPK, DeleteMethod deleteMethod)
        {
            tblM_Cabang cabang = Db.tblM_Cabang.Find(cabangPK); 
            if (cabang == null)
            {
                return new DeleteResult<tblM_Cabang>()
                {
                    Success = false,
                    Message = $"Id '{cabangPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(cabang);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(cabang);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Cabang>()
            {
                Success = true,
                Message = $"Cabang with Id '{cabangPK}' successfully deleted.",
                Record = cabang
            };
        }
    }
}
