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
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.Identity.User;

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

        public SOWImportExcelHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator SOWValidator, SOWFactory SOWFactory, SOWAssignFactory sOWAssignFactory, SOWQuery SOWQuery, AccessControl accessControl) : base(db, user)
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
            BTSQuery bTSQuery = new BTSQuery(Db);
            ProjectQuery projectQuery = new ProjectQuery(Db);
            foreach (var validationResult in validationResults)
            {
                var sowdto = (SOWDTO)validationResult.GetModel();

                if (validationResult.IsValid)
                {
                    tblT_SOW sow = AddSOW(sowdto, dateStamp);
                    SaveChanges();
                    sowdto.SOW_PK = sow.SOW_PK;
                    AddSowAssign(sowdto, dateStamp);
                    SaveChanges();
                    sowdto.BTSName = bTSQuery.GetByPrimaryKey(sowdto.BTS_FK).Name;
                    sowdto.ProjectName = projectQuery.GetByPrimaryKey(sowdto.Project_FK).OperatorTitle +" "+ projectQuery.GetByPrimaryKey(sowdto.Project_FK).VendorTitle + " " + projectQuery.GetByPrimaryKey(sowdto.Project_FK).DeliveryAreaTitle;
                    var saveResult = new SaveResult<SOWDTO>()
                    {
                        Message = "SUCCESS",
                        Model = sowdto,
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
                        Model = sowdto,
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

                List<SOWAssignDTO> sowAssign = new List<SOWAssignDTO>();
                if (teamlead != "")
                {
                    string[] user = teamlead.Split('-');
                    sowAssign.Add(new SOWAssignDTO() { User_FK = int.Parse(user[1]) , KategoriJabatan_FK = 1});
                }
                if (ploqc != "")
                {
                    string[] user = ploqc.Split('-');
                    sowAssign.Add(new SOWAssignDTO() { User_FK = int.Parse(user[1]), KategoriJabatan_FK = 6 });
                }
                if (rf != "")
                {   
                    string[] user = rf.Split('-');
                    sowAssign.Add(new SOWAssignDTO() { User_FK = int.Parse(user[1]), KategoriJabatan_FK = 5 });
                }
                if (rigger != "")
                {
                    string[] user = rigger.Split('-');
                    sowAssign.Add(new SOWAssignDTO() { User_FK = int.Parse(user[1]), KategoriJabatan_FK = 3 });
                }
                if (dt != "")
                {
                    string[] user = dt.Split('-');
                    sowAssign.Add(new SOWAssignDTO() { User_FK = int.Parse(user[1]), KategoriJabatan_FK = 2 });
                    //Old Algorithm
                    //UserDTO user = userQuery.GetByFullname(dt);
                    //sowAssign.Add(new SOWAssignDTO() { User_FK = user.User_PK, KategoriJabatan_FK = user.KategoriJabatan_FK });
                }
                DateTime? nulldate = null;

                SOWDTO sowdto = new SOWDTO();
                sowdto.SOWName = sowname;
                sowdto.PMOUniq = pmouniq;
                sowdto.BTS_FK = bts == "" ? 0 : btsquery.GetByTowerID(bts.Split('-')[0]).BTS_PK;
                sowdto.Project_FK = project == "" ? 0 : Convert.ToInt16(project.Split('-')[0]);
                sowdto.Technology_FK = tech == "" ? 0 : technologyQuery.GetByTitle(tech).Technology_PK;
                sowdto.CODate = codate == "" ? nulldate : DateTime.Parse(codate);
                sowdto.TglMulai = assigndate == "" ? nulldate : DateTime.Parse(assigndate);
                sowdto.DUID = duid;
                sowdto.LVDate = lvdate == "" ? nulldate : DateTime.Parse(lvdate);
                sowdto.AcceptedDate = accdate == "" ? nulldate : DateTime.Parse(accdate);
                sowdto.StatusSOW_FK = 1;
                sowdto.SOWAssigns = sowAssign.Count == 0 ? null : sowAssign;
                SOWList.Add(sowdto);
            }

            return SOWList;

        }
    }
}
