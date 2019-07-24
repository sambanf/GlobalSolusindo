﻿using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.CategoryContract.Queries;
using GlobalSolusindo.Identity.Gender.Queries;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using GlobalSolusindo.Identity.Religion.Queries;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using GlobalSolusindo.Identity.UserDetail.DML;
using GlobalSolusindo.Identity.UserDetail.Queries;
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
        private Dictionary<int, int> jabatanRoleGroupMapping = new Dictionary<int, int>();

        private int[] assignableJabatan = new int[]
         {
                1, //TeamLead
                2, //Drive Tester
                3, //Rigger
                4, //Surveyor
                5, //Radio Frequency (RF)
                6 //Radio Network Optimization (RNO)
         };

        private void MapJabatanToRoleGroup()
        {
            jabatanRoleGroupMapping.Add(1, 11);
            jabatanRoleGroupMapping.Add(2, 13);
            jabatanRoleGroupMapping.Add(3, 14);
            jabatanRoleGroupMapping.Add(4, 8);
            jabatanRoleGroupMapping.Add(5, 12);
            jabatanRoleGroupMapping.Add(6, 15);
        }

        public UserImportExcelHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
            this.userQuery = userQuery;
            this.userEntryDataProvider = new UserEntryDataProvider(db, user, accessControl, userQuery);
            MapJabatanToRoleGroup();
        }

        public void CreateRoleGroupIfJabatanIsAssignable(UserDTO userDTO, DateTime dateStamp)
        {
            MappingUserToRoleGroupCreateHandler mappingUserToRoleGroupCreateHandler = new MappingUserToRoleGroupCreateHandler(Db, User, new MappingUserToRoleGroup.MappingUserToRoleGroupValidator(), new MappingUserToRoleGroup.MappingUserToRoleGroupFactory(Db, User), new MappingUserToRoleGroup.Queries.MappingUserToRoleGroupQuery(), new AccessControl(User));

            if (assignableJabatan.Contains(userDTO.KategoriJabatan_FK))
            {
                jabatanRoleGroupMapping.TryGetValue(userDTO.KategoriJabatan_FK, out int roleGroupPk);
                var mappingUserToRoleDTO = new MappingUserToRoleGroupDTO
                {
                    User_PK = userDTO.User_PK,
                    RoleGroup_PK = roleGroupPk
                };
                mappingUserToRoleGroupCreateHandler.Save(mappingUserToRoleDTO, dateStamp);
            }
        }

        private tblM_User DeleteMappingUserRoleGroup(UserDTO userDTO)
        {
            var existingUserOnDB = Db.tblM_User.Find(userDTO.User_PK);

            if (existingUserOnDB != null)
            {
                if (assignableJabatan.Contains(existingUserOnDB.KategoriJabatan_FK))
                {
                    var roleUserRoleGroupMappings = Db.tblM_MappingUserToRoleGroup.Where(x => x.User_PK == userDTO.User_PK);

                    foreach (var item in roleUserRoleGroupMappings)
                    {
                        Db.tblM_MappingUserToRoleGroup.Remove(item);
                    }
                    Db.SaveChanges();
                }
            }

            return existingUserOnDB;
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

            UserDetailCreateHandler userDetailCreateHandler =
                   new UserDetailCreateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), new AccessControl(User));
            var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);

            if (userDetailSaveResult.Success)
            {
                userDTO.UserDetail_FK = userDetailSaveResult.Model.Model.UserDetail_PK;
            }

            tblM_User user = userFactory.CreateFromDTO(userDTO, dateStamp);
            user = Db.tblM_User.Add(user);
            Db.SaveChanges();
            userDTO.User_PK = user.User_PK;
            return user;
        }

        public void UpdateUser(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            UserDetailUpdateHandler userDetailCreateHandler =
                new UserDetailUpdateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), new AccessControl(User));

            var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);
            if (userDetailSaveResult.Success)
            {
                tblM_User user = userFactory.CreateFromDbAndUpdateFromDTO(userDTO, dateStamp);
                //Db.SaveChanges();
            }
        }

        public List<SaveResult<UserDTO>> GetSaveResults(List<UserDTO> userList, DateTime dateStamp)
        {
            var validationResults = Validate(userList);
            List<SaveResult<UserDTO>> saveResults = new List<SaveResult<UserDTO>>();

            foreach (var validationResult in validationResults)
            {
                var userDTO = (UserDTO)validationResult.GetModel();
                var createHandler = new UserCreateHandler(Db, User, new UserValidator(), new UserFactory(Db, User), new UserQuery(Db), new AccessControl(this.User));
                var updateHandler = new UserUpdateHandler(Db, User, new UserValidator(), new UserFactory(Db, User), new UserQuery(Db), new AccessControl(User));
                if (validationResult.IsValid)
                {
                    if (userDTO.User_PK > 0)
                    {
                        updateHandler.Save(userDTO, dateStamp);
                        //DeleteMappingUserRoleGroup(userDTO);
                        //UpdateUser(userDTO, dateStamp);
                        //CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
                    }
                    else
                    {
                        createHandler.Save(userDTO, dateStamp);
                        //AddUser(userDTO, dateStamp);
                        //CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
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
                transaction.Complete();
                return result;
            }
        }

        public List<UserDTO> CreateListFromExcelBase64(UserImportDTO importDTO)
        {
            var base64 = importDTO.File;
            base64 = base64.Replace("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,", "");
            var wb = ExcelConverter.FromBase64(base64);
            var sheet = wb.Worksheet("UserUpload");

            var nonEmptyRowCount = sheet.RowsUsed().Count() + 1;
            var userQuery = new UserQuery(Db);
            List<UserDTO> userList = new List<UserDTO>();
            var jabatanQuery = new KategoriJabatanQuery(Db);
            MaritalStatusQuery maritalStatusQuery = new MaritalStatusQuery();
            GenderQuery genderQuery = new GenderQuery();
            CategoryContractQuery categoryContractQuery = new CategoryContractQuery();
            ReligionQuery religionQuery = new ReligionQuery();
            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);

                //Excel value
                var xNomor = row.Cell(1).Value;
                var xUserName = row.Cell(2).Value;
                var XJabatanName = row.Cell(3).Value;
                var xFullName = row.Cell(4).Value;
                var xTglLahir = row.Cell(5).Value;
                var xKtp = row.Cell(6).Value;
                var xReligion = row.Cell(7).Value;
                var xCategoryContract = row.Cell(8).Value;
                var xProject = row.Cell(9).Value;
                var xGender = row.Cell(10).Value;
                var xMaritalStatus = row.Cell(11).Value;
                var xNpwp = row.Cell(12).Value;
                var xBpjs = row.Cell(13).Value;
                var xJoinDate = row.Cell(14).Value;
                var xContactNumber = row.Cell(15).Value;
                var xG1EmailId = row.Cell(16).Value;
                var xPersonalEmail = row.Cell(17).Value;
                var xAddress = row.Cell(18).Value;
                var xBankName = row.Cell(19).Value;
                var xAccountNumber = row.Cell(20).Value;
                var xSalary = row.Cell(21).Value;
                var xRemark = row.Cell(22).Value;
                var xStatus = row.Cell(23).Value.ToString();

                var defaultEmptyDate = new DateTime(1990, 01, 01);
                var dateContainer = new DateTime(1990, 01, 01);
                double doubleContainer = 0;

                var nomor = row.Cell(1).Value;
                var userName = xUserName == null ? "" : xUserName.ToString();
                var jabatanName = XJabatanName == null ? "" : XJabatanName.ToString();
                var fullName = xFullName == null ? "" : xFullName.ToString();
                var tglLahir = xTglLahir == null ? defaultEmptyDate :
                    DateTime.TryParse(xTglLahir.ToString(), out dateContainer) == true ? dateContainer : defaultEmptyDate;
                var ktp = xKtp == null ? "" : xKtp.ToString();
                var religion = xReligion == null ? "" : xReligion.ToString();
                var categoryContract = xCategoryContract == null ? "" : xCategoryContract.ToString();
                var project = xProject == null ? "" : xProject.ToString();
                var gender = xGender == null ? "" : xGender.ToString();
                var maritalStatus = xMaritalStatus == null ? "" : xMaritalStatus.ToString();
                var npwp = xNpwp == null ? "" : xNpwp.ToString();
                var bpjs = xBpjs == null ? "" : xBpjs.ToString();
                var joinDate = xJoinDate == null ? defaultEmptyDate :
                    DateTime.TryParse(xJoinDate.ToString(), out dateContainer) == true ? dateContainer : defaultEmptyDate;
                var contactNumber = xContactNumber == null ? "" : xContactNumber.ToString();
                var g1EmailId = xG1EmailId == null ? "" : xG1EmailId.ToString();
                var personalEmail = xPersonalEmail == null ? "" : xPersonalEmail.ToString();
                var address = xAddress == null ? "" : xAddress.ToString();
                var bankName = xBankName == null ? "" : xBankName.ToString();
                var accountNumber = xAccountNumber == null ? "" : xAccountNumber.ToString();
                var salary = xSalary == null ? 0 :
                    double.TryParse(xSalary.ToString(), out doubleContainer) == true ? doubleContainer : 0;
                var remark = xRemark == null ? "" : xRemark.ToString();
                var status = xStatus == null || xStatus == "Active" ? 1 :xStatus == "Inactive" ? 2:3;

                var userPk = 0;
                var userDetailFk = 0;
                //get by itsname first;
                var userDtoOnDb = userQuery.GetByUsername(userName);
                var userCode = userName;

                if (userDtoOnDb != null)
                {
                    userPk = userDtoOnDb.User_PK;
                    userDetailFk = userDtoOnDb.UserDetail_FK;
                }

                var jabatanFk = 0;
                var jabatan = jabatanQuery.GetByTitle(jabatanName);
                if (jabatan != null)
                {
                    jabatanFk = jabatan.KategoriJabatan_PK;
                }

                var newUser = new UserDTO()
                {
                    User_PK = userPk,
                    UserDetail_FK = userDetailFk,
                    UserDetail_PK = userDetailFk,
                    UserCode = userCode,
                    Name = fullName,
                    TglLahir = tglLahir,
                    NoKTP = ktp,
                    NoHP = contactNumber,
                    Email = g1EmailId,
                    PersonalEmail = personalEmail,
                    Address = address,
                    Description = remark,
                    Username = userName,
                    KategoriJabatan_FK = jabatanFk,
                    KategoriJabatanTitle = jabatanName,
                    //Password = user.Password, 
                    Status_FK = status,
                    Password = "admin@123",
                    AccountNumber = accountNumber,
                    BankName = bankName,
                    BPJS = bpjs,
                    ////WAIT
                    CategoryContract = categoryContract == "" ? 0 : categoryContractQuery.GetByName(categoryContract).CategoryContract_PK,
                    Gender = gender == "" ? 0 : genderQuery.GetByName(gender).Gender_PK,
                    JoinDate = joinDate,
                    MaritalStatus = maritalStatus == "" ? 0 : maritalStatusQuery.GetByName(maritalStatus).MaritalStatus_PK,
                    NPWP = npwp,
                    Project = project == "" ? 0 : Convert.ToInt16(project.Split('-')[0]),
                    Religion = religion == "" ? 0 : religionQuery.GetByName(religion).Religion_PK,
                    Salary = salary
                };

                userList.Add(newUser);
            }

            return userList;

        }
    }
}
