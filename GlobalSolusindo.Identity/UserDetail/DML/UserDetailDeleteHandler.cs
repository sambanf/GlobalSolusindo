using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.UserDetail.DML
{
    public class UserDetailDeleteHandler : DeleteOperation
    {
        public UserDetailDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_UserDetail userDetail)
        {
            if (userDetail != null)
                Db.tblM_UserDetail.Remove(userDetail);
        }

        private void SoftDelete(tblM_UserDetail userDetail)
        {
            if (userDetail != null)
                userDetail.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_UserDetail> Execute(int userDetailPK, DeleteMethod deleteMethod)
        {
            tblM_UserDetail userDetail = Db.tblM_UserDetail.Find(userDetailPK); 
            if (userDetail == null)
            {
                return new DeleteResult<tblM_UserDetail>()
                {
                    Success = false,
                    Message = $"Id '{userDetailPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(userDetail);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(userDetail);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_UserDetail>()
            {
                Success = true,
                Message = $"UserDetail with Id '{userDetailPK}' successfully deleted.",
                Record = userDetail
            };
        }
    }
}
