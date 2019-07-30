using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.Login;
using GlobalSolusindo.Identity.User;
using Kairos;
using Newtonsoft.Json;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class AccountController : ApiController
    {
        ApiControllerBase apiControllerBase = new ApiControllerBase();
        public AccountController()
        {
        }

        private void CreateSession(string token, UserDTO user)
        { 
            TokenSessionManager.Add(token, user);
        }

        [Route("token")]
        [HttpPost]
        public IHttpActionResult Login([FromBody]LoginDTO login)
        {
            if (login == null)
                throw new KairosException("Missing model parameter");

            using (var loginManager = new LoginManager(new DataAccess.GlobalSolusindoDb()))
            {
                var loginResult = loginManager.GrantAccess(loginDTO: login);

                if (loginResult.Success)
                {
                    CreateSession(loginResult.Token, loginResult.Model);
                    apiControllerBase.SaveLog(login.Username, "Login", "", "Success", "", "", "");
                    return Ok(loginResult);
                }
                else
                {
                    apiControllerBase.SaveLog(login.Username, "Login", "", "Error", loginResult.Message, "", "");
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, loginResult.ValidationResult, loginResult.Message));
                }
            }
        }

        [Route("logout")]
        [HttpPost]
        public IHttpActionResult Logout()
        {
            TokenSessionManager.Remove(Request.GetToken());
            return Ok(new SuccessResponse(null, "Logout success."));
        }
    } 
}
