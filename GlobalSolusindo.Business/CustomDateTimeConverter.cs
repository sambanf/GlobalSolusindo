using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Business
{
    public class CustomDateTimeConverter : DateTimeConverterBase
    {
        private CultureInfo cultureInfo;
        private TimeZoneInfo _timeZoneInfo;
        private string _dateFormat;

        public CustomDateTimeConverter()
        {
            cultureInfo = new CultureInfo("id-ID");
            string shortUsDateFormatString = cultureInfo.DateTimeFormat.ShortDatePattern;

            _dateFormat = shortUsDateFormatString.Replace('/', '-');
            _timeZoneInfo = TimeZoneInfo.Local;
        }
        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(DateTime);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var datetime = Convert.ToDateTime(value);
            if (datetime.Kind == DateTimeKind.Local)
                writer.WriteValue(datetime);
            //writer.WriteValue(datetime.ToLocalTime());
            else
                writer.WriteValue(TimeZoneInfo.ConvertTimeFromUtc(datetime, _timeZoneInfo).ToString(_dateFormat));

            writer.Flush();
        }
    }
}
