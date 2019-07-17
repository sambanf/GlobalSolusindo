using ClosedXML.Excel;
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

        public HttpResponseMessage Export(GlobalSolusindoDb Db, string fileName, UserSearchFilter filter)
        {
            _fileName = fileName;
            _workbook = new XSSFWorkbook(); //Creating New Excel object
            var workbook = new XLWorkbook();
            using (var userSearch = new UserSearch(Db))
            {
                var data = userSearch.GetDataByFilter(filter);
                var dataExport = data.Records.Select(c => new UserExportDTO
                { 
                    Nomor = c.User_PK,
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
                
                DataTable user = new DataTable("UserUpload");
                UserExportDTO obj = new UserExportDTO();
                foreach (var item in obj.GetType().GetProperties())
                {
                    user.Columns.Add(item.Name);
                }
                DataRow dr;
                foreach (var item in dataExport)
                {
                    dr = user.NewRow();
                    dr["Nomor"] = item.Nomor;
                    dr["UserName"] = item.UserName;
                    dr["KategoriJabatanTitle"] = item.KategoriJabatanTitle;
                    dr["Name"] = item.Name;
                    dr["TglLahir"] = item.TglLahir;
                    dr["NoKTP"] = item.NoKTP;
                    dr["ReligionName"] = item.ReligionName;
                    dr["CategoryContract"] = item.CategoryContract;
                    dr["Project"] = item.Project;
                    dr["Gender"] = item.Gender;
                    dr["MartialStatus"] = item.MartialStatus;
                    dr["NPWP"] = item.NPWP;
                    dr["BPJS"] = item.BPJS;
                    dr["JoinDate"] = item.JoinDate;
                    dr["ContactNumber"] = item.ContactNumber;
                    dr["G1EmailID"] = item.G1EmailID;
                    dr["PersonalEmail"] = item.PersonalEmail;
                    dr["Address"] = item.Address;
                    dr["NamaBank"] = item.NamaBank;
                    dr["NoRekening"] = item.NoRekening;
                    dr["Salary"] = item.Salary;
                    dr["Remark"] = item.Remark;
                    dr["Status"] = item.Status;
                    user.Rows.Add(dr);

                }
                workbook.AddWorksheet(user);
                var worksheet = workbook.Worksheet(1);
                worksheet.Columns().Width = 15;
                using (var jabatanQry = new KategoriJabatanQuery())
                {
                    //SETUP TABLE
                    DataTable validationTable = new DataTable();
                    validationTable.TableName = "Kategori Jabatan";

                    //SETUP COLUMN
                    LOVDTO objkatja = new LOVDTO();
                    foreach (var item in objkatja.GetType().GetProperties())
                    {
                        validationTable.Columns.Add(item.Name);
                    }
                    
                    //DATA ROW
                    var dataval = jabatanQry.GetQuery().Select(c => new LOVDTO { Id = c.KategoriJabatan_PK, Name = c.Title }).ToList();
                    DataRow dr2;
                    int startcell = 2, endcell = 2;
                    foreach (var item in dataval)
                    {
                        dr2 = validationTable.NewRow();
                        dr2["Id"] = item.Id;
                        dr2["Name"] = item.Name;
                        validationTable.Rows.Add(dr2);
                        endcell++;
                    }

                    var worksheet2 = workbook.AddWorksheet(validationTable);
                    worksheet.Column(3).SetDataValidation().List(worksheet2.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);
                }
                //SETUP TABLE 
                DataTable validationTableUmum = new DataTable();
                validationTableUmum.TableName = "ReligionGenderMaritalValidation";
                validationTableUmum.Columns.Add("Religion");
                validationTableUmum.Columns.Add("Gender");
                validationTableUmum.Columns.Add("MartialStatus");
                //DATA ROW HARDCODED KARENA TIDAK ADA DI DB
                DataRow drumum;
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Islam";
                drumum["Gender"] = "Laki-Laki";
                drumum["MartialStatus"] = "Kawin";
                validationTableUmum.Rows.Add(drumum);
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Protestan";
                drumum["Gender"] = "Perempuan";
                drumum["MartialStatus"] = "Belum Kawin";
                validationTableUmum.Rows.Add(drumum);
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Katolik";
                validationTableUmum.Rows.Add(drumum);
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Buddha";
                validationTableUmum.Rows.Add(drumum);
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Hindu";
                validationTableUmum.Rows.Add(drumum);
                drumum = validationTableUmum.NewRow();
                drumum["Religion"] = "Konghucu";
                validationTableUmum.Rows.Add(drumum);
                var worksheet3 = workbook.AddWorksheet(validationTableUmum);
                worksheet.Protect()    
                    .SetFormatCells()   // Cell Formatting
                    .SetInsertColumns() // Inserting Columns
                    .SetDeleteColumns() // Deleting Columns
                    .SetDeleteRows();   // Deleting Rows;
                worksheet.Columns(1, 2).Style.Fill.BackgroundColor = XLColor.WhiteSmoke;
                worksheet.Columns(1, 2).Style.Font.FontColor = XLColor.Black;
                worksheet.Columns(3,20).Style.Protection.SetLocked(false);

                worksheet.Column(7).SetDataValidation().List(worksheet3.Range("A2:A7"), true);
                worksheet.Column(10).SetDataValidation().List(worksheet3.Range("B2:B3"), true);
                worksheet.Column(11).SetDataValidation().List(worksheet3.Range("C2:C3"), true);
            }



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
    }
}