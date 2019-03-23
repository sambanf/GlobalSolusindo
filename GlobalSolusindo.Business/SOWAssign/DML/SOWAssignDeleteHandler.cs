using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWAssign.DML
{
    public class SOWAssignDeleteHandler : DeleteOperation
    {
        public SOWAssignDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWAssign sowAssign)
        {
            if (sowAssign != null)
                Db.tblT_SOWAssign.Remove(sowAssign);
        }

        private void SoftDelete(tblT_SOWAssign sowAssign)
        {
            if (sowAssign != null)
                sowAssign.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWAssign> Execute(int sowAssignPK, DeleteMethod deleteMethod)
        {
            tblT_SOWAssign sowAssign = Db.tblT_SOWAssign.Find(sowAssignPK); 
            if (sowAssign == null)
            {
                return new DeleteResult<tblT_SOWAssign>()
                {
                    Success = false,
                    Message = $"Id '{sowAssignPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowAssign);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowAssign);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWAssign>()
            {
                Success = true,
                Message = $"SOWAssign with Id '{sowAssignPK}' successfully deleted.",
                Record = sowAssign
            };
        }
    }
}
