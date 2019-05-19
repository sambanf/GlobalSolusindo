using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.BTSTechnology
{
    public class BTSTechnologyValidator : IValidator<BTSTechnologyDTO>
    {
        public ModelValidationResult Validate(BTSTechnologyDTO btsTechnologyDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(btsTechnologyDTO);
            return validator.ValidationResult;
        }
    }
}
