using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace Kairos.Imaging
{
    public class CSVConvert
    {
        public static MemoryStream GetStreamFromBase64(string base64string)
        {
            byte[] bytes = Convert.FromBase64String(base64string);

            MemoryStream ms = new MemoryStream(bytes);
            return ms;
        }

        public static byte[] GetByteFromBase64(string base64string)
        {
            byte[] bytes = Convert.FromBase64String(base64string);
            return bytes;
        }

        public static string GetBase64FromByte(byte[] bytes)
        {
            string base64 = Convert.ToBase64String(bytes);
            return base64;
        }
    }

    public class CSVConverter
    {
        private string basePath = "";
        private string baseUrl = "";

        List<string> acceptedFormat;

        public CSVConverter()
        {
            acceptedFormat = new List<string>();

            acceptedFormat.Add("csv");
        }

        public string GetFileStringFormat(string base64WebFormat)
        {
            return "csv";
            throw new KairosException("Invalid image format.");
        }

        public string GetBase64Only(string base64WebFormat)
        {
            base64WebFormat = base64WebFormat.Replace("data:application/vnd.ms-excel;base64,", "");

            return base64WebFormat;
        }

        private bool formatIsValid(string format)
        {
            format = format.Replace(".", "");
            bool isValid = false;

            foreach (var item in acceptedFormat)
            {
                if (item.ToUpper() == format.ToUpper())
                {
                    isValid = true;
                    break;
                }
            }

            if (!isValid)
                throw new FormatException("Format gambar hanya dalam bentuk: csv.");
            return isValid;
        }



        public Stream GetStreamFromBase64(string base64StringWebFormat)
        {
            string format = string.Empty;
            if (!string.IsNullOrEmpty(base64StringWebFormat))
            {
                format = GetFileStringFormat(base64StringWebFormat);

                if (formatIsValid(format))
                {
                    var base64Only = GetBase64Only(base64StringWebFormat);
                    var stream = CSVConvert.GetStreamFromBase64(base64Only);
                    return stream;
                }
            }
            return null;
        }

        public string GetBase64FromBytes(byte[] bytes)
        {
            if (bytes == null)
                return string.Empty;

            var base64 = ImageConvert.GetBase64FromByte(bytes);
            var base64WebFormat = "data:image/jpeg;base64," + base64;
            return base64WebFormat;
        }
    }
}
