using Newtonsoft.Json;
using System.Collections.Generic;

namespace Kairos.Data
{
    /// <summary>
    /// Validation Error { FieldName : "Password", Message: "Required" }
    /// </summary>
    public class ValidationError
    {
        [JsonProperty("propertyName")]
        public string PropertyName { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("subErrors")]
        public List<IndexedValidationError> SubErrors { get; set; }

        public ValidationError(string propertyName, string errorMessage)
        {
            PropertyName = propertyName;
            Message = errorMessage;
            SubErrors = new List<IndexedValidationError>();
        }
    }

    public class IndexedValidationError : ValidationError
    {
        [JsonProperty("index")]
        public int Index { get; set; }

        public IndexedValidationError(int index, string propertyName, string errorMessage) : base(propertyName, errorMessage)
        {
            Index = index;
        }
    }

    /// <summary>
    /// Model error. { FieldErrors: [ {FieldName : "Id", Message: "Must be greater than zero"},  {FieldName : "Code", Message: "Required"}]}
    /// </summary>
    public class ModelValidationResult
    {
        [JsonProperty("errors")]
        public List<ValidationError> Errors { get; set; }

        [JsonProperty("isValid")]
        public bool IsValid
        {
            get
            {
                //TODO: Check error count recursively against suberrors
                if (Errors.Count > 0)
                    return false;
                //if (FieldErrors.Count > 0 || SubErrors.Count > 0)
                //    return false;

                return true;
            }
        }

        public ModelValidationResult()
        {
            Errors = new List<ValidationError>();
        }
    } 
}
