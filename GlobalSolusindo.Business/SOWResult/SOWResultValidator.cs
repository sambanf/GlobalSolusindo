using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultValidator : IValidator<SOWResultDTO>
    {
        public ModelValidationResult Validate(SOWResultDTO sowResultDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowResultDTO);
            return validator.ValidationResult;
        }
    }
}
