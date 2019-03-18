using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup
{
    public class MappingRoleToRoleGroupValidator : IValidator<MappingRoleToRoleGroupDTO>
    {
        public ModelValidationResult Validate(MappingRoleToRoleGroupDTO mappingRoleToRoleGroup)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(mappingRoleToRoleGroup);
            return validator.ValidationResult;
        }

        public ModelValidationResult ValidateRoleMapping(RoleMapping mappingRole)
        {
            ModelValidator validator = new ModelValidator();

            validator.ValidateForEach(mappingRole.MappingRoleToRoleGroups, "mappingRoleToRoleGroups");
            return validator.ValidationResult;
        }
    }
}
