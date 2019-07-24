using ClosedXML.Excel;
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.CategoryContract;
using GlobalSolusindo.Identity.CategoryContract.Queries;
using GlobalSolusindo.Identity.Gender;
using GlobalSolusindo.Identity.Gender.Queries;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.MaritalStatus;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using GlobalSolusindo.Identity.Religion;
using GlobalSolusindo.Identity.Religion.Queries;
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
        GenderQuery genderQuery = new GenderQuery();
        CategoryContractQuery categoryContractQuery = new CategoryContractQuery();
        MaritalStatusQuery maritalStatusQuery = new MaritalStatusQuery();
        ReligionQuery religionQuery = new ReligionQuery();
        ProjectQuery projectQuery = new ProjectQuery();
        public HttpResponseMessage Export(GlobalSolusindoDb Db, tblM_User user1 ,string fileName, UserSearchFilter filter)
        {
            _fileName = fileName;
            _workbook = new XSSFWorkbook(); //Creating New Excel object
            var workbook = new XLWorkbook();
            using (var userSearch = new UserSearch(Db))
            {
                var data = userSearch.GetDataByFilter(filter, user1);
                var dataExport = data.Records.Select(c => new UserExportDTO
                { 
                    Nomor = c.User_PK,
                    JoinDate = c.JoinDate,
                    UserName = c.Username,
                    KategoriJabatanTitle = c.KategoriJabatanTitle,
                    Name = c.Name,
                    TglLahir = c.TglLahir,
                    NoKTP = c.NoKTP,
                    ReligionName = c.Religion == null || c.Religion == 0 ? "" : religionQuery.GetByPrimaryKey((int)c.Religion).Name,//?
                    CategoryContract = c.CategoryContract == null || c.CategoryContract == 0 ? "" : categoryContractQuery.GetByPrimaryKey((int)c.CategoryContract).Name,
                    Project = c.Project == null || c.Project == 0 ? "" : projectQuery.GetByPrimaryKey((int)c.Project).Project_PK+"-"+projectQuery.GetByPrimaryKey((int)c.Project).OperatorTitle+"-"+projectQuery.GetByPrimaryKey((int)c.Project).VendorTitle+"-"+ projectQuery.GetByPrimaryKey((int)c.Project).DeliveryAreaTitle,//?
                    Gender = c.Gender == null || c.Gender == 0 ? "" : genderQuery.GetByPrimaryKey((int)c.Gender).Name,
                    MartialStatus = c.MaritalStatus == null || c.MaritalStatus == 0 ? "" : maritalStatusQuery.GetByPrimaryKey((int)c.MaritalStatus).Name,
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
                projectQuery.Dispose();
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

                    //GENDER
                    using (var genderQuery = new GenderQuery())
                    {
                        //SETUP TABLE 
                        DataTable validationTablegender = new DataTable();
                        validationTablegender.TableName = "Gender";

                        //SETUP COLUMN
                        GenderDTO objgender = new GenderDTO();
                        foreach (var item in objkatja.GetType().GetProperties())
                        {
                            validationTablegender.Columns.Add(item.Name);
                        }
                        var datagender = genderQuery.GetQuery().Select(c => new GenderDTO { Gender_PK = c.Gender_PK , Name = c.Name }).ToList();
                        DataRow drgender;
                        startcell = 2; endcell = 2;
                        foreach (var item in datagender)
                        {
                            drgender = validationTablegender.NewRow();
                            drgender["Id"] = item.Gender_PK;
                            drgender["Name"] = item.Name;
                            validationTablegender.Rows.Add(drgender);
                            endcell++;
                        }
                        var worksheetgender = workbook.AddWorksheet(validationTablegender);
                        worksheet.Column(10).SetDataValidation().List(worksheetgender.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                        //RELIGION
                        using (var ReligionQuery = new ReligionQuery())
                        {
                            //SETUP TABLE 
                            DataTable validationTableReligion = new DataTable();
                            validationTableReligion.TableName = "Religion";

                            //SETUP COLUMN
                            ReligionDTO objReligion = new ReligionDTO();
                            foreach (var item in objkatja.GetType().GetProperties())
                            {
                                validationTableReligion.Columns.Add(item.Name);
                            }
                            var dataReligion = ReligionQuery.GetQuery().Select(c => new ReligionDTO { Religion_PK = c.Religion_PK, Name = c.Name }).ToList();
                            DataRow drReligion;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataReligion)
                            {
                                drReligion = validationTableReligion.NewRow();
                                drReligion["Id"] = item.Religion_PK;
                                drReligion["Name"] = item.Name;
                                validationTableReligion.Rows.Add(drReligion);
                                endcell++;
                            }
                            var worksheetReligion = workbook.AddWorksheet(validationTableReligion);
                            worksheet.Column(7).SetDataValidation().List(worksheetReligion.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                            //MaritalStatus
                            using (var MaritalStatusQuery = new MaritalStatusQuery())
                            {
                                //SETUP TABLE 
                                DataTable validationTableMaritalStatus = new DataTable();
                                validationTableMaritalStatus.TableName = "MaritalStatus";

                                //SETUP COLUMN
                                MaritalStatusDTO objMaritalStatus = new MaritalStatusDTO();
                                foreach (var item in objkatja.GetType().GetProperties())
                                {
                                    validationTableMaritalStatus.Columns.Add(item.Name);
                                }
                                var dataMaritalStatus = MaritalStatusQuery.GetQuery().Select(c => new MaritalStatusDTO { MaritalStatus_PK = c.MaritalStatus_PK, Name = c.Name }).ToList();
                                DataRow drMaritalStatus;
                                startcell = 2; endcell = 2;
                                foreach (var item in dataMaritalStatus)
                                {
                                    drMaritalStatus = validationTableMaritalStatus.NewRow();
                                    drMaritalStatus["Id"] = item.MaritalStatus_PK;
                                    drMaritalStatus["Name"] = item.Name;
                                    validationTableMaritalStatus.Rows.Add(drMaritalStatus);
                                    endcell++;
                                }
                                var worksheetMaritalStatus = workbook.AddWorksheet(validationTableMaritalStatus);
                                worksheet.Column(11).SetDataValidation().List(worksheetMaritalStatus.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                                //CategoryContract
                                using (var CategoryContractQuery = new CategoryContractQuery())
                                {
                                    //SETUP TABLE 
                                    DataTable validationTableCategoryContract = new DataTable();
                                    validationTableCategoryContract.TableName = "CategoryContract";

                                    //SETUP COLUMN
                                    CategoryContractDTO objCategoryContract = new CategoryContractDTO();
                                    foreach (var item in objkatja.GetType().GetProperties())
                                    {
                                        validationTableCategoryContract.Columns.Add(item.Name);
                                    }
                                    var dataCategoryContract = CategoryContractQuery.GetQuery().Select(c => new CategoryContractDTO { CategoryContract_PK = c.CategoryContract_PK, Name = c.Name }).ToList();
                                    DataRow drCategoryContract;
                                    startcell = 2; endcell = 2;
                                    foreach (var item in dataCategoryContract)
                                    {
                                        drCategoryContract = validationTableCategoryContract.NewRow();
                                        drCategoryContract["Id"] = item.CategoryContract_PK;
                                        drCategoryContract["Name"] = item.Name;
                                        validationTableCategoryContract.Rows.Add(drCategoryContract);
                                        endcell++;
                                    }
                                    var worksheetCategoryContract = workbook.AddWorksheet(validationTableCategoryContract);
                                    worksheet.Column(8).SetDataValidation().List(worksheetCategoryContract.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                                    //Project
                                    using (var ProjectQuery2 = new ProjectQuery())
                                    {
                                        //SETUP TABLE 
                                        DataTable validationTableProject = new DataTable();
                                        validationTableProject.TableName = "Project";

                                        //SETUP COLUMN
                                        ProjectDTO objProject = new ProjectDTO();
                                        foreach (var item in objkatja.GetType().GetProperties())
                                        {
                                            validationTableProject.Columns.Add(item.Name);
                                        }
                                        var dataProject = ProjectQuery2.GetQuery();
                                        DataRow drProject;
                                        startcell = 2; endcell = 2;
                                        foreach (var item in dataProject)
                                        {
                                            drProject = validationTableProject.NewRow();
                                            drProject["Id"] = item.Project_PK;
                                            drProject["Name"] = item.Project_PK + "-" + item.OperatorTitle + "-" + item.VendorTitle + "-" + item.DeliveryAreaTitle;
                                            validationTableProject.Rows.Add(drProject);
                                            endcell++;
                                        }
                                        var worksheetProject = workbook.AddWorksheet(validationTableProject);
                                        worksheet.Column(9).SetDataValidation().List(worksheetProject.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                                    }


                                }


                            }
                        }
                    }
                }
                worksheet.Protect("kairosg1")    
                    .SetFormatCells()   // Cell Formatting
                    .SetInsertColumns() // Inserting Columns
                    .SetDeleteColumns() // Deleting Columns
                    .SetDeleteRows();   // Deleting Rows;
                worksheet.Columns(1, 2).Style.Fill.BackgroundColor = XLColor.DarkGray;
                worksheet.Columns(1, 2).Style.Font.FontColor = XLColor.Black;
                worksheet.Columns(3,20).Style.Protection.SetLocked(false);
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