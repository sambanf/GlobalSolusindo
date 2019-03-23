using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Identity.KategoriJabatan
{
    public class KategoriJabatanValidator : IValidator<KategoriJabatanDTO>
    {
        public ModelValidationResult Validate(KategoriJabatanDTO kategoriJabatanDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(kategoriJabatanDTO);
            return validator.ValidationResult;
        }
    }
}
