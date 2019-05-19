using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.Role
{
    public class RoleValidator : IValidator<RoleDTO>
    {
        public ModelValidationResult Validate(RoleDTO roleDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(roleDTO);
            return validator.ValidationResult;
        }
    }
}
