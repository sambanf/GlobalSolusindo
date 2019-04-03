using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api
{
    public class RequestHeaderQuery
    {
        public static string GetToken(System.Net.Http.HttpRequestMessage httpRequest)
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

        public void ThrowIfUserCannotAccess(string roleTitle)
        {
            if (!requireAccessControl)
            {
                return;
            }
            if (!AccessControl.CanAccess(roleTitle))
                throw new AccessException($"You don't have access to do this operation '{roleTitle}'");
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {

        }
    }
}