using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn
{
    public class CheckInValidator : IValidator<CheckInDTO>
    {
        public ModelValidationResult Validate(CheckInDTO checkInDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(checkInDTO);
            return validator.ValidationResult;
        }
    }
}
