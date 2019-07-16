using ClosedXML.Excel;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.BTSStatus.Queries;
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

namespace GlobalSolusindo.Api.Models
{

    public class BTSExport
    {
        protected string _sheetName;
        protected string _fileName;


        public HttpResponseMessage Export(GlobalSolusindoDb Db, string fileName, BTSStatusSearchFilter filter)
        {
            _fileName = fileName;
            //CREATE WORKBOOK
            var workbook = new XLWorkbook();
            DataTable bts = new DataTable("BTS");
            BTSExportDTO obj = new BTSExportDTO();
            foreach (var item in obj.GetType().GetProperties())
            {
                bts.Columns.Add(item.Name);
            }
            workbook.AddWorksheet(bts);
            var worksheet = workbook.Worksheet(1);
            worksheet.Columns().Width = 15;
            //BTS Status
            using (var BTSStatusSearch = new BTSStatusSearch(Db))
            {
                // Validation BTS Status
                DataTable validationTable = new DataTable();
                validationTable.Columns.Add("StatusBTSFK");
                validationTable.Columns.Add("StatusBTS");
                validationTable.TableName = "StatusBTS";
                var data = BTSStatusSearch.GetDataByFilter(filter);
                var dataExport = data.Records.Select(c => new tblM_BTSStatus
                {
                    BTSStatus_PK = c.BTSStatus_PK,
                    Title = c.Title
                }).ToList();

                DataRow dr;
                int startcell = 2, endcell = 2;
                foreach (var item in dataExport)
                {
                    dr = validationTable.NewRow();
                    dr["StatusBTSFK"] = item.BTSStatus_PK;
                    dr["StatusBTS"] = item.Title;
                    validationTable.Rows.Add(dr);
                    endcell++;
                }
                var worksheet2 = workbook.AddWorksheet(validationTable);
                worksheet.Column(5).SetDataValidation().List(worksheet2.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);

                //Validation Operator
                DataTable validationTable2 = new DataTable();
                validationTable2.Columns.Add("Operator_FK");
                validationTable2.Columns.Add("Operator");
                validationTable2.TableName = "Operator";
                //Operator
                OperatorSearchFilter a = new OperatorSearchFilter();
                using (var OperatorSearch = new OperatorSearch(Db))
                {
                    var data2 = OperatorSearch.GetDataByFilter(a);
                    var dataExport2 = data2.Records.Select(c => new tblM_Operator
                    {
                        Operator_PK = c.Operator_PK,
                        Title = c.Title
                    }).ToList();

                    DataRow dr2;
                    startcell = 2; endcell = 2;
                    foreach (var item in dataExport2)
                    {
                        dr2 = validationTable2.NewRow();
                        dr2["Operator_FK"] = item.Operator_PK;
                        dr2["Operator"] = item.Title;
                        validationTable2.Rows.Add(dr2);
                        endcell++;
                    }
                    var worksheet3 = workbook.AddWorksheet(validationTable2);
                    worksheet.Column(4).SetDataValidation().List(worksheet3.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);


                    //Validation Area
                    DataTable validationTable3 = new DataTable();
                    validationTable3.Columns.Add("AreaFK");
                    validationTable3.Columns.Add("Area");
                    validationTable3.TableName = "Area";
                    //Operator
                    AreaSearchFilter b = new AreaSearchFilter();
                    using (var AreaSearch = new AreaQuery(Db))
                    {
                        var data3 = AreaSearch.Search(b);
                        var dataExport3 = data3.Records.Select(e => new tblM_Area
                        {
                            Area_PK = e.Area_PK,
                            Title = e.Title
                        }).ToList();

                        DataRow dr3;
                        startcell = 2; endcell = 2;
                        foreach (var item in dataExport3)
                        {
                            dr3 = validationTable3.NewRow();
                            dr3["AreaFK"] = item.Area_PK;
                            dr3["Area"] = item.Title;
                            validationTable3.Rows.Add(dr3);
                            endcell++;
                        }
                        var worksheet4 = workbook.AddWorksheet(validationTable3);
                        worksheet.Column(8).SetDataValidation().List(worksheet4.Range("B" + startcell.ToString() + ":B" + endcell.ToString()), true);
                    }



                }


            
            }



            //worksheet.Column(5).SetDataValidation().List(worksheet2.Range("B2:B4"), true);




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