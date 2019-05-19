using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.IssueType
{
    public class IssueTypeValidator : IValidator<IssueTypeDTO>
    {
        public ModelValidationResult Validate(IssueTypeDTO issueTypeDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(issueTypeDTO);
            return validator.ValidationResult;
        }
    }
}
