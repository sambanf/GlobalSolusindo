using GlobalSolusindo.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace GlobalSolusindo.Api
{
    public class RoleAuthorizeAttribute : AuthorizeAttribute
    {
        private string roleTitle;
         
        public RoleAuthorizeAttribute(string roleTitle)
        {
            this.roleTitle = roleTitle; 
        }

        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
            var userDto = actionContext.GetCurrentUser();
            if (userDto == null)
                return false;

            var user = userDto.ToUserEntity();
            using (var accessControl = new AccessControl(user))
            {
                return accessControl.UserHasRole(roleTitle);
            }
        }
    }
}