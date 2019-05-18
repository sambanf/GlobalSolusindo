using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.CostKategori.DML
{
    public class CostKategoriDeleteHandler : DeleteOperation
    {
        public CostKategoriDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_CostKategori costKategori)
        {
            if (costKategori != null)
                Db.tblM_CostKategori.Remove(costKategori);
        }

        private void SoftDelete(tblM_CostKategori costKategori)
        {
            if (costKategori != null)
                costKategori.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_CostKategori> Execute(int costKategoriPK, DeleteMethod deleteMethod)
        {
            tblM_CostKategori costKategori = Db.tblM_CostKategori.Find(costKategoriPK); 
            if (costKategori == null)
            {
                return new DeleteResult<tblM_CostKategori>()
                {
                    Success = false,
                    Message = $"Id '{costKategoriPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(costKategori);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(costKategori);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_CostKategori>()
            {
                Success = true,
                Message = $"CostKategori with Id '{costKategoriPK}' successfully deleted.",
                Record = costKategori
            };
        }
    }
}
