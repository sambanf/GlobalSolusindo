using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.BTS
{
    public class BTSValidator : IValidator<BTSDTO>
    {
        public ModelValidationResult Validate(BTSDTO btsDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(btsDTO);
            validator.ValidateForEach(btsDTO.BTSTechnologies, "BTSTechnologies");
            return validator.ValidationResult;
        }
    }
}
