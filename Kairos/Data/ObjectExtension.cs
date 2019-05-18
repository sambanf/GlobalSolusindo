using System;
using System.ComponentModel;

namespace Kairos.Data
{
    public static class ObjectExtension
    {
        public static object GetValueByPropertyName<T>(this T obj, string propertyName) where T : class
        {
            var sourceProps = TypeDescriptor.GetProperties(obj.GetType());

            foreach (PropertyDescriptor propSource in sourceProps)
            {
                if (propertyName == propSource.Name)
                {
                    var value = propSource.GetValue(obj);
                    return value;
                }
            }

            throw new Exception($"Property name: '{propertyName}' is not found");
        }
    }
}
