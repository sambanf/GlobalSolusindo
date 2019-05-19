using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.SOWIssue
{
    public class SOWIssueValidator : IValidator<SOWIssueDTO>
    {
        public ModelValidationResult Validate(SOWIssueDTO sowIssueDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(sowIssueDTO);
            return validator.ValidationResult;
        }
    }
}
