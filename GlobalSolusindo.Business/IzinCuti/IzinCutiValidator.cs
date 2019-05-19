using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.IzinCuti
{
    public class IzinCutiValidator : IValidator<IzinCutiDTO>
    {
        public ModelValidationResult Validate(IzinCutiDTO izinCutiDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(izinCutiDTO);
            return validator.ValidationResult;
        }
    }
}
