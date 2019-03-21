using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.AsetKategori
{
    public class AsetKategoriValidator : IValidator<AsetKategoriDTO>
    {
        public ModelValidationResult Validate(AsetKategoriDTO asetKategoriDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(asetKategoriDTO);
            return validator.ValidationResult;
        }
    }
}
