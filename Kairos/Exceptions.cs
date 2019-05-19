using Kairos.Data;
using System;
using System.Runtime.Serialization;

namespace Kairos
{
    [Serializable]
    public class KairosException : Exception
    {
        public KairosException()
        {
        }

        public KairosException(string message) : base(message)
        {
        }

        public KairosException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected KairosException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }

    public class AccessException : KairosException
    {
        public AccessException()
        {
        }

        public AccessException(string message) : base(message)
        {
        }

        public AccessException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected AccessException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }

    public class CreateAccessException : AccessException
    {
        public CreateAccessException(string menuName)
            : base(string.Format("You don't have access to add new '{0}' data.", menuName))
        {
        }
        public CreateAccessException(int positionId)
          : base(string.Format("Auth position error: You don't have access to create this data."))
        {
        }
    }

    public class ReadAccessException : AccessException
    {
        public ReadAccessException(string menuName)
            : base(string.Format("You don't have access to read '{0}' data.", menuName))
        {
        }

        public ReadAccessException(int positionId)
           : base(string.Format("Auth position error: You don't have access to read this data."))
        {
        }
    }

    public class UpdateAccessException : AccessException
    {
        public UpdateAccessException(string menuName)
            : base(string.Format("You don't have access to update '{0}' data.", menuName))
        {
        }
        public UpdateAccessException(int positionId)
            : base(string.Format("Auth position error: You don't have access to update this data."))
        {
        }
    }

    public class DeleteAccessException : AccessException
    {
        public DeleteAccessException(string menuName)
            : base(string.Format("You don't have access to delete '{0}' data.", menuName))
        {
        }
        public DeleteAccessException(int positionId)
            : base(string.Format("Auth position error: You don't have access to delete this data."))
        {
        }
    }

    public class ModelValidationException : KairosException
    {
        public ModelValidationResult ValidationResult { get; set; }

        public ModelValidationException(ModelValidationResult validationResult) : base("Validation Errors.")
        {
            ValidationResult = validationResult;
        }
    }

    public class ValidationException : KairosException
    {
       public ModelValidationResult ValidationResult { get; private set; }

        public ValidationException(string message, ModelValidationResult validationResult) : base(message)
        {
            ValidationResult = validationResult;
        }
    }
}
