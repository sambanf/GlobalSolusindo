using ClosedXML.Excel;
using GlobalSolusindo.Base;
using GlobalSolusindo.Business.PO.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.DataAccess.PO.EntryForm;
using Kairos.Data;
using Kairos.Excel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;

namespace GlobalSolusindo.Business.PO.DML
{
    public class POImportDTO
    {
        [JsonProperty("file")]
        public string File { get; set; }
    }

    public class POImportExcelHandler : CreateOperation
    {
        private POValidator poValidator;
        private POFactory poFactory;
        private POQuery poQuery;
        private POEntryDataProvider poEntryDataProvider;

        public POImportExcelHandler(GlobalSolusindoDb db, tblM_User user, POValidator poValidator,
            POFactory poFactory, POQuery poQuery) : base(db, user)
        {
            this.poValidator = poValidator;
            this.poFactory = poFactory;
            this.poQuery = poQuery;
            this.poEntryDataProvider = new POEntryDataProvider(db, user, poQuery);
        }

        public List<ModelValidationResult> Validate(List<PODTO> poList)
        {
            List<ModelValidationResult> validationResults = new List<ModelValidationResult>();
            POValidator validator = new POValidator();
            foreach (var po in poList)
            {
                var validationResult = validator.Validate(po);
                validationResults.Add(validationResult);
            }
            return validationResults;
        }

        public tblT_PO AddPO(PODTO poDTO, DateTime dateStamp)
        {
            if (poDTO == null)
                throw new ArgumentNullException("PO model is null.");
            tblT_PO po = poFactory.CreateFromDTO(poDTO, dateStamp);
            po = Db.tblT_PO.Add(po);
            Db.SaveChanges();
            poDTO.PO_PK = po.PO_PK;
            return po;
        }

        public void UpdatePO(PODTO poDTO, DateTime dateStamp)
        {
            if (poDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblT_PO po = poFactory.CreateFromDbAndUpdateFromDTO(poDTO, dateStamp);
        }

        public List<SaveResult<PODTO>> GetSaveResults(List<PODTO> poList, DateTime dateStamp)
        {
            var validationResults = Validate(poList);
            List<SaveResult<PODTO>> saveResults = new List<SaveResult<PODTO>>();

            foreach (var validationResult in validationResults)
            {
                var poDTO = (PODTO)validationResult.GetModel();
                if (validationResult.IsValid)
                {
                    var exists = poQuery.GetByPrimaryKey(poDTO.PO_PK);
                    if (poDTO.PO_PK > 0 && exists != null)
                    {

                        UpdatePO(poDTO, dateStamp);
                    }
                    else
                    {
                        poDTO.PO_PK = 0;
                        AddPO(poDTO, dateStamp);
                    }

                    var saveResult = new SaveResult<PODTO>()
                    {
                        Message = "SUCCESS",
                        Model = poDTO,
                        Success = true,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
                else
                {
                    var saveResult = new SaveResult<PODTO>()
                    {
                        Message = "FAILED",
                        Model = poDTO,
                        Success = false,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
            }
            return saveResults;
        }

        public List<SaveResult<PODTO>> ExecuteImport(POImportDTO importDTO, DateTime dateStamp)
        {
            using (var transaction = new TransactionScope(TransactionScopeOption.Required, TimeSpan.FromHours(1)))
            {
                var list = CreateListFromExcelBase64(importDTO);
                var result = GetSaveResults(list, dateStamp);
                Db.SaveChanges();
                transaction.Complete();
                return result;
            }
        }

        public PODTO CreatePODTO(IXLRow row)
        {
            const int statusOnProgress = 1;
            const int statusDone = 2;

            var pO_PK = (row.Cell(1).Value.ToString() == "") ? 0 : int.Parse(row.Cell(1).Value.ToString());
            var account = row.Cell(2).Value.ToString();
            var projectCode = row.Cell(3).Value.ToString();
            var siteIDImp = row.Cell(4).Value.ToString();
            var siteID = row.Cell(5).Value.ToString();
            var siteName = row.Cell(6).Value.ToString();
            var dUID = row.Cell(7).Value.ToString();
            var pMOUniq = row.Cell(8).Value.ToString();
            var sOWAct = row.Cell(9).Value.ToString();
            var system = row.Cell(10).Value.ToString();
            var sOWPO = row.Cell(11).Value.ToString();
            var itemDesc = row.Cell(12).Value.ToString();
            var pONo = row.Cell(13).Value.ToString();
            var shipmentNo = row.Cell(14).Value.ToString();
            var qty = (row.Cell(15).Value.ToString() == "") ? 0 : int.Parse(row.Cell(15).Value.ToString());
            var value = (row.Cell(16).Value.ToString() == "") ? 0 : int.Parse(row.Cell(16).Value.ToString());
            var paymentTerm = row.Cell(17).Value.ToString();
            var workStatus = row.Cell(18).Value.ToString();
            var remarks = row.Cell(19).Value.ToString();

            //Esar 1st
            var esarSubmit1st = row.Cell(20).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(20).Value);
            var vsSubmit1st = row.Cell(21).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(21).Value);
            var quantity1st = (row.Cell(22).Value.ToString() == "") ? 0 : int.Parse(row.Cell(22).Value.ToString());
            var invoiceSubmit1st = row.Cell(23).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(23).Value);
            var paidDate1st = row.Cell(24).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(24).Value);
            var esarStatus1st = statusOnProgress;

            //Esar 2nd
            var esarSubmit2nd = row.Cell(26).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(26).Value);
            var vsSubmit2nd = row.Cell(27).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(27).Value);
            var quantity2nd = (row.Cell(28).Value.ToString() == "") ? 0 : int.Parse(row.Cell(28).Value.ToString());
            var invoiceSubmit2nd = row.Cell(29).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(29).Value);
            var paidDate2nd = row.Cell(30).Value.ToString() == "" ? null : (DateTime?)Convert.ToDateTime(row.Cell(30).Value);
            var esarStatus2nd = statusOnProgress;
            //esarStatus1st & esarStatud2nd

