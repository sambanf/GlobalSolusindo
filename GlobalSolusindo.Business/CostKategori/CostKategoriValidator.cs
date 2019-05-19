using Kairos.Data;
using Kairos.DataAnnotations;

namespace GlobalSolusindo.Business.CostKategori
{
    public class CostKategoriValidator : IValidator<CostKategoriDTO>
    {
        public ModelValidationResult Validate(CostKategoriDTO costKategoriDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(costKategoriDTO);
            return validator.ValidationResult;
        }
    }
}
