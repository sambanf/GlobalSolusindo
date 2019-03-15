using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Kairos.DataAnnotations
{
    public class UniqueAttribute : ValidationAttribute
    {
        private IUniqueQuery query;
        private string fieldNameSourceOfIdValue;
        bool ignoreEmptyString = false;

        public UniqueAttribute(Type iQuery, string fieldNameSourceOfIdValue, bool ignoreEmptyString = false)
        {
            this.query = Activator.CreateInstance(iQuery, null) as IUniqueQuery;
            this.fieldNameSourceOfIdValue = fieldNameSourceOfIdValue;
            this.ignoreEmptyString = ignoreEmptyString;
        }

        protected bool MustCheckDuplicate(object id, string memberName, string newValue)
        {
            var original = query.GetByPrimaryKey(id);
            if (original == null) return true;

            PropertyDescriptorCollection props = TypeDescriptor.GetProperties(original.GetType());
            newValue = string.IsNullOrEmpty(newValue) ? "" : newValue;
            var originalValue = string.IsNullOrEmpty(Convert.ToString(props[memberName].GetValue(original))) ? "" : props[memberName].GetValue(original).ToString();
            if (originalValue.ToUpper() != newValue.ToUpper())
                return true;

            return false;
        }

        protected bool IsDuplicate(object id, string fieldName, string newValue)
        {
            if (MustCheckDuplicate(id, fieldName, newValue))
            {
                if (query.CountBy(fieldName, newValue) > 0)
                {
                    return true;
                }
                return false;
            }
            return false;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var record = validationContext.ObjectInstance;
            PropertyDescriptorCollection props = TypeDescriptor.GetProperties(record.GetType());

            if (props[fieldNameSourceOfIdValue] == null) throw new KairosException("Invalid fieldname source.");
            var id = props[fieldNameSourceOfIdValue].GetValue(record);
            var newValue = props[validationContext.MemberName].GetValue(record);

            if (ignoreEmptyString && (newValue == null || newValue.ToString() == string.Empty))
            {
                return ValidationResult.Success;
            }
            newValue = newValue ?? string.Empty;

            if (IsDuplicate(id, validationContext.MemberName, newValue.ToString()))
            {
                var errorMessage = string.IsNullOrEmpty(this.ErrorMessage) ? "Duplicate entry." : this.ErrorMessage;
                return new ValidationResult(errorMessage, new List<string>() { validationContext.MemberName });
            }

            return ValidationResult.Success;
        }
    }
}
