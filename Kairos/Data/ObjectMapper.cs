using Newtonsoft.Json;
using System;
using System.ComponentModel;
using System.Linq;

namespace Kairos.Data
{
    public static class ObjectMapper
    {
        private static string[] skippedProperties = new string[]
        {
            "ID",
            "Id",
            "id",
            "CreatedBy",
            "CreatedDate",
            "UpdatedBy",
            "UpdatedDate"
        };

        public static T ToObject<T>(this object source)
        {
            var jsonString = JsonConvert.SerializeObject(source);
            return JsonConvert.DeserializeObject<T>(jsonString);

            //var jsonString = JsonConvert.SerializeObject(source);
            //var json = JsonConvert.DeserializeObject<T>(jsonString);
            //return json.ToObject<T>();
        }

        public static void UpdateValueFrom<T>(this object target, T source, params string[] ignores) where T : class
        {
            var targetProps = TypeDescriptor.GetProperties(target.GetType());
            var sourceProps = TypeDescriptor.GetProperties(source.GetType());

            foreach (PropertyDescriptor propTarget in targetProps)
            {
                foreach (PropertyDescriptor propSource in sourceProps)
                {
                    var skip = false;
                    foreach (var ignored in ignores)
                    {
                        if (propTarget.Name == ignored)
                            skip = true;
                    }
                    if (skip)
                        continue;

                    if (skippedProperties.Contains(propTarget.Name))
                        continue;

                    if (propTarget.Name == propSource.Name)
                    {
                        if (propSource.PropertyType.Name == "DateTime" && propTarget.PropertyType.Name == "String")
                        {
                            propTarget.SetValue(target, propSource.GetValue(source).ToString());
                            continue;
                        }
                        if (propSource.PropertyType.Name == "String" && propTarget.PropertyType.Name == "DateTime")
                        {
                            var dateString = propSource.GetValue(source).ToString();
                            if (string.IsNullOrEmpty(dateString))
                            { 
                                throw new Exception($"{propTarget.Name} has an invalid value.");
                            }
                            propTarget.SetValue(target, DateTime.Parse(dateString));
                            continue;
                        }
                        propTarget.SetValue(target, propSource.GetValue(source));
                    }
                }
            }
        }
    }
}
