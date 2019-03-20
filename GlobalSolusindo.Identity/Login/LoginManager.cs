using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
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
        [Required]
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

            var user = Db.tblM_User.FirstOrDefault(x => x.Username == username && x.Password == hashedPassword); 
            if (user == null)
                throw new Kairos.AccessException("Username or password do not match.");

            var userDTO = new UserQuery(this.Db).GetUsernamePassword(username);
            return new LoginResult<UserDTO>()
            {
                Token = Guid.NewGuid().ToString(),
                Success = true,
                Message = "Login success.",
                Model = userDTO,
                ValidationResult = validationResult
            };
        }
    }
}