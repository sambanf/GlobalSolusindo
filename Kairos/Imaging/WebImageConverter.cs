using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace Kairos.Imaging
{
    public class ImageConvert
    {
        public static Image FromBase64AsImage(string base64string)
        {
            byte[] bytes = Convert.FromBase64String(base64string);

            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
            }

            return image;
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

    public class WebImageConverter
    {
        private string basePath = "";
        private string baseUrl = "";

        List<string> acceptedFormat;

        public WebImageConverter()
        {
            acceptedFormat = new List<string>();

            acceptedFormat.Add("jpg");
            acceptedFormat.Add("jpeg");
            acceptedFormat.Add("png");
            acceptedFormat.Add("bmp");
        }

        public string GetImageStringFormat(string base64WebFormat)
        {
            if (base64WebFormat.Contains("data:image/jpeg;base64"))
            {
                return "jpeg";
            }

            if (base64WebFormat.Contains("data:image/png;base64"))
            {
                return "png";
            }

            if (base64WebFormat.Contains("data:image/bmp;base64"))
            {
                return "bmp";
            }

            if (base64WebFormat.Contains("data:image/jpg;base64"))
            {
                return "jpg";
            }
            throw new KairosException("Invalid image format.");
        }

        public string GetBase64Only(string base64WebFormat)
        {
            if (base64WebFormat.Contains("data:image/jpeg;base64"))
            {
                return base64WebFormat.Replace("data:image/jpeg;base64,", "");
            }

            if (base64WebFormat.Contains("data:image/png;base64"))
            {
                return base64WebFormat.Replace("data:image/png;base64,", "");
            }

            if (base64WebFormat.Contains("data:image/bmp;base64"))
            {
                return base64WebFormat.Replace("data:image/bmp;base64,", "");
            }

            if (base64WebFormat.Contains("data:image/jpg;base64"))
            {
                return base64WebFormat.Replace("data:image/jpg;base64,", "");
            }
            return base64WebFormat;
        }

        public ImageFormat GetImageFormat(string format)
        {
            ImageFormat imageFormat = null;

            switch (format.ToLower())
            {
                case "png":
                    imageFormat = ImageFormat.Png;
                    break;
                case "jpeg":
                    imageFormat = ImageFormat.Jpeg;
                    break;
                case "jpg":
                    imageFormat = ImageFormat.Jpeg;
                    break;
                case "bmp":
                    imageFormat = ImageFormat.Bmp;
                    break;
                default:
                    throw new KairosException("Invalid image format");
            }

            return imageFormat;
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
                throw new FormatException("Format gambar hanya dalam bentuk: jpg, png atau bmp.");
            return isValid;
        }

        public Image GetImageFromBase64(string base64String, bool validateImageFormat = true)
        {
            string format = string.Empty;
            if (!string.IsNullOrEmpty(base64String))
            {
                if (validateImageFormat)
                    format = GetImageStringFormat(base64String);

                if (validateImageFormat)
                    if (formatIsValid(format))
                    {
                        return ImageConvert.FromBase64AsImage(base64String);

                    }
                return ImageConvert.FromBase64AsImage(base64String);
            }
            return null;
        }

        public byte[] GetBytesFromBase64(string base64StringWebFormat, bool validateImageFormat = true)
        {
            string format = string.Empty;
            if (!string.IsNullOrEmpty(base64StringWebFormat))
            {
                if (validateImageFormat)
                    format = GetImageStringFormat(base64StringWebFormat);

                if (validateImageFormat)
                    if (formatIsValid(format))
                    {
                        return ImageConvert.GetByteFromBase64(GetBase64Only(base64StringWebFormat)); 
                    }

                var base64Only = GetBase64Only(base64StringWebFormat);
                byte[] bytes = ImageConvert.GetByteFromBase64(base64Only);
                return bytes;
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
