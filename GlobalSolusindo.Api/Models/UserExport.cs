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

namespace GlobalSolusindo.Api.Models
{

    public class UserExport
    {
        protected string _sheetName;
        protected string _fileName;

        protected IWorkbook _workbook;

        private const string DefaultSheetName = "Sheet1";

        public HttpResponseMessage Export(GlobalSolusindoDb Db, string fileName, UserSearchFilter filter)
        {
            _fileName = fileName;
            _workbook = new XSSFWorkbook(); //Creating New Excel object

            using (var userSearch = new UserSearch(Db))
            {
                var data = userSearch.GetDataByFilter(filter);
                var dataExport = data.Records.Select(c => new UserExportDTO
                { 
                    JoinDate = c.JoinDate,
                    UserName = c.Username,
                    KategoriJabatanTitle = c.KategoriJabatanTitle,
                    Name = c.Name,
                    TglLahir = c.TglLahir,
                    NoKTP = c.NoKTP,
                    ReligionName = c.Religion,//?
                    CategoryContract = c.CategoryContract,//?
                    Project = c.Project,//?
                    Gender = c.Gender,//?
                    MartialStatus = c.MaritalStatus,//?
                    NPWP = c.NPWP,//?
                    BPJS = c.BPJS,//?
                    ContactNumber = c.NoHP,
                    G1EmailID = c.Email,
                    PersonalEmail = c.PersonalEmail,
                    Address = c.Address,
                    NamaBank = c.BankName,//?
                    NoRekening = c.AccountNumber,//?
                    Salary = c.Salary,//?
                    Remark = c.Description,//?
                    Status = null//?

                }).ToList();


                WriteSheetData(dataExport, "UserUpload");
            }

            using (var jabatanQry = new KategoriJabatanQuery())
            {
                var data = jabatanQry.GetQuery().Select(c => new LOVDTO { Id = c.KategoriJabatan_PK, Name = c.Title }).ToList();
                WriteSheetData(data, "Position");
            }
            //_workbook.Close();

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

        public void WriteSheetData<T>(List<T> exportData, string sheetName = DefaultSheetName)
        {
            List<string> _headers = new List<string>();
            List<string> _type = new List<string>();
            ISheet _sheet = _workbook.CreateSheet(sheetName); //Creating New Excel Sheet object

            var headerStyle = _workbook.CreateCellStyle(); //Formatting
            var headerFont = _workbook.CreateFont();
            headerFont.IsBold = true;
            headerFont.FontName = "Calibri";
            headerFont.FontHeight = 16;
            headerStyle.SetFont(headerFont);

            #region Create Header
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            foreach (PropertyDescriptor prop in properties)
            {
                var type = Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType;
                _type.Add(type.Name);
                string name = Regex.Replace(prop.Name, "([A-Z])", " $1").Trim(); //space separated 
                                                                                 //name by caps for header
                _headers.Add(name);
            }
            var header = _sheet.CreateRow(0);
            for (var i = 0; i < _headers.Count; i++)
            {
                var cell = header.CreateCell(i);
                cell.SetCellValue(_headers[i]);
                //cell.CellStyle = headerStyle;

            }


            #endregion
            #region write data
            IRow sheetRow = null;

            for (int i = 0; i < exportData.Count; i++)
            {
                sheetRow = _sheet.CreateRow(i + 1);

                for (int j = 0; j < properties.Count; j++)
                {

                    ICell Row1 = sheetRow.CreateCell(j);

                    string type = (Nullable.GetUnderlyingType(properties[j].PropertyType) ?? properties[j].PropertyType).Name.ToLower();
                    var currentCellValue = exportData[i].GetType().GetProperty(properties[j].Name).GetValue(exportData[i], null);

                    if (currentCellValue != null &&
                        !string.IsNullOrEmpty(Convert.ToString(currentCellValue)))
                    {
                        if (type == "string")
                        {
                            Row1.SetCellValue(Convert.ToString(currentCellValue));
                        }
                        else if (type == "int32")
                        {
                            Row1.SetCellValue(Convert.ToInt32(currentCellValue));
                        }
                        else if (type == "double")
                        {
                            Row1.SetCellValue(Convert.ToDouble(currentCellValue));
                        }
                    }
                    else
                    {
                        Row1.SetCellValue(string.Empty);
                    }
                }
            }
            #endregion
            for (var i = 0; i < _headers.Count; i++)
            {
                _sheet.AutoSizeColumn(i);
            }

        }

    }
}