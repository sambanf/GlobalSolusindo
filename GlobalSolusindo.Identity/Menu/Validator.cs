using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuValidator : IValidator<MenuDTO>
    {
        public ModelValidationResult Validate(MenuDTO menuDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(menuDTO);
            return validator.ValidationResult;
        }
    }
}
