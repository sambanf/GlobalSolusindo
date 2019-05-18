using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWIssue.DML
{
    public class SOWIssueDeleteHandler : DeleteOperation
    {
        public SOWIssueDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_SOWIssue sowIssue)
        {
            if (sowIssue != null)
                Db.tblT_SOWIssue.Remove(sowIssue);
        }

        private void SoftDelete(tblT_SOWIssue sowIssue)
        {
            if (sowIssue != null)
                sowIssue.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblT_SOWIssue> Execute(int sowIssuePK, DeleteMethod deleteMethod)
        {
            tblT_SOWIssue sowIssue = Db.tblT_SOWIssue.Find(sowIssuePK); 
            if (sowIssue == null)
            {
                return new DeleteResult<tblT_SOWIssue>()
                {
                    Success = false,
                    Message = $"Id '{sowIssuePK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(sowIssue);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(sowIssue);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblT_SOWIssue>()
            {
                Success = true,
                Message = $"SOWIssue with Id '{sowIssuePK}' successfully deleted.",
                Record = sowIssue
            };
        }
    }
}
