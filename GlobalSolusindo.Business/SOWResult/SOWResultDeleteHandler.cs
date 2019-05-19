using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultDeleteHandler : DeleteOperation
    {
        public SOWResultDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWResult sowResult)
        {
            if (sowResult != null)
                Db.tblT_SOWResult.Remove(sowResult);
        }

        private void SoftDelete(tblT_SOWResult sowResult)
        {
            if (sowResult != null)
                sowResult.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWResult> Execute(int sowResultPK, DeleteMethod deleteMethod)
        {
            tblT_SOWResult sowResult = Db.tblT_SOWResult.Find(sowResultPK); 
            if (sowResult == null)
            {
                return new DeleteResult<tblT_SOWResult>()
                {
                    Success = false,
                    Message = $"Id '{sowResultPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowResult);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowResult);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWResult>()
            {
                Success = true,
                Message = $"SOWResult with Id '{sowResultPK}' successfully deleted.",
                Record = sowResult
            };
        }
    }
}
