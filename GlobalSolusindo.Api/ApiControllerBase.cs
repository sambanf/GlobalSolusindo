using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User;
using Kairos;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Controllers;
using GlobalSolusindo.Identity.Role;

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
        private const bool requireAccessControl = true;

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

            var isSuperAdministrator = AccessControl.UserHasRole("Full_Access");

            if (isSuperAdministrator)
            {
                return;
            }

            if (!AccessControl.UserHasRole(roleTitle))
                throw new AccessException($"You don't have access or role to do the following operation '{roleTitle}'");
        }

        public List<RoleDTO> GetRole() {
            
            var userRoles = AccessControl.userGetRoles();
            
            return userRoles;
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {
        }
    }
}