using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Aset
{
    public class AsetValidator : IValidator<AsetDTO>
    {
        public ModelValidationResult Validate(AsetDTO asetDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(asetDTO);
            return validator.ValidationResult;
        }
    }
}
