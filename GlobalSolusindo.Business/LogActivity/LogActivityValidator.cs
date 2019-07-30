using Kairos.Data;
using Kairos.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business.LogActivity
{
    public class LogActivityValidator : IValidator<LogActivityDTO>
    {
        public ModelValidationResult Validate(LogActivityDTO logActivityDTO)
        {
            ModelValidator validator = new ModelValidator();

            validator.Validate(logActivityDTO);
            return validator.ValidationResult;
        }
    }
}
