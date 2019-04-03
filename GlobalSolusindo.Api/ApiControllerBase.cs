using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User;
using Kairos;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GlobalSolusindo.Api
{
    public static class RequestHeaderQuery
    {
        public static UserDTO GetCurrentUser(this HttpActionContext actionContext)
        {
            var token = GetToken(actionContext.Request);
            var userDto = TokenSessionManager.GetUser(token);
            return userDto;
        }

        public static string GetToken(this System.Net.Http.HttpRequestMessage httpRequest)
        {
            return httpRequest.Headers.Authorization?.Parameter;
        }
    }

    [TokenAuthorize()]
    public class ApiControllerBase : ApiController
    {
        private const bool requireAccessControl = false;
 
        public tblM_User ActiveUser
        {
            get
            {
                return ActiveUserProvider.Get(RequestHeaderQuery.GetToken(this.Request));
            }
        }

        public GlobalSolusindoDb Db { get; private set; } = new GlobalSolusindoDb();

        public AccessControl AccessControl
        {
            get
            {
                return new AccessControl(Db, ActiveUser);
            }
        }

        public void ThrowIfUserHasNoRole(string roleTitle)
        {
            if (!requireAccessControl)
            {
                return;
            }
            if (!AccessControl.UserHasRole(roleTitle))
                throw new AccessException($"You don't have access to do this operation '{roleTitle}'");
        }

        public void SaveLog(string moduleName, string actionName, string data)
        { 
        }
    }
}