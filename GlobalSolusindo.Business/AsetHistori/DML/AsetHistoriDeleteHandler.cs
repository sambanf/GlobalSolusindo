using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.AsetHistori.DML
{
    public class AsetHistoriDeleteHandler : DeleteOperation
    {
        public AsetHistoriDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_AsetHistori asetHistori)
        {
            if (asetHistori != null)
                Db.tblT_AsetHistori.Remove(asetHistori);
        }

        private void SoftDelete(tblT_AsetHistori asetHistori)
        {
            if (asetHistori != null)
                asetHistori.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_AsetHistori> Execute(int asetHistoriPK, DeleteMethod deleteMethod)
        {
            tblT_AsetHistori asetHistori = Db.tblT_AsetHistori.Find(asetHistoriPK); 
            if (asetHistori == null)
            {
                return new DeleteResult<tblT_AsetHistori>()
                {
                    Success = false,
                    Message = $"Id '{asetHistoriPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(asetHistori);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(asetHistori);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_AsetHistori>()
            {
                Success = true,
                Message = $"AsetHistori with Id '{asetHistoriPK}' successfully deleted.",
                Record = asetHistori
            };
        }
    }
}
