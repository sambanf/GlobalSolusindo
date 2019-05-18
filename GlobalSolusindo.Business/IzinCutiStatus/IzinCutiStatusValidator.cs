using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.IzinCutiStatus
{
    public class IzinCutiStatusValidator : IValidator<IzinCutiStatusDTO>
    {
        public ModelValidationResult Validate(IzinCutiStatusDTO izinCutiStatusDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(izinCutiStatusDTO);
            return validator.ValidationResult;
        }
    }
}