            var poStatus = statusOnProgress;

            //Esar done definition
            var isDone1st = esarSubmit1st != null && vsSubmit1st != null && quantity1st > 0 && invoiceSubmit1st != null && paidDate1st != null;
            if (isDone1st)
            {
                esarStatus1st = statusDone;
            }

            var isDone2nd = esarSubmit2nd != null && vsSubmit2nd != null && quantity2nd > 0 && invoiceSubmit2nd != null && paidDate2nd != null;
            if (isDone2nd)
            {
                esarStatus2nd = statusDone;
            }

            var poStatusIsDone = (isDone1st && quantity1st == 1) || (isDone1st && isDone2nd);

            if (poStatusIsDone)
            {
                poStatus = statusDone;
            }

            var po = new PODTO()
            {
                PO_PK = pO_PK,
                Account = account,
                ProjectCode = projectCode,
                SiteIDImp = siteIDImp,
                SiteID = siteID,
                SiteName = siteName,
                DUID = dUID,
                PMOUniq = pMOUniq,
                SOWAct = sOWAct,
                System = system,
                SOWPO = sOWPO,
                ItemDesc = itemDesc,
                PONo = pONo,
                ShipmentNo = shipmentNo,
                Qty = qty,
                POStatus = poStatus,
                PaymentTerm = paymentTerm,
                WorkStatus = workStatus,
                Remarks = remarks,
                EsarStatus1st = esarStatus1st,
                EsarStatus2nd = esarStatus2nd,
                InvoiceSubmit1st = invoiceSubmit1st,
                InvoiceSubmit2nd = invoiceSubmit2nd,
                EsarSubmit1st = esarSubmit1st,
                EsarSubmit2nd = esarSubmit2nd,
                Quantity1st = quantity1st,
                Quantity2nd = quantity2nd,
                PaidDate1st = paidDate1st,
                PaidDate2nd = paidDate2nd,
                VsSubmit1st = vsSubmit1st,
                VsSubmit2nd = vsSubmit2nd,
                Value = value
            };

            return po;
        }

        public List<PODTO> CreateListFromExcelBase64(POImportDTO importDTO)
        {
            var base64 = importDTO.File;
            base64 = base64.Replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "");
            var wb = ExcelConverter.FromBase64(base64);
            var sheet = wb.Worksheet("POUpload");

            var nonEmptyRowCount = sheet.RowsUsed().Count() + 1;
            var poQuery = new POQuery(Db);
            List<PODTO> poList = new List<PODTO>();

            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);

                var newPO = CreatePODTO(row);
                poList.Add(newPO);
            }

            return poList;
        }
    }
}
