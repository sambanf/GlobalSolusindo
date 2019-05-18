using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Cost.DML
{
    public class CostDeleteHandler : DeleteOperation
    {
        public CostDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_Cost cost)
        {
            if (cost != null)
                Db.tblT_Cost.Remove(cost);
        }

        private void SoftDelete(tblT_Cost cost)
        {
            if (cost != null)
                cost.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_Cost> Execute(int costPK, DeleteMethod deleteMethod)
        {
            tblT_Cost cost = Db.tblT_Cost.Find(costPK); 
            if (cost == null)
            {
                return new DeleteResult<tblT_Cost>()
                {
                    Success = false,
                    Message = $"Id '{costPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(cost);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(cost);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_Cost>()
            {
                Success = true,
                Message = $"Cost with Id '{costPK}' successfully deleted.",
                Record = cost
            };
        }
    }
}
