using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Menu;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GlobalSolusindo.Identity.Login
{
    public class LoginDTO
    {
        [Required(ErrorMessage = "Username or email is required.")]
        [JsonProperty("username")]
        public string Username { get; set; }

        [Required]
        [JsonProperty("password")]
        public string Password { get; set; }
    }

    public class LoginManager : DbOperation
    {
        public LoginManager(GlobalSolusindoDb db) : base(db)
        {
        }

        private ModelValidationResult Validate(LoginDTO loginDTO)
        {
            ModelValidator validator = new ModelValidator();
            validator.Validate(loginDTO);
            return validator.ValidationResult;
        }

        public tblM_User GetUserByUsername(string username)
        {
            var user = Db.tblM_User.FirstOrDefault(x => x.Status_FK != 3 && x.Username == username);
            return user;
        }

        public tblM_User GetUserByEmail(string email)
        {
            var userDetail = Db.tblM_UserDetail.FirstOrDefault(x => x.Email == email);
            if (userDetail != null)
            {
                var user = Db.tblM_User.FirstOrDefault(x => x.UserDetail_FK == userDetail.UserDetail_PK);
                return user;
            }
            return null;
        }


        public LoginResult<UserDTO> GrantAccess(LoginDTO loginDTO)
        {
            var validationResult = Validate(loginDTO);
            if (!validationResult.IsValid)
            {
                return new LoginResult<UserDTO>
                {
                    Success = false,
                    Message = "Validation error occured.",
                    Model = null,
                    ValidationResult = validationResult
                };
            }

            MD5PasswordHasher passwordHasher = new MD5PasswordHasher();
            var hashedPassword = passwordHasher.Hash(loginDTO.Password);

            var username = loginDTO.Username;

            //Try by username first;
            var loginBy = "username";

            var user = GetUserByUsername(username); //Db.tblM_User.FirstOrDefault(x => x.Username == username && x.Password == hashedPassword);

            //If not found, try by email
            if (user == null)
            {
                user = GetUserByEmail(username);
                loginBy = "email";
            }

            if (user == null)
                throw new Kairos.AccessException("Username or password do not match.");

            if (user.Password != hashedPassword)
            {
                throw new Kairos.AccessException("Username or password do not match.");
            }
            UserDTO userDTO;
            if (loginBy == "username")
            {
                userDTO = new UserQuery(this.Db).GetByUsername(username);
            }
            else
            {
                userDTO = new UserQuery(this.Db).GetByEmail(username);
            }

            var treeMenu = new MenuGenerator(Db).GenerateMenus(user.User_PK);


            return new LoginResult<UserDTO>()
            {
                Token = Guid.NewGuid().ToString(),
                Success = true,
                Message = "Login success.",
                Model = userDTO,
                ValidationResult = validationResult,
                TreeMenu = treeMenu
            };
        }
    }
}