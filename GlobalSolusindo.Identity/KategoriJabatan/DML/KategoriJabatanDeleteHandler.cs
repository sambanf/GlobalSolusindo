using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.KategoriJabatan.DML
{
    public class KategoriJabatanDeleteHandler : DeleteOperation
    {
        public KategoriJabatanDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_KategoriJabatan kategoriJabatan)
        {
            if (kategoriJabatan != null)
                Db.tblM_KategoriJabatan.Remove(kategoriJabatan);
        }

        private void SoftDelete(tblM_KategoriJabatan kategoriJabatan)
        {
            if (kategoriJabatan != null)
                kategoriJabatan.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_KategoriJabatan> Execute(int kategoriJabatanPK, DeleteMethod deleteMethod)
        {
            tblM_KategoriJabatan kategoriJabatan = Db.tblM_KategoriJabatan.Find(kategoriJabatanPK); 
            if (kategoriJabatan == null)
            {
                return new DeleteResult<tblM_KategoriJabatan>()
                {
                    Success = false,
                    Message = $"Id '{kategoriJabatanPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(kategoriJabatan);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(kategoriJabatan);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_KategoriJabatan>()
            {
                Success = true,
                Message = $"KategoriJabatan with Id '{kategoriJabatanPK}' successfully deleted.",
                Record = kategoriJabatan
            };
        }
    }
}
