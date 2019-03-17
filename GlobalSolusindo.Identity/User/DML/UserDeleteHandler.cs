using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.DML;
using Kairos.Data;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UserDeleteHandler : DeleteOperation
    {
        public UserDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_User user)
        {
            if (user != null)
                Db.tblM_User.Remove(user);
        }

        private void SoftDelete(tblM_User user)
        {
            if (user != null)
                user.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<int> Execute(int userPK, DeleteMethod deleteMethod)
        {
            tblM_User user = Db.tblM_User.Find(userPK);
            if (user == null)
            {
                return new DeleteResult<int>()
                {
                    Success = false,
                    Message = $"Id '{userPK}' is not found.",
                    Record = user.User_PK
                };
            }

            var deleteUserDetailResult = new UserDetailDeleteHandler(Db, User).Execute(user.UserDetail_FK, deleteMethod);

            if (deleteUserDetailResult.Success)
            {
                switch (deleteMethod)
                {
                    case DeleteMethod.Soft:
                        SoftDelete(user);
                        break;
                    case DeleteMethod.Hard:
                        HardDelete(user);
                        break;
                    default:
                        break;
                }
                Db.SaveChanges();
            }


            return new DeleteResult<int>()
            {
                Success = true,
                Message = $"User with Id '{userPK}' successfully deleted.",
                Record = user.User_PK
            };
        }
    }
}
