using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Product
{
    public class ProductValidator : IValidator<ProductDTO>
    {
        public ModelValidationResult Validate(ProductDTO productDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(productDTO);
            return validator.ValidationResult;
        }
    }
}
