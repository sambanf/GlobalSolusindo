using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam
{
    public class MappingUserToAuthParamValidator : IValidator<MappingUserToAuthParamDTO>
    {
        public ModelValidationResult Validate(MappingUserToAuthParamDTO mappingUserToAuthParam)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(mappingUserToAuthParam);
            return validator.ValidationResult;
        }
    }
}
