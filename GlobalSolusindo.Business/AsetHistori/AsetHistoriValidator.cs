using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.AsetHistori
{
    public class AsetHistoriValidator : IValidator<AsetHistoriDTO>
    {
        public ModelValidationResult Validate(AsetHistoriDTO asetHistoriDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(asetHistoriDTO);
            return validator.ValidationResult;
        }
    }
}
