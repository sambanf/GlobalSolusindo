using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.User
{
    public class UserValidator : IValidator<UserDTO>
    {
        public ModelValidationResult Validate(UserDTO userDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(userDTO);
            return validator.ValidationResult;
        }
    }
}
