using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.EntryForm;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UserActivationDTO
    {
        [Required]
        [JsonProperty("user_pk")]
        public int User_PK { get; set; }
    }

    public class UserActivationHandler : UpdateOperation
    {

        public UserActivationHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {

        }

        public SaveResult<tblM_User> Inactivate(UserActivationDTO userActivationDTO, DateTime dateStamp)
        {
            var passwordHasher = new MD5PasswordHasher();
            var user = Db.tblM_User.Find(userActivationDTO.User_PK);

            var inactiveStatus = 2;
            user.Status_FK = inactiveStatus;

            Db.SaveChanges();

            return new SaveResult<tblM_User>()
            {
                Message = $"User {user.Username} successfully deactivated.",
                Model = user,
                Success = true,
            };
        }

        public SaveResult<tblM_User> Activate(UserActivationDTO userActivationDTO, DateTime dateStamp)
        {
            var passwordHasher = new MD5PasswordHasher();
            var user = Db.tblM_User.Find(userActivationDTO.User_PK);

            var inactiveStatus = 1;
            user.Status_FK = inactiveStatus;

            Db.SaveChanges();

            return new SaveResult<tblM_User>()
            {
                Message = $"User {user.Username} successfully activated.",
                Model = user,
                Success = true,
            };
        }
    }
}
