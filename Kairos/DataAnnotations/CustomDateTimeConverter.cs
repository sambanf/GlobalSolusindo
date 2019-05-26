//using Newtonsoft.Json;
//using Newtonsoft.Json.Converters;
//using System;
//using System.Globalization;

//namespace Kairos.DataAnnotations
//{
//    public class CustomDateTimeConverter : DateTimeConverterBase
//    {
//        private CultureInfo cultureInfo;
//        private TimeZoneInfo _timeZoneInfo;
//        private string _dateFormat;

//        public CustomDateTimeConverter()
//        {
//            cultureInfo = new CultureInfo("id-ID");
//            string shortUsDateFormatString = cultureInfo.DateTimeFormat.ShortDatePattern;

//            _dateFormat = shortUsDateFormatString.Replace('/', '-');
//            _timeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");

//        }
//        public override bool CanConvert(Type objectType)
//        {
//            return objectType == typeof(DateTime);
//        }

//        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
//        {
//            throw new NotImplementedException();
//        }

//        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
//        {
//            writer.WriteValue(TimeZoneInfo.ConvertTimeFromUtc(Convert.ToDateTime(value), _timeZoneInfo).ToString(_dateFormat));
//            writer.Flush();
//        }
//    }
//} 