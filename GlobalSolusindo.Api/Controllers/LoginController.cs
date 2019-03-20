using GlobalSolusindo.Identity.Login;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class LoginController : ApiControllerBase
    {
        public LoginController()
        {
        }

        [Route("token")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]LoginDTO login)
        {
            if (login == null)
                throw new KairosException("Missing model parameter");

            using (var loginManager = new LoginManager(Db))
            {
                var loginResult = loginManager.GrantAccess(loginDTO: login); 
                if (loginResult.Success)
                    return Ok(loginResult);
                return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, loginResult.ValidationResult, loginResult.Message));
            }
        }
    }
}
