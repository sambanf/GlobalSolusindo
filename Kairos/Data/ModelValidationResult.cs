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

        [JsonProperty("attemptedValue")]
        public AttemptedValue AttemptedValue { get; set; }

        [JsonProperty("subErrors")]
        public List<IndexedValidationError> SubErrors { get; set; }

        public ValidationError(string propertyName, string errorMessage, AttemptedValue attemptedValue)
        {
            PropertyName = propertyName;
            Message = errorMessage;
            AttemptedValue = attemptedValue;
            SubErrors = new List<IndexedValidationError>();
        }
    }

    public class IndexedValidationError
    {
        [JsonProperty("index")]
        public int Index { get; set; }

        [JsonProperty("errors")]
        public List<ValidationError> Errors { get; set; } = new List<ValidationError>();

        public IndexedValidationError(int index)
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

        private object _model { get; set; }

        public object GetModel()
        {
            return _model;
        }

        public void SetModel(object model)
        {
            _model = model;
        }

        public ModelValidationResult()
        {
            Errors = new List<ValidationError>();
        }
    }
}
