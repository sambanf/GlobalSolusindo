using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Cost
{
    public class CostValidator : IValidator<CostDTO>
    {
        public ModelValidationResult Validate(CostDTO costDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(costDTO);
            return validator.ValidationResult;
        }
    }
}
