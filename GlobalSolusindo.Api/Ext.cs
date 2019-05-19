using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;

namespace GlobalSolusindo.Api
{
    public static class ModelValidationResultExtension
    {
        public static ModelValidationResult ConvertToModelValidationResult(this DbEntityValidationException exception)
        {
            ModelValidationResult modelValidationResult = new ModelValidationResult();

            foreach (var validationResult in exception.EntityValidationErrors)
            {
                foreach (var error in validationResult.ValidationErrors)
                {
                    var originalMessage = error.ErrorMessage;
                    var modifiedMessage = originalMessage;
                    if (originalMessage.Contains("maximum length of"))
                    {
                        modifiedMessage = HandleMaximumLengthError(originalMessage);
                    }
                    ValidationError validationError = new ValidationError(error.PropertyName, modifiedMessage, null);
                    modelValidationResult.Errors.Add(validationError);
                }
            }
            return modelValidationResult;
        }

        private static string HandleMaximumLengthError(string originalMessage)
        { 
            var modifiedMessage = originalMessage;
            var arr = originalMessage.Split('\'');
            if (arr.Count() >= 1)
            {
                var maxNumberString = arr[1];
                var isNumber = int.TryParse(maxNumberString, out int maxNumber);
                if (isNumber)
                {
                    modifiedMessage = $"Maximum character for this field is '{maxNumber}'.";
                } 
            }

            return modifiedMessage;
        }
    }
}