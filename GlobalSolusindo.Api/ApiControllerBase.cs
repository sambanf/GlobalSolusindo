using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User;
using Kairos;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Controllers;
using GlobalSolusindo.Identity.Role;
using GlobalSolusindo.Business.LogActivity;
using GlobalSolusindo.Business.LogActivity.DML;
using System.Transactions;
using System;
using GlobalSolusindo.Identity.Login;
using System.Web;
using System.Net;
using GlobalSolusindo.Business.LogActivity.Queries;

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
        
        public void SaveLog(string userName, string activityName, string activityKey, string activityResult, string activityDescription, string valueOld, string valueNew)
        {
            LogActivityDTO logActivity = new LogActivityDTO();
            logActivity.UserName = userName;
            logActivity.IPAddress = GetIP4Address();
            logActivity.ActivityDateTime = DateTime.Now;
            logActivity.ActivityName = activityName;
            logActivity.ActivityKey = activityKey ;
            logActivity.ActivityResult = activityResult;
            logActivity.ActivityDescription = activityDescription;
            logActivity.ValueOld = valueOld;
            logActivity.ValueNew = valueNew;

            using (var insertLogActivity = new InsertLogActivity(Db, new LogActivityValidator(), new LogActivityFactory(Db), new LogActivityQuery(Db)))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = insertLogActivity.Save(logActivityDTO: logActivity, dateStamp: DateTime.Now);
                    transaction.Complete();
                }
            }

        }


        public static string GetIP4Address()
        {
            string IP4Address = string.Empty;

            if (HttpContext.Current != null)
            {
                foreach (IPAddress IPA in Dns.GetHostAddresses(HttpContext.Current.Request.UserHostAddress))
                {
                    if (IPA.AddressFamily.ToString() == "InterNetwork")
                    {
                        IP4Address = IPA.ToString();
                        break; // TODO: might not be correct. Was : Exit For
                    }
                }
            }

            if (!string.IsNullOrEmpty(IP4Address))
            {
                return IP4Address;
            }

            foreach (IPAddress IPA in Dns.GetHostAddresses(Dns.GetHostName()))
            {
                if (IPA.AddressFamily.ToString() == "InterNetwork")
                {
                    IP4Address = IPA.ToString();
                    break; // TODO: might not be correct. Was : Exit For
                }
            }

            return IP4Address;
        }
    }
}