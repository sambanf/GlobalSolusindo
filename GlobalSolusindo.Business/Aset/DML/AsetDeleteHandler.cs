using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Aset.DML
{
    public class AsetDeleteHandler : DeleteOperation
    {
        public AsetDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Aset aset)
        {
            if (aset != null)
                Db.tblM_Aset.Remove(aset);
        }

        private void SoftDelete(tblM_Aset aset)
        {
            if (aset != null)
                aset.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Aset> Execute(int asetPK, DeleteMethod deleteMethod)
        {
            tblM_Aset aset = Db.tblM_Aset.Find(asetPK); 
            if (aset == null)
            {
                return new DeleteResult<tblM_Aset>()
                {
                    Success = false,
                    Message = $"Id '{asetPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(aset);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(aset);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Aset>()
            {
                Success = true,
                Message = $"Aset with Id '{asetPK}' successfully deleted.",
                Record = aset
            };
        }
    }
}
