using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.RoleGroup
{
    public class RoleGroupValidator : IValidator<RoleGroupDTO>
    {
        public ModelValidationResult Validate(RoleGroupDTO roleGroupDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(roleGroupDTO);
            return validator.ValidationResult;
        }
    }
}
