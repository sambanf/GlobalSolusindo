using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Project
{
    public class ProjectValidator : IValidator<ProjectDTO>
    {
        public ModelValidationResult Validate(ProjectDTO projectDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(projectDTO);
            return validator.ValidationResult;
        }
    }
}
