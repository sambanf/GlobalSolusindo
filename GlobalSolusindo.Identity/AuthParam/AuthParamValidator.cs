using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.AuthParam
{
    public class AuthParamValidator : IValidator<AuthParamDTO>
    {
        public ModelValidationResult Validate(AuthParamDTO authParamDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(authParamDTO);
            return validator.ValidationResult;
        }
    }
}
