using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using Kairos.Excel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Transactions;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Identity.User.Queries;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWImportDTO
    {
        [JsonProperty("file")]
        public string File { get; set; }
    }

    public class SOWImportExcelHandler : CreateOperation
    {
        private SOWValidator SOWValidator;
        private SOWFactory SOWFactory;
        private SOWQuery SOWQuery;
        private SOWEntryDataProvider SOWEntryDataProvider;
        SOWAssignFactory SOWAssignFactory;

        public SOWImportExcelHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator SOWValidator, SOWFactory SOWFactory,SOWAssignFactory sOWAssignFactory, SOWQuery SOWQuery, AccessControl accessControl) : base(db, user)
        {
            this.SOWValidator = SOWValidator;
            this.SOWFactory = SOWFactory;
            this.SOWQuery = SOWQuery;
            this.SOWAssignFactory = sOWAssignFactory;
            this.SOWEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, SOWQuery);
            //((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 300; //set time out
            //db.Database.CommandTimeout = 300;
        }

        public List<ModelValidationResult> Validate(List<SOWDTO> SOWList)
        {
            List<ModelValidationResult> validationResults = new List<ModelValidationResult>();
            SOWValidator validator = new SOWValidator();
            foreach (var SOW in SOWList)
            {
                var validationResult = validator.Validate(SOW);
                validationResults.Add(validationResult);
            }
            return validationResults;
        }
        private void AddSowAssign(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            if (sowDTO.SOWAssigns != null)
            {
                foreach (var sowAssignDTO in sowDTO.SOWAssigns)
                {
                    sowAssignDTO.SOW_FK = sowDTO.SOW_PK;
                    tblT_SOWAssign sowAssign = SOWAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
                    Db.tblT_SOWAssign.Add(sowAssign);
                }
            }
        }

        public tblT_SOW AddSOW(SOWDTO SOWDTO, DateTime dateStamp)
        {
            if (SOWDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW SOW = SOWFactory.CreateFromDTO(SOWDTO, dateStamp);
            SOW = Db.tblT_SOW.Add(SOW);
            SOWDTO.SOW_PK = SOW.SOW_PK;
            return SOW;
        }

        public void UpdateSOW(SOWDTO SOWDTO, DateTime dateStamp)
        {
            if (SOWDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW SOW = SOWFactory.CreateFromDbAndUpdateFromDTO(SOWDTO, dateStamp);

        }

        public List<SaveResult<SOWDTO>> GetSaveResults(List<SOWDTO> SOWList, DateTime dateStamp)
        {
            var validationResults = Validate(SOWList);
            List<SaveResult<SOWDTO>> saveResults = new List<SaveResult<SOWDTO>>();

            foreach (var validationResult in validationResults)
            {
                var SOWDTO = (SOWDTO)validationResult.GetModel();

                if (validationResult.IsValid)
                {

                    AddSOW(SOWDTO, dateStamp);
                    AddSowAssign(SOWDTO, dateStamp);

                    var saveResult = new SaveResult<SOWDTO>()
                    {
                        Message = "SUCCESS",
                        Model = SOWDTO,
                        Success = true,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
                else
                {
                    var saveResult = new SaveResult<SOWDTO>()
                    {
                        Message = "FAILED",
                        Model = SOWDTO,
                        Success = false,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
            }
            return saveResults;
        }

        public List<SaveResult<SOWDTO>> ExecuteImport(SOWImportDTO importDTO, DateTime dateStamp)
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

        public List<SOWDTO> CreateListFromExcelBase64(SOWImportDTO importDTO)
        {
            BTSQuery btsquery = new BTSQuery();
            UserQuery userQuery = new UserQuery();
            var base64 = importDTO.File;
            base64 = base64.Replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "");
            var wb = ExcelConverter.FromBase64(base64);
            var sheet = wb.Worksheet("SOWUpload");

            var nonEmptyRowCount = sheet.RowsUsed().Count() + 1;
            var areaQuery = new AreaQuery(Db);
            var operatorQuery = new OperatorQuery(Db);
            var technologyQuery = new TechnologyQuery(Db);
            var SOWQuery = new SOWQuery(Db);
            List<SOWDTO> SOWList = new List<SOWDTO>();
            List<SOWAssignDTO> sowAssign = new List<SOWAssignDTO>();
            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);
                var pmouniq = row.Cell(1).Value.ToString();
                var project = row.Cell(2).Value.ToString();
                var duid = row.Cell(3).Value.ToString();
                var bts = row.Cell(4).Value.ToString();
                var tech = row.Cell(5).Value.ToString();
                var sowname = row.Cell(6).Value.ToString();
                var codate = row.Cell(7).Value.ToString();
                var assigndate = row.Cell(8).Value.ToString();
                var lvdate = row.Cell(9).Value.ToString();
                var accdate = row.Cell(10).Value.ToString();
                var tp = row.Cell(11).Value.ToString();
                var rtp = row.Cell(12).Value.ToString();
                var teamlead = row.Cell(13).Value.ToString();
                var ploqc = row.Cell(14).Value.ToString();
                var rf = row.Cell(15).Value.ToString();
                var rigger = row.Cell(16).Value.ToString();
                var dt = row.Cell(17).Value.ToString();

                if (teamlead != "")
                {
                    sowAssign.Add(new SOWAssignDTO() { User_FK = userQuery.GetByUsername(teamlead).User_PK });
                }
                if (ploqc != "")
                {
                    sowAssign.Add(new SOWAssignDTO() { User_FK = userQuery.GetByUsername(ploqc).User_PK });
                }
                if (rf != "")
                {
                    sowAssign.Add(new SOWAssignDTO() { User_FK = userQuery.GetByUsername(rf).User_PK });
                }
                if (rigger != "")
                {
                    sowAssign.Add(new SOWAssignDTO() { User_FK = userQuery.GetByUsername(rigger).User_PK });
                }
                if (dt != "")
                {
                    sowAssign.Add(new SOWAssignDTO() { User_FK = userQuery.GetByUsername(dt).User_PK });
                }
                DateTime? codatee;
                if (codate == "")
                {
                    codatee = null;
                }
                else
                {
                    codatee = DateTime.Parse(codate);
                }

                SOWList.Add(new SOWDTO()
                {
                    SOWName = sowname,
                    PMOUniq = pmouniq,
                    BTS_FK = bts == "" ? 0 : btsquery.GetByTowerID(bts.Split('-')[0]).BTS_PK,
                    Project_FK = project == "" ? 0 : Convert.ToInt16(project.Split('-')[0]),
                    Technology_FK = tech == "" ? 0 : technologyQuery.GetByTitle(tech).Technology_PK,
                    CODate = codatee,
                    TglMulai = DateTime.Parse(assigndate),
                    DUID = duid,
                    LVDate = DateTime.Parse(lvdate),
                    AcceptedDate = DateTime.Parse(accdate),
                    StatusSOW_FK = 1,
                    SOWAssigns = sowAssign.Count == 0? null :  sowAssign

                });
            }

            return SOWList;

        }
    }
}
