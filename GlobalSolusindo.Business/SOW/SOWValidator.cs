using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWValidator : IValidator<SOWDTO>
    {
        public ModelValidationResult Validate(SOWDTO sowDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowDTO);
            validator.ValidateForEach(sowDTO.SOWAssigns, "sowAssigns", "SOW_FK");
            return validator.ValidationResult;
        }
    }
}
