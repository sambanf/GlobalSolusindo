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
using GlobalSolusindo.Business.TaskList.Queries;
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.Identity;
using System.Globalization;
using GlobalSolusindo.Identity.User;

namespace GlobalSolusindo.Api.Models
{

    public class SOWExport
    {
        protected string _sheetName;
        protected string _fileName;

        public HttpResponseMessage Export(GlobalSolusindoDb Db, tblM_User user, string fileName, TaskListSearchFilter filter)
        {
            _fileName = fileName;
            //CREATE WORKBOOK
            var workbook = new XLWorkbook();
            DataTable SOW = new DataTable("SOWUpload"); //DataTable Name = Worksheet Name
            SOWExportDTO obj = new SOWExportDTO();
            //Setup Column Names
            foreach (var item in obj.GetType().GetProperties())
            {
                SOW.Columns.Add(item.Name);
            }
            workbook.AddWorksheet(SOW); // NO DATA = ADD Worksheet to WorkBook

            //Worksheet Properties
            var worksheet = workbook.Worksheet(1);
            worksheet.Columns().Width = 15;


            //Validation Table

            using (var BTSQuery = new BTSQuery())
            {
                using (var ProjectQuery2 = new ProjectQuery())
                {
                    using (var UserQuery = new UserQuery())
                    {
                        using (SOWQuery sOWQuery = new SOWQuery())
                        {


                            //SETUP TABLE PROJECT
                            DataTable validationTableProject = new DataTable();
                            validationTableProject.TableName = "Project";
                            //SETUP COLUMN
                            LOVDTO objProject = new LOVDTO();
                            foreach (var item in objProject.GetType().GetProperties())
                            {
                                validationTableProject.Columns.Add(item.Name);
                            }
                            IQueryable<ProjectDTO> dataProject = null;
                            if (user.KategoriJabatan_FK == 1)
                            {
                                var teamlead = UserQuery.GetByPrimaryKey(user.User_PK);
                                dataProject = ProjectQuery2.GetQuery().Where(x => x.Project_PK == teamlead.Project);
                            }
                            else if (user.KategoriJabatan_FK == 7)
                            {
                                dataProject = ProjectQuery2.GetProjectByPM(user.User_PK);
                            }

                            DataRow drProject;
                            int startcell = 2, endcell = 2;
                            if (dataProject != null)
                            {
                                foreach (var item in dataProject)
                                {
                                    drProject = validationTableProject.NewRow();
                                    drProject["Id"] = item.Project_PK;
                                    drProject["Name"] = item.Project_PK + "-" + item.OperatorTitle + "-" + item.VendorTitle + "-" + item.DeliveryAreaTitle;
                                    validationTableProject.Rows.Add(drProject);
                                    endcell++;
                                }
                            }

                            var worksheetProject = workbook.AddWorksheet(validationTableProject);
                            worksheet.Column(2).SetDataValidation().List(worksheetProject.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);


                            //SETUP TABLE VALIDATION SOWName
                            //SETUP TABLE SOWNAME
                            DataTable validationTableSOWName = new DataTable();
                            validationTableSOWName.TableName = "SOWName";
                            //SETUP COLUMN
                            LOVDTO objSOWName = new LOVDTO();
                            foreach (var item in objSOWName.GetType().GetProperties())
                            {
                                validationTableSOWName.Columns.Add(item.Name);
                            }
                            var dataSOWName = sOWQuery.GetSOWName().ToList();
                            DataRow drSOWName;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataSOWName)
                            {
                                drSOWName = validationTableSOWName.NewRow();
                                drSOWName["Id"] = item.id;
                                drSOWName["Name"] = item.SOWName;
                                validationTableSOWName.Rows.Add(drSOWName);
                                endcell++;
                            }
                            var worksheetSOWName = workbook.AddWorksheet(validationTableSOWName);
                            worksheet.Column(6).SetDataValidation().List(worksheetSOWName.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);



                            //SETUP TABLE VALIDATION BTS
                            //SETUP TABLE BTS
                            DataTable validationTableBTS = new DataTable();
                            validationTableBTS.TableName = "Site";
                            //SETUP COLUMN
                            LOVDTO objBTS = new LOVDTO();
                            foreach (var item in objBTS.GetType().GetProperties())
                            {
                                validationTableBTS.Columns.Add(item.Name);
                            }
                            var dataBTS = BTSQuery.GetQuery();
                            DataRow drBTS;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataBTS)
                            {
                                drBTS = validationTableBTS.NewRow();
                                drBTS["Id"] = item.BTS_PK;
                                drBTS["Name"] = item.TowerID + "-" + item.Name;
                                validationTableBTS.Rows.Add(drBTS);
                                endcell++;
                            }
                            var worksheetBTS = workbook.AddWorksheet(validationTableBTS);
                            worksheet.Column(4).SetDataValidation().List(worksheetBTS.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);


                            //SETUP TABLE TECHNOLOGY
                            using (var TechnologyQuery = new TechnologyQuery())
                            {
                                //SETUP TABLE Technology
                                DataTable validationTableTechnology = new DataTable();
                                validationTableTechnology.TableName = "Technology";
                                //SETUP COLUMN
                                LOVDTO objTechnology = new LOVDTO();
                                foreach (var item in objTechnology.GetType().GetProperties())
                                {
                                    validationTableTechnology.Columns.Add(item.Name);
                                }
                                var dataTechnology = TechnologyQuery.GetQuery();
                                DataRow drTechnology;
                                startcell = 2; endcell = 2;
                                foreach (var item in dataTechnology)
                                {
                                    drTechnology = validationTableTechnology.NewRow();
                                    drTechnology["Id"] = item.Technology_PK;
                                    drTechnology["Name"] = item.Title;
                                    validationTableTechnology.Rows.Add(drTechnology);
                                    endcell++;
                                }
                                var worksheetTechnology = workbook.AddWorksheet(validationTableTechnology);
                                worksheet.Column(5).SetDataValidation().List(worksheetTechnology.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);
                            }

                            //USER VALIDATION

                            //SETUP TABLE Teamlead
                            DataTable validationTableUser = new DataTable();
                            validationTableUser.TableName = "Teamlead";
                            //SETUP COLUMN
                            LOVDTO objUser = new LOVDTO();
                            foreach (var item in objUser.GetType().GetProperties())
                            {
                                validationTableUser.Columns.Add(item.Name);
                            }

                            DataRow drUser;
                            var dataUser = UserQuery.GetByJabatanAndProject(1, user.User_PK);
                            startcell = 2; endcell = 2;
                            foreach (var item in dataUser)
                            {
                                drUser = validationTableUser.NewRow();
                                drUser["Id"] = item.User_PK;
                                drUser["Name"] = item.Name +"-"+ item.User_PK;
                                validationTableUser.Rows.Add(drUser);
                                endcell++;
                            }
                            var worksheetUser = workbook.AddWorksheet(validationTableUser);
                            worksheet.Column(13).SetDataValidation().List(worksheetUser.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                            //SETUP TABLE PLOQC
                            DataTable validationTableUserPLOQC = new DataTable();
                            validationTableUserPLOQC.TableName = "RNO";
                            //SETUP COLUMN
                            foreach (var item in objUser.GetType().GetProperties())
                            {
                                validationTableUserPLOQC.Columns.Add(item.Name);
                            }
                            var dataUserPLOQC = UserQuery.GetByJabatanAndProject(6, user.User_PK); // PLOQC JABATAN???
                            DataRow drUserPLOQC;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataUserPLOQC)
                            {
                                drUserPLOQC = validationTableUserPLOQC.NewRow();
                                drUserPLOQC["Id"] = item.User_PK;
                                drUserPLOQC["Name"] = item.Name + "-" + item.User_PK;
                                validationTableUserPLOQC.Rows.Add(drUserPLOQC);
                                endcell++;
                            }
                            var worksheetUserPLOQC = workbook.AddWorksheet(validationTableUserPLOQC);
                            worksheet.Column(14).SetDataValidation().List(worksheetUserPLOQC.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                            //SETUP TABLE RF
                            DataTable validationTableUserRF = new DataTable();
                            validationTableUserRF.TableName = "RF";
                            //SETUP COLUMN
                            foreach (var item in objUser.GetType().GetProperties())
                            {
                                validationTableUserRF.Columns.Add(item.Name);
                            }
                            var dataUserRF = UserQuery.GetByJabatanAndProject(5, user.User_PK);
                            DataRow drUserRF;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataUserRF)
                            {
                                drUserRF = validationTableUserRF.NewRow();
                                drUserRF["Id"] = item.User_PK;
                                drUserRF["Name"] = item.Name + "-" + item.User_PK;
                                validationTableUserRF.Rows.Add(drUserRF);
                                endcell++;
                            }
                            var worksheetUserRF = workbook.AddWorksheet(validationTableUserRF);
                            worksheet.Column(15).SetDataValidation().List(worksheetUserRF.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                            //SETUP TABLE Rigger
                            DataTable validationTableUserRigger = new DataTable();
                            validationTableUserRigger.TableName = "Rigger";
                            //SETUP COLUMN
                            foreach (var item in objUser.GetType().GetProperties())
                            {
                                validationTableUserRigger.Columns.Add(item.Name);
                            }
                            var dataUserRigger = UserQuery.GetByJabatanAndProject(3, user.User_PK);
                            DataRow drUserRigger;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataUserRigger)
                            {
                                drUserRigger = validationTableUserRigger.NewRow();
                                drUserRigger["Id"] = item.User_PK;
                                drUserRigger["Name"] = item.Name + "-" + item.User_PK;
                                validationTableUserRigger.Rows.Add(drUserRigger);
                                endcell++;
                            }
                            var worksheetUserRigger = workbook.AddWorksheet(validationTableUserRigger);
                            worksheet.Column(16).SetDataValidation().List(worksheetUserRigger.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                            //SETUP TABLE DT
                            DataTable validationTableUserDT = new DataTable();
                            validationTableUserDT.TableName = "DriveTester";
                            //SETUP COLUMN
                            foreach (var item in objUser.GetType().GetProperties())
                            {
                                validationTableUserDT.Columns.Add(item.Name);
                            }
                            var dataUserDT = UserQuery.GetByJabatanAndProject(2, user.User_PK);
                            DataRow drUserDT;
                            startcell = 2; endcell = 2;
                            foreach (var item in dataUserDT)
                            {
                                drUserDT = validationTableUserDT.NewRow();
                                drUserDT["Id"] = item.User_PK;
                                drUserDT["Name"] = item.Name + "-" + item.User_PK;
                                validationTableUserDT.Rows.Add(drUserDT);
                                endcell++;
                            }
                            var worksheetUserDT = workbook.AddWorksheet(validationTableUserDT);
                            worksheet.Column(17).SetDataValidation().List(worksheetUserDT.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);
                        }
                    }
                }

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

        public HttpResponseMessage ExportViewAll(GlobalSolusindoDb Db, tblM_User user, string fileName, TaskListSearchFilter filter)
        {
            _fileName = fileName;
            //CREATE WORKBOOK
            var workbook = new XLWorkbook();
            DataTable SOW = new DataTable("SOWTracker"); //DataTable Name = Worksheet Name

            AccessControl ac = new AccessControl(Db, user);
            if (ac.UserHasRole("SOWPO_View"))
            {
                SOWExportDTOViewAll obj = new SOWExportDTOViewAll();
                UserQuery userQuery = new UserQuery();
                //Setup Column Names
                foreach (var item in obj.GetType().GetProperties())
                {
                    SOW.Columns.Add(item.Name);
                }
                DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
                Calendar cal = dfi.Calendar;
                using (SOWQuery sOWQuery = new SOWQuery())
                {
                    var data = sOWQuery.GetQueryforExcel().ToList();
                    DataRow dr;
                    foreach (var item in data)
                    {
                        dr = SOW.NewRow();
                        dr["PMOUniq"] = item.PMOUniq;
                        dr["PLOUniq"] = item.PLOUniq;
                        dr["DUID"] = item.DUID;
                        dr["SiteIDPO"] = item.SiteIDPO;
                        dr["SiteNamePO"] = item.SiteNamePO;
                        dr["System"] = item.System;
                        dr["SOW"] = item.SOW;
                        dr["Long"] = item.Long;
                        dr["lat"] = item.lat;
                        dr["CODate"] = item.CODate;
                        dr["AssignDate"] = item.AssignDate;
                        //DT Date
                        dr["SSVDate"] = item.SSVDate;
                        dr["SSODate"] = item.SSODate;
                        //LVDate
                        dr["LVDate"] = item.LVDate;
                        dr["LVWeek"] = item.LVDate == null ? "" : cal.GetWeekOfYear(item.LVDate.GetValueOrDefault(DateTime.Now), dfi.CalendarWeekRule, dfi.FirstDayOfWeek).ToString();
                        dr["LVMonth"] = item.LVDate == null ? "" : cal.GetMonth(item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["LVYear"] = item.LVDate == null ? "" : cal.GetYear(item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["AgingLV"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["MarkLV1"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) == 0 ? "NY LV" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 180 ? ">180 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 90 ? ">90 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 40 ? ">40 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 30 ? "30 - 40 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 14 ? "15 - 30 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) < 15 ? "0 - 14 Days" : "";
                        dr["MarkLV2"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) == 0 ? "NY SSV" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 7 ? "> 7 Days" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 3 ? "> 3 Days" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) <= 3 ? "< 3 Days" : "";

                        //Accepted Date
                        dr["AcceptedDate"] = item.AcceptedDate;
                        dr["QCAging"] = item.AcceptedDate == null ? getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)).ToString() : getDayBeetween(item.AcceptedDate.GetValueOrDefault(DateTime.Now), item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCYear"] = item.AcceptedDate == null ? "" : cal.GetYear(item.AcceptedDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCMonth"] = item.AcceptedDate == null ? "" : cal.GetMonth(item.AcceptedDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCWeek"] = item.AcceptedDate == null ? "" : cal.GetWeekOfYear(item.AcceptedDate.GetValueOrDefault(DateTime.Now), dfi.CalendarWeekRule, dfi.FirstDayOfWeek).ToString();
                        dr["QCDate"] = item.AcceptedDate;
                        dr["Region"] = item.Region;
                        //USER
                        dr["PLOQC"] = item.PLOQC == null ? "" : userQuery.GetByUsername(item.PLOQC).Name;
                        dr["LinkReport"] = item.LinkReport;
                        //RF
                        dr["RF"] = item.RF == null ? "" : userQuery.GetByUsername(item.RF).Name;
                        dr["LinkReport2"] = item.LinkReport2;
                        //Rigger
                        dr["Rigger"] = item.Rigger == null ? "" : userQuery.GetByUsername(item.Rigger).Name;
                        dr["LinkAOR"] = item.LinkAOR;
                        //DT
                        dr["DT"] = item.DT == null ? "" : userQuery.GetByUsername(item.DT).Name;
                        dr["LinkSSO"] = item.LinkSSO;
                        dr["LinkSSV"] = item.LinkSSV;
                        dr["SOWStatus"] = item.SOWStatus;
                        //PO :3
                        dr["NOPO"] = item.NOPO;
                        dr["Esarsubmit"] = item.Esarsubmit;
                        dr["VsSubmit"] = item.VsSubmit;
                        dr["Quantity"] = item.Quantity;
                        dr["InvoiceSubmit"] = item.InvoiceSubmit;
                        dr["PaidDate"] = item.PaidDate;
                        dr["Esarstatus1"] = item.Esarstatus1;
                        dr["Esarsubmit2"] = item.Esarsubmit2;
                        dr["VsSubmit2"] = item.VsSubmit2;
                        dr["Quantity2"] = item.Quantity2;
                        dr["InvoiceSubmit2"] = item.InvoiceSubmit2;
                        dr["PaidDate2"] = item.PaidDate2;
                        dr["Esarstatus2"] = item.Esarstatus2;
                        dr["StatusPO"] = (item.Quantity == "" ? 0 : Convert.ToDecimal(item.Quantity)) + (item.Quantity2 == "" ? 0 : Convert.ToDecimal(item.Quantity2)) < 1 && ((item.Esarstatus1 != "2") || (item.Esarstatus2 != "2")) ? "On Progress" : "Done";
                        dr["remarkpo"] = item.remarkpo;
                        SOW.Rows.Add(dr);
                    }

                }
            }
            else
            {
                SOWExportDTOViewNonPO obj = new SOWExportDTOViewNonPO();
                UserQuery userQuery = new UserQuery();
                //Setup Column Names
                foreach (var item in obj.GetType().GetProperties())
                {
                    SOW.Columns.Add(item.Name);
                }
                DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
                Calendar cal = dfi.Calendar;
                using (SOWQuery sOWQuery = new SOWQuery())
                {
                    var data = sOWQuery.GetQueryforExcel().ToList();
                    DataRow dr;
                    foreach (var item in data)
                    {
                        dr = SOW.NewRow();
                        dr["PMOUniq"] = item.PMOUniq;
                        dr["PLOUniq"] = item.PLOUniq;
                        dr["DUID"] = item.DUID;
                        dr["SiteIDPO"] = item.SiteIDPO;
                        dr["SiteNamePO"] = item.SiteNamePO;
                        dr["System"] = item.System;
                        dr["SOW"] = item.SOW;
                        dr["Long"] = item.Long;
                        dr["lat"] = item.lat;
                        dr["CODate"] = item.CODate;
                        dr["AssignDate"] = item.AssignDate;
                        //DT Date
                        dr["SSVDate"] = item.SSVDate;
                        dr["SSODate"] = item.SSODate;
                        //LVDate
                        dr["LVDate"] = item.LVDate;
                        dr["LVWeek"] = item.LVDate == null ? "" : cal.GetWeekOfYear(item.LVDate.GetValueOrDefault(DateTime.Now), dfi.CalendarWeekRule, dfi.FirstDayOfWeek).ToString();
                        dr["LVMonth"] = item.LVDate == null ? "" : cal.GetMonth(item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["LVYear"] = item.LVDate == null ? "" : cal.GetYear(item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["AgingLV"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["MarkLV1"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) == 0 ? "NY LV" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 180 ? ">180 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 90 ? ">90 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 40 ? ">40 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 30 ? "30 - 40 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 14 ? "15 - 30 Days" :
                                        getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) < 15 ? "0 - 14 Days" : "";
                        dr["MarkLV2"] = getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) == 0 ? "NY SSV" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 7 ? "> 7 Days" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) > 3 ? "> 3 Days" :
                                            getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)) <= 3 ? "< 3 Days" : "";

                        //Accepted Date
                        dr["AcceptedDate"] = item.AcceptedDate;
                        dr["QCAging"] = item.AcceptedDate == null ? getDayBeetween(DateTime.Now, item.LVDate.GetValueOrDefault(DateTime.Now)).ToString() : getDayBeetween(item.AcceptedDate.GetValueOrDefault(DateTime.Now), item.LVDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCYear"] = item.AcceptedDate == null ? "" : cal.GetYear(item.AcceptedDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCMonth"] = item.AcceptedDate == null ? "" : cal.GetMonth(item.AcceptedDate.GetValueOrDefault(DateTime.Now)).ToString();
                        dr["QCWeek"] = item.AcceptedDate == null ? "" : cal.GetWeekOfYear(item.AcceptedDate.GetValueOrDefault(DateTime.Now), dfi.CalendarWeekRule, dfi.FirstDayOfWeek).ToString();
                        dr["QCDate"] = item.AcceptedDate;
                        dr["Region"] = item.Region;
                        //USER
                        dr["PLOQC"] = item.PLOQC == null ? "" : userQuery.GetByUsername(item.PLOQC).Name;
                        dr["LinkReport"] = item.LinkReport;
                        //RF
                        dr["RF"] = item.RF == null ? "" : userQuery.GetByUsername(item.RF).Name;
                        dr["LinkReport2"] = item.LinkReport2;
                        //Rigger
                        dr["Rigger"] = item.Rigger == null ? "" : userQuery.GetByUsername(item.Rigger).Name;
                        dr["LinkAOR"] = item.LinkAOR;
                        //DT
                        dr["DT"] = item.DT == null ? "" : userQuery.GetByUsername(item.DT).Name;
                        dr["LinkSSO"] = item.LinkSSO;
                        dr["LinkSSV"] = item.LinkSSV;
                        dr["SOWStatus"] = item.SOWStatus;
                        //PO :3
                        dr["NOPO"] = item.NOPO;
                        dr["Esarstatus1"] = item.Esarstatus1;
                        dr["Esarstatus2"] = item.Esarstatus2;
                        dr["StatusPO"] = item.NOPO == null ? "Waiting PO" : (item.Quantity == "" ? 0 : Convert.ToDecimal(item.Quantity)) + (item.Quantity2 == "" ? 0 : Convert.ToDecimal(item.Quantity2)) < 1 && ((item.Esarstatus1 != "2") || (item.Esarstatus2 != "2")) ? "On Progress" : "Done";
                        SOW.Rows.Add(dr);
                    }

                }
            }
            var worksheet = workbook.AddWorksheet(SOW);
            worksheet.Columns().Width = 15;


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