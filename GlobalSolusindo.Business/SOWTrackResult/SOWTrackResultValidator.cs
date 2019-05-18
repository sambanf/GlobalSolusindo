using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultValidator : IValidator<SOWTrackResultDTO>
    {
        public ModelValidationResult Validate(SOWTrackResultDTO sowTrackResultDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowTrackResultDTO);
            return validator.ValidationResult;
        }
    }
}
