using GlobalSolusindo.Identity;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GlobalSolusindo.Api
{
    public class TokenAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var userDto = actionContext.GetCurrentUser();
            if (userDto == null)
            {
                return false;
            }
            return true;
        }
    }
}