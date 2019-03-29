using GlobalSolusindo.DataAccess;

namespace GlobalSolusindo.Api
{ 
    public class ActiveUserProvider
    {
        public static tblM_User Get(string token)
        {
            var user = new tblM_User()
            {
                User_PK = 11,
                Username = "irpan"
            };
            return user;
        }
    }
}