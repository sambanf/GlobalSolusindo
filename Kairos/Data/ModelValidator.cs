using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Kairos.Data
{
    public class ModelValidator
    {
        public ModelValidationResult ValidationResult { get; private set; }

        public ModelValidator()
        {
            this.ValidationResult = new ModelValidationResult();
        }

        private List<ValidationError> GetErrors(object model)
        {
            List<ValidationError> validationErrors = new List<ValidationError>();
            var validationContext = new ValidationContext(model);
            var validationResults = new List<ValidationResult>();
            var validationResultIsValid = Validator.TryValidateObject(model, validationContext, validationResults, true);

            foreach (var validationResult in validationResults)
            {
                var skip = false;
                foreach (var error in validationErrors)
                {
                    if (error.PropertyName == validationResult.MemberNames.First())
                    {
                        skip = true;
                        break;
                    }
                }
                if (!skip)
                    validationErrors.Add(new ValidationError(validationResult.MemberNames.First(), validationResult.ErrorMessage));
            }

            return validationErrors;
        }

        /// <summary>
        /// Validate single model
        /// </summary>
        /// <param name="model"></param>
        public void Validate(object model)
        {
            var fieldErrors = GetErrors(model);
            if (fieldErrors.Count > 0)
            {
                ValidationResult.Errors = fieldErrors;
            }
        }

        /// <summary>
        /// Validate multiple model. Contoh validasi list / tabel
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="listOfObject"></param>
        /// <param name="propertyName"></param>
        public void ValidateForEach<T>(List<T> listOfObject, string propertyName)
        {
            if (listOfObject == null) return;

            var index = 0;

            foreach (var obj in listOfObject)
            {
                var validationErrors = GetErrors(obj);

                if (validationErrors.Count > 0)
                {
                    AddErrorToValidationResultIfThereIsNone(propertyName);

                    foreach (var error in ValidationResult.Errors)
                    {
                        if (error.PropertyName == propertyName)
                            error.SubErrors.Add(new IndexedValidationError(index, error.PropertyName, error.Message));
                    }
                }
                index += 1;
            }
        }

        private void AddErrorToValidationResultIfThereIsNone(string propertyName)
        {
            if (ValidationResult.Errors.Count == 0)
            {
                ValidationResult.Errors.Add(new ValidationError(propertyName, "Please correct sub errors."));
                return;
            }

            bool errorIsExist = false;
            foreach (var error in ValidationResult.Errors)
            {
                if (error.PropertyName == propertyName)
                {
                    errorIsExist = true;
                    break;
                }
            }

            if (!errorIsExist)
                ValidationResult.Errors.Add(new ValidationError(propertyName, "Please correct sub errors."));
        }
    }
}
