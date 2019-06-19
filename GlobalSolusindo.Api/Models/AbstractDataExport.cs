using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace GlobalSolusindo.Api.Models
{
    public interface IAbstractDataExport
    {
        HttpResponseMessage Export<T>(List<T> exportData, string fileName, string sheetName);
    }

    public abstract class AbstractDataExport : IAbstractDataExport
    {
        protected string _sheetName;
        protected string _fileName;
        protected List<string> _headers;
        protected List<string> _type;
        protected IWorkbook _workbook;
        protected ISheet _sheet;
        private const string DefaultSheetName = "Sheet1";

        public HttpResponseMessage Export<T>(List<T> exportData, string fileName, string sheetName = DefaultSheetName)
        {
            _fileName = fileName;
            _sheetName = sheetName;

            _workbook = new XSSFWorkbook(); //Creating New Excel object
            _sheet = _workbook.CreateSheet(_sheetName); //Creating New Excel Sheet object

            var headerStyle = _workbook.CreateCellStyle(); //Formatting
            var headerFont = _workbook.CreateFont();
            headerFont.FontHeightInPoints = 11;
            headerFont.FontName = "Calibri";
            headerFont.IsBold = true;
            headerStyle.SetFont(headerFont);

            WriteData(exportData); //your list object to NPOI excel conversion happens here

            //Header
            var header = _sheet.CreateRow(0);
            for (var i = 0; i < _headers.Count; i++)
            {
                var cell = header.CreateCell(i);
                cell.SetCellValue(_headers[i]);
                cell.CellStyle = headerStyle;
            }

            for (var i = 0; i < _headers.Count; i++)
            {
                _sheet.AutoSizeColumn(i);
            }
            _sheet.SetColumnHidden(0, true);
            _sheet.SetColumnHidden(30, true);
            _sheet.SetColumnHidden(31, true);
            _sheet.SetColumnHidden(32, true);
            _sheet.SetColumnHidden(33, true);
            _sheet.SetColumnHidden(34, true);

            using (var memoryStream = new MemoryStream()) //creating memoryStream
            {
                _workbook.Write(memoryStream);
                var response = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new ByteArrayContent(memoryStream.ToArray())
                };

                response.Content.Headers.ContentType = new MediaTypeHeaderValue
                       ("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                response.Content.Headers.ContentDisposition =
                       new ContentDispositionHeaderValue("attachment")
                       {
                           FileName = $"{_fileName}_{DateTime.Now.ToString("yyyyMMddHHmmss")}.xlsx"
                       };

                return response;
            }
        }

        //Generic Definition to handle all types of List
        public abstract void WriteData<T>(List<T> exportData);
    }
}