using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Technology
{
    public class TechnologyValidator : IValidator<TechnologyDTO>
    {
        public ModelValidationResult Validate(TechnologyDTO technologyDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(technologyDTO);
            return validator.ValidationResult;
        }
    }
}
