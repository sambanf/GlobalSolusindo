using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IssueType.DML
{
    public class IssueTypeDeleteHandler : DeleteOperation
    {
        public IssueTypeDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_IssueType issueType)
        {
            if (issueType != null)
                Db.tblM_IssueType.Remove(issueType);
        }

        private void SoftDelete(tblM_IssueType issueType)
        {
            if (issueType != null)
                issueType.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_IssueType> Execute(int issueTypePK, DeleteMethod deleteMethod)
        {
            tblM_IssueType issueType = Db.tblM_IssueType.Find(issueTypePK); 
            if (issueType == null)
            {
                return new DeleteResult<tblM_IssueType>()
                {
                    Success = false,
                    Message = $"Id '{issueTypePK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(issueType);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(issueType);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_IssueType>()
            {
                Success = true,
                Message = $"IssueType with Id '{issueTypePK}' successfully deleted.",
                Record = issueType
            };
        }
    }
}
