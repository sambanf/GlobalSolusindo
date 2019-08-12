using ClosedXML.Excel;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.Business.Operator;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.RegularExpressions;
using System.Web;
using GlobalSolusindo.Identity;
using System.Globalization;
using GlobalSolusindo.Business.Activities.Queries;
using GlobalSolusindo.Business.Activities;

namespace GlobalSolusindo.Api.Models
{

    public class ActivityExport
    {
        protected string _sheetName;
        protected string _fileName;

        public HttpResponseMessage Export(GlobalSolusindoDb Db, tblM_User user, string fileName, ActivitiesSearchFilter filter, ActivitiesSearchResult result)
        {
            _fileName = fileName;
            //CREATE WORKBOOK
            var workbook = new XLWorkbook();
            DataTable Activity = new DataTable("Activity"); //DataTable Name = Worksheet Name
            ActivityDTO obj = new ActivityDTO();
            //Setup Column Names
            foreach (var item in obj.GetType().GetProperties())
            {
                Activity.Columns.Add(item.Name);
            }
            DataRow row;
            var data = result.Records;
            int no = 1;
            foreach (var item in data)
            {
                row = Activity.NewRow();
                row["No"] = no++;
                row["Tanggal"] = item.Tanggal;
                row["CheckInTime"] = item.CheckInTime;
                row["CheckOutTime"] = item.CheckOutTime;
                row["Aktifitas"] = item.Aktifitas;
                Activity.Rows.Add(row);
            }
            workbook.AddWorksheet(Activity);


            //Validation Table


            MemoryStream memoryStream = GetStream(workbook);
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

        private MemoryStream GetStream(XLWorkbook excelWorkbook)
        {
            MemoryStream fs = new MemoryStream();
            excelWorkbook.SaveAs(fs);
            fs.Position = 0;
            return fs;
        }

        private int getDayBeetween(DateTime date1, DateTime date2)
        {
            DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
            Calendar cal = dfi.Calendar;
            return (cal.GetDayOfYear(date1) - cal.GetDayOfYear(date2));
        }
    }
}