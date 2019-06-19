using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.PO
{
    public class POValidator : IValidator<PODTO>
    {
        public ModelValidationResult Validate(PODTO pODTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(pODTO);
            return validator.ValidationResult;
        }
    }
}
