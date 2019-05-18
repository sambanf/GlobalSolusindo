using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckIn
{
    public class CheckInValidator : IValidator<MobileCheckInDTO>
    {
        public ModelValidationResult Validate(MobileCheckInDTO checkInDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(checkInDTO);
            return validator.ValidationResult;
        }
    }
}
