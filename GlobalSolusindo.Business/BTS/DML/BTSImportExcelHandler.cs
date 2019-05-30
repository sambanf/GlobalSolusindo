using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Operator.Queries;
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

namespace GlobalSolusindo.Business.BTS.DML
{
    public class BTSImportDTO
    {
        [JsonProperty("file")]
        public string File { get; set; }
    }

    public class BTSImportExcelHandler : CreateOperation
    {
        private BTSValidator btsValidator;
        private BTSFactory btsFactory;
        private BTSQuery btsQuery;
        private BTSEntryDataProvider btsEntryDataProvider;

        public BTSImportExcelHandler(GlobalSolusindoDb db, tblM_User user, BTSValidator btsValidator, BTSFactory btsFactory, BTSQuery btsQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsValidator = btsValidator;
            this.btsFactory = btsFactory;
            this.btsQuery = btsQuery;
            this.btsEntryDataProvider = new BTSEntryDataProvider(db, user, accessControl, btsQuery);
            //((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 300; //set time out
            //db.Database.CommandTimeout = 300;
        }

        public List<ModelValidationResult> Validate(List<BTSDTO> btsList)
        {
            List<ModelValidationResult> validationResults = new List<ModelValidationResult>();
            BTSValidator validator = new BTSValidator();
            foreach (var bts in btsList)
            {
                var validationResult = validator.Validate(bts);
                validationResults.Add(validationResult);
            }
            return validationResults;
        }

        public tblM_BTS AddBTS(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTS bts = btsFactory.CreateFromDTO(btsDTO, dateStamp);
            bts = Db.tblM_BTS.Add(bts);
            btsDTO.BTS_PK = bts.BTS_PK;
            return bts;
        }

        public void UpdateBTS(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTS bts = btsFactory.CreateFromDbAndUpdateFromDTO(btsDTO, dateStamp);
        }

        public List<SaveResult<BTSDTO>> GetSaveResults(List<BTSDTO> btsList, DateTime dateStamp)
        {
            var validationResults = Validate(btsList);
            List<SaveResult<BTSDTO>> saveResults = new List<SaveResult<BTSDTO>>();

            foreach (var validationResult in validationResults)
            {
                var btsDTO = (BTSDTO)validationResult.GetModel();
                if (validationResult.IsValid)
                {
                    if (btsDTO.BTS_PK > 0)
                    {
                        UpdateBTS(btsDTO, dateStamp);
                    }
                    else
                    {
                        AddBTS(btsDTO, dateStamp);
                    }

                    var saveResult = new SaveResult<BTSDTO>()
                    {
                        Message = "SUCCESS",
                        Model = btsDTO,
                        Success = true,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
                else
                {
                    var saveResult = new SaveResult<BTSDTO>()
                    {
                        Message = "FAILED",
                        Model = btsDTO,
                        Success = false,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
            }
            return saveResults;
        }

        public List<SaveResult<BTSDTO>> ExecuteImport(BTSImportDTO importDTO, DateTime dateStamp)
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

        public List<BTSDTO> CreateListFromExcelBase64(BTSImportDTO importDTO)
        {
            var base64 = importDTO.File;
            base64 = base64.Replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "");
            var wb = ExcelConverter.FromBase64(base64);
            var sheet = wb.Worksheet("BTSUpload");

            var nonEmptyRowCount = sheet.RowsUsed().Count() + 1;
            var areaQuery = new AreaQuery(Db);
            var operatorQuery = new OperatorQuery(Db);
            var btsQuery = new BTSQuery(Db);
            List<BTSDTO> btsList = new List<BTSDTO>();

            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);
                var towerId = (string)row.Cell(1).Value;
                var btsName = (string)row.Cell(2).Value;

                //get by itsname first;
                var btsDtoOnDb = btsQuery.GetByTowerID(towerId);
                var btsPk = 0;

                if (btsDtoOnDb == null)
                {
                    btsDtoOnDb = btsQuery.GetByName(btsName);
                }

                if (btsDtoOnDb != null)
                {
                    btsPk = btsDtoOnDb.BTS_PK;
                }

                var cellId = (string)row.Cell(3).Value;

                var operatorName = (string)row.Cell(4).Value;
                var operatorId = operatorQuery.GetByTitle(operatorName).Operator_PK;

                var longitude = Convert.ToString(row.Cell(5).Value);
                var latitude = Convert.ToString(row.Cell(6).Value);

                var areaName = (string)row.Cell(7).Value;
                var areaId = areaQuery.GetByTitle(areaName).Area_PK;

                var address = (string)row.Cell(8).Value;
                var status = (string)row.Cell(9).Value;

                btsList.Add(new BTSDTO()
                {
                    BTS_PK = btsPk,
                    Name = btsName,
                    CellID = cellId,
                    Latitude = latitude,
                    Longitude = longitude,
                    Alamat = address,
                    Area_FK = areaId,
                    AreaTitle = areaName,
                    OperatorTitle = operatorName,
                    Operator_FK = operatorId,
                    Status_FK = 1,
                    TowerID = towerId,
                    StatusBTS_FK = 1,
                });
            }

            return btsList;

        }
    }
}
