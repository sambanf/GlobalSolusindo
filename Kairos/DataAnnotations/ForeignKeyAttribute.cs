using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Kairos.DataAnnotations
{
    public class ForeignKeyAttribute : ValidationAttribute
    {
        private IUniqueQuery uniqueQuery;
        private string referencedTablePrimaryKeyName;
        private bool allowNullOrZero;

        public ForeignKeyAttribute(Type uniqueQuery, string referencedTablePrimaryKeyName, bool allowNullOrZero = false)
        {
            this.uniqueQuery = Activator.CreateInstance(uniqueQuery, null) as IUniqueQuery;
            this.referencedTablePrimaryKeyName = referencedTablePrimaryKeyName;
            this.allowNullOrZero = allowNullOrZero;
        }

        protected bool RecordIsExist(string fieldName, string parameterValue)
        {
            if (uniqueQuery.CountBy(fieldName, parameterValue) > 0)
            {
                return true;
            }
            return false;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var record = validationContext.ObjectInstance;
            var memberName = validationContext.MemberName;
            PropertyDescriptorCollection props = TypeDescriptor.GetProperties(record.GetType());

            if (props[validationContext.MemberName] == null) throw new KairosException($"Foreign key with name '{memberName}' is not found or invalid. ");
            var fkValue = props[memberName].GetValue(record);

            var valueIsNullOrZero = (fkValue == null || fkValue.ToString() == "0");
            if (allowNullOrZero && valueIsNullOrZero)
            {
                return ValidationResult.Success; 
            }
            if (!allowNullOrZero && valueIsNullOrZero)
            {
                var errorMessage = string.IsNullOrEmpty(this.ErrorMessage) ? $"This field is required." : this.ErrorMessage;
                return new ValidationResult(errorMessage, new List<string>() { validationContext.MemberName });
            }

            if (!RecordIsExist(this.referencedTablePrimaryKeyName, fkValue.ToString()))
            {
                var errorMessage = string.IsNullOrEmpty(this.ErrorMessage) ? $"Referenced value '{fkValue}' is invalid. Probably the record is no longer exist." : this.ErrorMessage;
                return new ValidationResult(errorMessage, new List<string>() { validationContext.MemberName });
            }
            return ValidationResult.Success;
        }
    }
}
