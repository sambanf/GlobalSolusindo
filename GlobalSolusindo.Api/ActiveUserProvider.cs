using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;

namespace GlobalSolusindo.Api
{
    public class ActiveUserProvider
    {
        public static tblM_User Get(string token)
        {
            //var user = new tblM_User()
            //{
            //    User_PK = 11,
            //    Username = "irpan",
            //    UserDetail_FK = 14
            //};
            //return user;
            var userDto = TokenSessionManager.GetUser(token);

            if(userDto!=null)
                return userDto.ToUserEntity();

            return null;
        }
    }
}