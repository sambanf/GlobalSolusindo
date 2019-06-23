using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanValidator : IValidator<TipePekerjaanDTO>
    {
        public ModelValidationResult Validate(TipePekerjaanDTO tipePekerjaanDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(tipePekerjaanDTO);
            return validator.ValidationResult;
        }
    }
}
