using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWAssign
{
    public class SOWAssignValidator : IValidator<SOWAssignDTO>
    {
        public ModelValidationResult Validate(SOWAssignDTO sowAssignDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowAssignDTO);
            return validator.ValidationResult;
        }
    }
}
