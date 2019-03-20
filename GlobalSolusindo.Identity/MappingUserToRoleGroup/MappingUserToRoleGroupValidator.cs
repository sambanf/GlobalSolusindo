using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup
{
    public class MappingUserToRoleGroupValidator : IValidator<MappingUserToRoleGroupDTO>
    {
        public ModelValidationResult Validate(MappingUserToRoleGroupDTO mappingUserToRoleGroup)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(mappingUserToRoleGroup);
            return validator.ValidationResult;
        }
    }
}
