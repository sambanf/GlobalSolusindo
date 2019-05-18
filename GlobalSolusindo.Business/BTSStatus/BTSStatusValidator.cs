using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.BTSStatus
{
    public class BTSStatusValidator : IValidator<BTSStatusDTO>
    {
        public ModelValidationResult Validate(BTSStatusDTO btsStatusDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(btsStatusDTO);
            return validator.ValidationResult;
        }
    }
}
