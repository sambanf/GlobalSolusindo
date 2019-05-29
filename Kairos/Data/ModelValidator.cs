using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Kairos.Data
{
    public class AttemptedValue
    {
        public AttemptedValue(object value)
        {
            Value = value;
        }

        [JsonProperty("value")]
        public object Value { get; set; }

        [JsonProperty("type")]
        public string Type
        {
            get
            {
                if (Value != null)
                {
                    return Value.GetType().FullName;
                }
                return "null";
            }
        }
    }

    public class ModelValidator
    {
        public ModelValidationResult ValidationResult { get; private set; }

        public ModelValidator()
        {
            this.ValidationResult = new ModelValidationResult();
        }

        private List<ValidationError> GetErrors(object model, params string[] ignores)
        {
            List<ValidationError> validationErrors = new List<ValidationError>();
            var validationContext = new ValidationContext(model);
            var validationResults = new List<ValidationResult>();
            var validationResultIsValid = Validator.TryValidateObject(model, validationContext, validationResults, true);

            foreach (var validationResult in validationResults)
            {
                var skipByIgnore = false;
                foreach (var ignore in ignores)
                {
                    if (validationResult.MemberNames.First() == ignore)
                    {
                        skipByIgnore = true;
                        break;
                    }
                }

                var skip = false;
                foreach (var error in validationErrors)
                {
                    var errorIsExist = error.PropertyName == validationResult.MemberNames.First();
                    if (errorIsExist)
                    {
                        skip = true;
                        break;
                    }

                }
                if (!skip && !skipByIgnore)
                {
                    var value = validationContext.ObjectInstance.GetValueByPropertyName(validationResult.MemberNames.First());
                    validationErrors.Add(new ValidationError(validationResult.MemberNames.First(), validationResult.ErrorMessage, new AttemptedValue(value)));
                }
            }

            return validationErrors;
        }

        /// <summary>
        /// Validate single model
        /// </summary>
        /// <param name="model"></param>
        public void Validate(object model, params string[] ignores)
        {
            var fieldErrors = GetErrors(model, ignores);
            if (fieldErrors.Count > 0)
            {
                ValidationResult.Errors = fieldErrors;
            }
            ValidationResult.SetModel(model);
        }

        /// <summary>
        /// Validate multiple model. Contoh validasi list / tabel
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="listOfObject"></param>
        /// <param name="propertyName"></param>
        public void ValidateForEach<T>(List<T> listOfObject, string propertyName, params string[] ignores)
        {

            if (listOfObject == null) return;

            var index = 0;

            foreach (var obj in listOfObject)
            {
                var validationErrors = GetErrors(obj, ignores);

                if (validationErrors.Count > 0)
                {
                    AddErrorToValidationResultIfThereIsNone(propertyName, listOfObject);
                    foreach (var error in ValidationResult.Errors)
                    {
                        if (error.PropertyName == propertyName)
                        {
                            var errors = new List<ValidationError>();
                            foreach (var item in validationErrors)
                            {
                                errors.Add(item);
                            }
                            if (errors.Count > 0)
                            {
                                error.SubErrors.Add(new IndexedValidationError(index)
                                {
                                    Errors = errors
                                });
                            }
                        }
                    }
                }
                index += 1;
            }
        }

        private void AddErrorToValidationResultIfThereIsNone(string propertyName, object value)
        {
            if (ValidationResult.Errors.Count == 0)
            {
                ValidationResult.Errors.Add(new ValidationError(propertyName, "Please correct sub errors.", new AttemptedValue(value)));
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
                ValidationResult.Errors.Add(new ValidationError(propertyName, "Please correct sub errors.", new AttemptedValue(value)));
        }
    }
}
