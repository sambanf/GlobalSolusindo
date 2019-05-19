using System.ComponentModel.DataAnnotations;

namespace Kairos.DataAnnotations
{
    public class PhoneNumberAttribute : ValidationAttribute
    {
        bool ignoreEmpty = true;

        public PhoneNumberAttribute(bool ignoreEmpty = false)
        {
            this.ignoreEmpty = ignoreEmpty;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (ignoreEmpty && (value == null || value.ToString() == string.Empty))
            {
                return ValidationResult.Success;
            }

            var result = new PhoneAttribute();
            var errorMessage = string.IsNullOrEmpty(this.ErrorMessage) ? $"Invalid phone number." : this.ErrorMessage;
            result.ErrorMessage = errorMessage;

            return result.GetValidationResult(value, validationContext);
        }
    }
}
