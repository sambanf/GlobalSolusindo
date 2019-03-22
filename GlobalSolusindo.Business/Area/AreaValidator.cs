using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Area
{
    public class AreaValidator : IValidator<AreaDTO>
    {
        public ModelValidationResult Validate(AreaDTO areaDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(areaDTO);
            return validator.ValidationResult;
        }
    }
}
