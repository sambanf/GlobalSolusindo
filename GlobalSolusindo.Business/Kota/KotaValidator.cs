using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Kota
{
    public class KotaValidator : IValidator<KotaDTO>
    {
        public ModelValidationResult Validate(KotaDTO kotaDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(kotaDTO);
            return validator.ValidationResult;
        }
    }
}
