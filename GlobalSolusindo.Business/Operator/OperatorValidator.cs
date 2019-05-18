using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Operator
{
    public class OperatorValidator : IValidator<OperatorDTO>
    {
        public ModelValidationResult Validate(OperatorDTO _operatorDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(_operatorDTO);
            return validator.ValidationResult;
        }
    }
}
