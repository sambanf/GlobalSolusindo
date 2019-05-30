using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
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
                if (validationResult.IsValid)
                {
                    if (userDTO.User_PK > 0)
                    {
                        DeleteMappingUserRoleGroup(userDTO);
                        UpdateUser(userDTO, dateStamp);
                        CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
                    }
                    else
                    {
                        AddUser(userDTO, dateStamp);
                        CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
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

            //first index is 1, and the first one is header title
            for (int i = 2; i < nonEmptyRowCount; i++)
            {
                var row = sheet.Row(i);
                var jabatanQuery = new KategoriJabatanQuery(Db);
                var userName = (string)row.Cell(2).Value;
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

                var jabatanName = (string)row.Cell(3).Value;
                var jabatanFk = 0;
                var jabatan = jabatanQuery.GetByTitle(jabatanName);
                if (jabatan != null)
                {
                    jabatanFk = jabatan.KategoriJabatan_PK;
                }

                var fullName = Convert.ToString(row.Cell(4).Value);

                DateTime dateOfBirth = DateTime.Now;
                if (row.Cell(5).Value != null || string.IsNullOrEmpty(row.Cell(5).Value.ToString()))
                    DateTime.TryParse(row.Cell(5).Value.ToString(), out dateOfBirth);

                var ktp = (string)row.Cell(6).Value;
                var phoneNumber = (string)row.Cell(7).Value;
                var email = (string)row.Cell(8).Value;
                var personalEmail = (string)row.Cell(9).Value;
                var address = (string)row.Cell(10).Value;
                var description = (string)row.Cell(11).Value;
                var status = 1;

                int.TryParse(row.Cell(13).Value.ToString(), out status);
                if (status == 0)
                {
                    status = 3;
                }

                userList.Add(new UserDTO()
                {
                    User_PK = userPk,
                    UserDetail_FK = userDetailFk,
                    UserDetail_PK = userDetailFk,
                    UserCode = userCode,
                    Name = fullName,
                    TglLahir = dateOfBirth,
                    NoKTP = ktp,
                    NoHP = phoneNumber,
                    Email = email,
                    PersonalEmail = personalEmail,
                    Address = address,
                    Description = description,
                    Username = userName,
                    KategoriJabatan_FK = jabatanFk,
                    KategoriJabatanTitle = jabatanName,
                    //Password = user.Password, 
                    Status_FK = status,
                    Password = "admin@123"
                });
            }

            return userList;

        }
    }
}
