using ClosedXML.Excel;
using System;
using System.IO;

namespace Kairos.Excel
{
    public class ExcelConverter
    {
        public static XLWorkbook FromBase64(string base64)
        {
            byte[] data = Convert.FromBase64String(base64);
            using (var ms = new MemoryStream(data))
            {
                XLWorkbook wb = new XLWorkbook(ms);
                return wb;
            }
        }
    }
}