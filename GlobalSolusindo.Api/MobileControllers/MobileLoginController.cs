using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.Login;
using GlobalSolusindo.Identity.User;
using Kairos;
using Newtonsoft.Json;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    /// <summary>
    /// Adapter class untuk LoginDTO
    /// </summary>
    public class MobileLoginDTO
    {
        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }

        public LoginDTO AsLoginDTO()
        {
            return new LoginDTO
            {
                Username = Email,
                Password = Password
            };
        }
    }

    public class MobileLoginController : ApiController
    {
        ApiControllerBase apicontrollerBase = new ApiControllerBase();

        private void CreateSession(string token, UserDTO user)
        {
            TokenSessionManager.AddAndReplaceUser(token, user);
        }

        [Route("mobile/doLogin")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]MobileLoginDTO request)
        {
            if (request == null)
                throw new KairosException("Missing model parameter");

            using (var loginManager = new LoginManager(new DataAccess.GlobalSolusindoDb()))
            {
                var loginResult = loginManager.GrantAccess(loginDTO: request.AsLoginDTO());

                if (loginResult.Success)
                {
                    CreateSession(loginResult.Token, loginResult.Model);
                    var user = loginResult.Model;
                    bool isDtvar = false;
                    if (user.KategoriJabatan_FK == 2)
                    {
                        isDtvar = true;
                    }
                    apicontrollerBase.SaveLog(request.Email, "Mobile_Login", JsonConvert.SerializeObject(request), "Success", "", "", "");
                    return Ok(
                        new
                        {
                            status = true,
                            id = user.User_PK,
                            fullname = user.Name,
                            email = user.Email,
                            photo = user.FilePhotoInBase64,
                            kategorijabatanfk = user.KategoriJabatan_FK,
                            isDt = isDtvar,
                            role = user.KategoriJabatanTitle,
                            description = user.Description,
                            token = loginResult.Token,
                            tokenType = "Bearer"
                        });
                }
                else
                {
                    apicontrollerBase.SaveLog(request.Email, "Mobile_Login", JsonConvert.SerializeObject(request), "Error", loginResult.Message, "", "");
                    return Ok(
                    new
                    {
                        status = false,
                        msg = loginResult.ValidationResult.IsValid ? loginResult.Message : loginResult.ValidationResult.Errors[0].Message
                    });
                }
            }
        }
    }

}
