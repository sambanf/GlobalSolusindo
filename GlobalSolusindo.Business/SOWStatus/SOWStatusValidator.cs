using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWStatus
{
    public class SOWStatusValidator : IValidator<SOWStatusDTO>
    {
        public ModelValidationResult Validate(SOWStatusDTO sowStatusDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowStatusDTO);
            return validator.ValidationResult;
        }
    }
}
