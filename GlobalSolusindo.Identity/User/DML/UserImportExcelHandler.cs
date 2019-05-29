using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Kairos.Excel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;

namespace GlobalSolusindo.Identity.User.DML
{
   
    public class UserImportExcelHandler : CreateOperation
    {
        private UserValidator userValidator;
        private UserFactory userFactory;
        private UserQuery userQuery;
        private UserEntryDataProvider userEntryDataProvider;
        private object areaName;

        public UserImportExcelHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
            this.userQuery = userQuery;
            this.userEntryDataProvider = new UserEntryDataProvider(db, user, accessControl, userQuery);
            //((IObjectContextAdapter)Db).ObjectContext.CommandTimeout = 300; //set time out
            //db.Database.CommandTimeout = 300;
        }

        public List<ModelValidationResult> Validate(List<UserDTO> userList)
        {
            List<ModelValidationResult> validationResults = new List<ModelValidationResult>();
            UserValidator validator = new UserValidator();
            foreach (var user in userList)
            {
                var validationResult = validator.Validate(user);
                validationResults.Add(validationResult);
            }
            return validationResults;
        }

        public tblM_User AddUser(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDTO(userDTO, dateStamp);
            user = Db.tblM_User.Add(user);
            userDTO.User_PK = user.User_PK;
            return user;
        }

        public void UpdateUser(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDbAndUpdateFromDTO(userDTO, dateStamp);
        }

        public List<SaveResult<UserDTO>> GetSaveResults(List<UserDTO> userList, DateTime dateStamp)
        {
            var validationResults = Validate(userList);
            List<SaveResult<UserDTO>> saveResults = new List<SaveResult<UserDTO>>();

            foreach (var validationResult in validationResults)
            {
                var userDTO = (UserDTO)validationResult.GetModel();
                if (validationResult.IsValid)
                {
                    if (userDTO.User_PK > 0)
                    {
                        UpdateUser(userDTO, dateStamp);
                    }
                    else
                    {
                        AddUser(userDTO, dateStamp);
                    }

                    var saveResult = new SaveResult<UserDTO>()
                    {
                        Message = "SUCCESS",
                        Model = userDTO,
                        Success = true,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
                else
                {
                    var saveResult = new SaveResult<UserDTO>()
                    {
                        Message = "FAILED",
                        Model = userDTO,
                        Success = false,
                        ValidationResult = validationResult,
                    };
                    saveResults.Add(saveResult);
                }
            }
            return saveResults;
        }

        public List<SaveResult<UserDTO>> ExecuteImport(UserImportDTO importDTO, DateTime dateStamp)
        {
            using (var transaction = new TransactionScope(TransactionScopeOption.Required, TimeSpan.FromHours(1)))
            {
                var list = CreateListFromExcelBase64(importDTO);
                var result = GetSaveResults(list, dateStamp);
                Db.SaveChanges();
                return result;
            }
        }

        public List<UserDTO> CreateListFromExcelBase64(UserImportDTO importDTO)
        {
            var base64 = importDTO.File;
            base64 = base64.Replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "");
            var wb = ExcelConverter.FromBase64(base64);
            var sheet = wb.Worksheet(1);

            var nonEmptyRowCount = sheet.RowsUsed().Count() + 1; 
            var userQuery = new UserQuery(Db);
            List<UserDTO> userList = new List<UserDTO>();

            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);
                var jabatanQuery = new KategoriJabatanQuery(Db);
                var userName = (string)row.Cell(2).Value;
                var userPk = 0;
                //get by itsname first;
                var userDtoOnDb = userQuery.GetByUsername(userName);
               
                if (userDtoOnDb != null)
                {
                    userPk = userDtoOnDb.User_PK;
                }
                
                var jabatanName = (string)row.Cell(2).Value;
                var jabatanId = jabatanQuery.GetByTitle(jabatanName).KategoriJabatan_PK;

                var fullName = Convert.ToString(row.Cell(4).Value);
                var dateOfBirth = Convert.ToString(row.Cell(5).Value);
                var ktp = (string)row.Cell(6).Value;
                var phoneNumber = (string)row.Cell(7).Value;
                var email = (string)row.Cell(8).Value;
                var status = (string)row.Cell(9).Value;

                userList.Add(new UserDTO()
                {
                    //User_PK = userPk,
                    //Name = userName,
                    //CellID = cellId,
                    //Latitude = dateOfBirth,
                    //Longitude = fullName,
                    //Alamat = email,
                    //Area_FK = areaId,
                    //AreaTitle = areaName,
                    //OperatorTitle = operatorName,
                    //Operator_FK = jabatanId,
                    //Status_FK = 1,
                    //TowerID = towerId,
                    //StatusUser_FK = 1,
                });
            }

            return userList;

        }
    }
}
