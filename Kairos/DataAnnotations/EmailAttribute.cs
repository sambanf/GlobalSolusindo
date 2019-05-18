using System.ComponentModel.DataAnnotations;

namespace Kairos.DataAnnotations
{
    public class EmailAttribute : ValidationAttribute
    {
        bool ignoreEmpty = true;

        public EmailAttribute(bool ignoreEmpty = false)
        {
            this.ignoreEmpty = ignoreEmpty;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (ignoreEmpty && (value == null || value.ToString() == string.Empty))
            {
                return ValidationResult.Success;
            }
             
            var result = new EmailAddressAttribute();
            var errorMessage = string.IsNullOrEmpty(this.ErrorMessage) ? $"Invalid email address." : this.ErrorMessage;
            result.ErrorMessage = errorMessage;

            return result.GetValidationResult(value, validationContext);
        }
    }
}
