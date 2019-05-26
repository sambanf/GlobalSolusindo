using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorValidator : IValidator<VendorDTO>
    {
        public ModelValidationResult Validate(VendorDTO vendorDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(vendorDTO);
            return validator.ValidationResult;
        }
    }
}
