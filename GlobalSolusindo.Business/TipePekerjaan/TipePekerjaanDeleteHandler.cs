using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanDeleteHandler : DeleteOperation
    {
        public TipePekerjaanDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_TipePekerjaan tipePekerjaan)
        {
            if (tipePekerjaan != null)
                Db.tblM_TipePekerjaan.Remove(tipePekerjaan);
        }

        private void SoftDelete(tblM_TipePekerjaan tipePekerjaan)
        {
            if (tipePekerjaan != null)
                tipePekerjaan.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_TipePekerjaan> Execute(int tipePekerjaanPK, DeleteMethod deleteMethod)
        {
            tblM_TipePekerjaan tipePekerjaan = Db.tblM_TipePekerjaan.Find(tipePekerjaanPK); 
            if (tipePekerjaan == null)
            {
                return new DeleteResult<tblM_TipePekerjaan>()
                {
                    Success = false,
                    Message = $"Id '{tipePekerjaanPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(tipePekerjaan);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(tipePekerjaan);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_TipePekerjaan>()
            {
                Success = true,
                Message = $"TipePekerjaan with Id '{tipePekerjaanPK}' successfully deleted.",
                Record = tipePekerjaan
            };
        }
    }
}
