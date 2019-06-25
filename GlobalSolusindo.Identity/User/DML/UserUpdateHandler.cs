using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using GlobalSolusindo.Identity.UserDetail.DML;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UserUpdateHandler : UpdateOperation
    {
        private UserValidator userValidator;
        private UserFactory userFactory;
        private UserQuery userQuery;
        private UserEntryDataProvider userEntryDataProvider;
        private AccessControl accessControl;
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

        public UserUpdateHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
            this.userQuery = userQuery;
            this.accessControl = accessControl;
            this.userEntryDataProvider = new UserEntryDataProvider(db, user, accessControl, userQuery);
            MapJabatanToRoleGroup();
        }

        private void MapJabatanToRoleGroup()
        {
            jabatanRoleGroupMapping.Add(1, 11);
            jabatanRoleGroupMapping.Add(2, 13);
            jabatanRoleGroupMapping.Add(3, 14);
            jabatanRoleGroupMapping.Add(4, 8);
            jabatanRoleGroupMapping.Add(5, 12);
            jabatanRoleGroupMapping.Add(6, 15);
        }

        private void Initialize(UserValidator userValidator, UserFactory userFactory)
        {
            this.userValidator = userValidator;
            this.userFactory = userFactory;
        }

        public void UpdateUser(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDbAndUpdateFromDTO(userDTO, dateStamp);
        }

        public void CreateRoleGroupIfJabatanIsAssignable(UserDTO userDTO, DateTime dateStamp)
        {
            MappingUserToRoleGroupCreateHandler mappingUserToRoleGroupCreateHandler = new MappingUserToRoleGroupCreateHandler(Db, User, new MappingUserToRoleGroup.MappingUserToRoleGroupValidator(), new MappingUserToRoleGroup.MappingUserToRoleGroupFactory(Db, User), new MappingUserToRoleGroup.Queries.MappingUserToRoleGroupQuery(), accessControl);

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

        public SaveResult<UserEntryModel> Save(UserDTO userDTO, DateTime dateStamp)
        {
            userDTO.Username = userDTO.UserCode;
            var user = Db.tblM_User.Find(userDTO.User_PK);
            userDTO.Password = user.Password;

            ModelValidationResult validationResult = userValidator.Validate(userDTO);
            bool success = false;
            UserEntryModel model = null;

            if (validationResult.IsValid)
            {
                UserDetailUpdateHandler userDetailCreateHandler =
                  new UserDetailUpdateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), accessControl);

                var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);

                if (userDetailSaveResult.Success)
                {
                    success = true;
                    DeleteMappingUserRoleGroup(userDTO);
                    UpdateUser(userDTO, dateStamp);
                    Db.SaveChanges();
                    CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
                    model = userEntryDataProvider.Get(userDTO.User_PK);
                }
            }

            return new SaveResult<UserEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
