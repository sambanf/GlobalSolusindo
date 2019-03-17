using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.UserDetail
{
    public class UserDetailValidator : IValidator<UserDetailDTO>
    {
        public ModelValidationResult Validate(UserDetailDTO userDetailDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(userDetailDTO);
            return validator.ValidationResult;
        }
    }
}
