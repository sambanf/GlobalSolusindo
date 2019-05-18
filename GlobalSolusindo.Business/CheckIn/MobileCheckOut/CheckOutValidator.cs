using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckOut
{
    public class CheckOutValidator : IValidator<MobileCheckOutDTO>
    {
        public ModelValidationResult Validate(MobileCheckOutDTO checkInDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(checkInDTO);
            return validator.ValidationResult;
        }
    }
}
