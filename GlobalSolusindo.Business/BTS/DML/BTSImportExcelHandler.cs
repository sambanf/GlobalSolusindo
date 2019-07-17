using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSTechnology;
using GlobalSolusindo.Business.BTSTechnology.Queries;
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
        private BTSTechnologyFactory btstFactory;
        private BTSQuery btsQuery;
        private BTSEntryDataProvider btsEntryDataProvider;

        public BTSImportExcelHandler(GlobalSolusindoDb db, tblM_User user, BTSValidator btsValidator, BTSFactory btsFactory, BTSTechnologyFactory bTSTechnologyFactory, BTSQuery btsQuery, AccessControl accessControl) : base(db, user)
        {
            this.btsValidator = btsValidator;
            this.btsFactory = btsFactory;
            this.btstFactory = bTSTechnologyFactory;
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

        public tblM_BTSTechnology AddBTSTechno(BTSTechnologyDTO btstDTO, DateTime dateStamp)
        {
            if (btstDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            tblM_BTSTechnology btst = btstFactory.CreateFromDTO(btstDTO, dateStamp);
            btst = Db.tblM_BTSTechnology.Add(btst);
            return btst;
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
            var btstechnoQuery = new BTSTechnologyQuery(Db);
            var validationResults = Validate(btsList);
            List<SaveResult<BTSDTO>> saveResults = new List<SaveResult<BTSDTO>>();

            foreach (var validationResult in validationResults)
            {
                var btsDTO = (BTSDTO)validationResult.GetModel();
                bool check = true;
                foreach (var item in btsDTO.BTSTechnologies)
                {
                    if (item.Technology_FK == 0)
                    {
                        check = false;
                    }
                }

                if (validationResult.IsValid && (check == true))
                {
                    if (btsDTO.BTS_PK > 0)
                    {
                        UpdateBTS(btsDTO, dateStamp);
                        List<BTSTechnologyDTO> list = btstechnoQuery.GetByBTSFK(btsDTO.BTS_PK);
                        
                        foreach (var item in btsDTO.BTSTechnologies)
                        {
                            item.BTS_FK = btsDTO.BTS_PK;
                            bool ada = false;
                            foreach (var item2 in list)
                            {
                                if (item.Technology_FK == item2.Technology_FK)
                                {
                                    ada = true;
                                }
                            }
                            if (ada == false)
                            {
                                
                                AddBTSTechno(item, dateStamp);
                            }
                        }
                    }
                    else
                    {
                        AddBTS(btsDTO, dateStamp);
                        foreach (var item in btsDTO.BTSTechnologies)
                        {
                            item.BTS_FK = btsDTO.BTS_PK;
                            AddBTSTechno(item, dateStamp);
                        }
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
            var technologyQuery = new TechnologyQuery(Db);
            var btsQuery = new BTSQuery(Db);
            List<BTSDTO> btsList = new List<BTSDTO>();

            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);
                var towerId = row.Cell(1).Value.ToString();
                var btsName = row.Cell(2).Value.ToString();

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

                var cellId = row.Cell(3).Value.ToString();

                var operatorName = row.Cell(4).Value.ToString();
                var operatorId = operatorQuery.GetByTitle(operatorName).Operator_PK;

                var longitude = Convert.ToString(row.Cell(5).Value);
                var latitude = Convert.ToString(row.Cell(6).Value);

                var areaName = row.Cell(7).Value.ToString();
                var areaId = areaQuery.GetByTitle(areaName).Area_PK;

                var address = row.Cell(8).Value.ToString();
                var status = row.Cell(9).Value.ToString();

                List<BTSTechnologyDTO> techno = new List<BTSTechnologyDTO>();
                
                var technology = row.Cell(10).Value.ToString().Split(';').ToList();
                foreach (var item in technology)
                {
                    BTSTechnologyDTO itemtech = new BTSTechnologyDTO();
                    try
                    {
                        
                        itemtech.Technology_FK = technologyQuery.GetByTitle(item).Technology_PK;
                    }
                    catch (Exception)
                    {
                        itemtech.Technology_FK = 0;
                    }
                    techno.Add(itemtech);
                }

                

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
                    BTSTechnologies = techno
                });
            }

            return btsList;

        }
    }
}
