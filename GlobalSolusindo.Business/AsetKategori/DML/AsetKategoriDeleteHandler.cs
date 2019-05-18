using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.AsetKategori.DML
{
    public class AsetKategoriDeleteHandler : DeleteOperation
    {
        public AsetKategoriDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_AsetKategori asetKategori)
        {
            if (asetKategori != null)
                Db.tblM_AsetKategori.Remove(asetKategori);
        }

        private void SoftDelete(tblM_AsetKategori asetKategori)
        {
            if (asetKategori != null)
                asetKategori.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_AsetKategori> Execute(int asetKategoriPK, DeleteMethod deleteMethod)
        {
            tblM_AsetKategori asetKategori = Db.tblM_AsetKategori.Find(asetKategoriPK); 
            if (asetKategori == null)
            {
                return new DeleteResult<tblM_AsetKategori>()
                {
                    Success = false,
                    Message = $"Id '{asetKategoriPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(asetKategori);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(asetKategori);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_AsetKategori>()
            {
                Success = true,
                Message = $"AsetKategori with Id '{asetKategoriPK}' successfully deleted.",
                Record = asetKategori
            };
        }
    }
}
