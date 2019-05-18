using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.DeliveryArea
{
    public class DeliveryAreaValidator : IValidator<DeliveryAreaDTO>
    {
        public ModelValidationResult Validate(DeliveryAreaDTO deliveryAreaDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(deliveryAreaDTO);
            return validator.ValidationResult;
        }
    }
}
