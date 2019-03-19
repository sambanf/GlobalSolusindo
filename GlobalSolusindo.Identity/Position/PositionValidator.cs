using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.Position
{
    public class PositionValidator : IValidator<PositionDTO>
    {
        public ModelValidationResult Validate(PositionDTO positionDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(positionDTO);
            return validator.ValidationResult;
        }
    }
}
