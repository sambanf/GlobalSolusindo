using Kairos.Data;

namespace Kairos.DataAnnotations
{
    public interface IValidator<TModel>
    {
        ModelValidationResult Validate(TModel model);
    }
}
