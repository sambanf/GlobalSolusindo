using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Cabang
{
    public class CabangValidator : IValidator<CabangDTO>
    {
        public ModelValidationResult Validate(CabangDTO cabangDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(cabangDTO);
            return validator.ValidationResult;
        }
    }
}
