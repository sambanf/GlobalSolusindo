using GlobalSolusindo.Business.SOW.DML;
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
            validator.ValidateForEach(sowDTO.SOWTracks, "sowTracks", "SOW_FK");
            return validator.ValidationResult;
        }

        public ModelValidationResult ValidateApprovalModel(SOWApprovalDTO sowApprovalDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowApprovalDTO); 
            return validator.ValidationResult;
        }
    }
}
