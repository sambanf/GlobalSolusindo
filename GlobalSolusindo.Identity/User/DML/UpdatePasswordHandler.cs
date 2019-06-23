using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.EntryForm;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UpdatePasswordDTO
    {
        [Required]
        [JsonProperty("currentPassword")]
        public string CurrentPassword { get; set; }

        [Required]
        [JsonProperty("newPassword")]
        public string NewPassword { get; set; }
    }

    public class UpdatePasswordHandler : UpdateOperation
    {
        private ChangePasswordValidator validator;

        public UpdatePasswordHandler(GlobalSolusindoDb db, tblM_User user, ChangePasswordValidator validator) : base(db, user)
        {
            this.validator = validator;
        }

        public SaveResult<UserEntryModel> Save(UpdatePasswordDTO updatePasswordDTO, DateTime dateStamp)
        {
            var passwordHasher = new MD5PasswordHasher();
            var user = Db.tblM_User.Find(User.User_PK);

            ModelValidationResult validationResult = validator.Validate(updatePasswordDTO);
            bool success = false;
            UserEntryModel model = null;

            if (validationResult.IsValid)
            {
                var hashedCurrentPassword = passwordHasher.Hash(updatePasswordDTO.CurrentPassword);
                if (hashedCurrentPassword != user.Password)
                {
                    throw new Kairos.KairosException("Wrong current password.");
                }

                var hashedNewPassword = passwordHasher.Hash(updatePasswordDTO.NewPassword);

                user.Password = hashedNewPassword;
                Db.SaveChanges();
            }

            return new SaveResult<UserEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Password has been changed." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
