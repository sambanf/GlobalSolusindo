using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWTrack
{
    public class SOWTrackValidator : IValidator<SOWTrackDTO>
    {
        public ModelValidationResult Validate(SOWTrackDTO sowTrackDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowTrackDTO);
            return validator.ValidationResult;
        }
    }
}
