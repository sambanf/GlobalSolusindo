using GlobalSolusindo.Identity;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GlobalSolusindo.Api
{
    public class TokenAuthorizeAttribute : AuthorizeAttribute
    {
        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var token = RequestHeaderQuery.GetToken(actionContext.Request);
            var userDto = TokenSessionManager.GetUser(token);
            if (userDto == null)
            {
                return false;
            }
            return true;
        }
    }
}