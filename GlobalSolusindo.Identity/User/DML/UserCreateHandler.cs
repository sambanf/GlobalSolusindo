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
    public interface IUserCodeGenerator
    {
        string GetNextUserCode();
    }

    public class UserCodeGenerator : IUserCodeGenerator
    {
        private GlobalSolusindoDb db;
        public UserCodeGenerator(GlobalSolusindoDb db)
        {
            this.db = db;
        }
        public string GetNextUserCode()
        {
            return db.usp_GetDocNumber("USER", 0).FirstOrDefault();
        }
    }

    public class UserCreateHandler : CreateOperation
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

        public UserCreateHandler(GlobalSolusindoDb db, tblM_User user, UserValidator userValidator, UserFactory userFactory, UserQuery userQuery, AccessControl accessControl) : base(db, user)
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
            jabatanRoleGroupMapping.Add(1, 4);
            jabatanRoleGroupMapping.Add(2, 9);
            jabatanRoleGroupMapping.Add(3, 7);
            jabatanRoleGroupMapping.Add(4, 1);
            jabatanRoleGroupMapping.Add(5, 10);
            jabatanRoleGroupMapping.Add(6, 6);
            jabatanRoleGroupMapping.Add(7, 5);
            jabatanRoleGroupMapping.Add(8, 8);
            jabatanRoleGroupMapping.Add(9, 2);
            jabatanRoleGroupMapping.Add(10, 3);
            jabatanRoleGroupMapping.Add(11, 11);
            jabatanRoleGroupMapping.Add(13, 12);
        }

        public tblM_User Insert(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            tblM_User user = userFactory.CreateFromDTO(userDTO, dateStamp);
            return Db.tblM_User.Add(user);
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

        public SaveResult<UserEntryModel> Save(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO.Status_FK == 0)
                userDTO.Status_FK = 1;


            ModelValidationResult validationResult = userValidator.Validate(userDTO);
            bool success = false;
            UserEntryModel model = null;
            if (validationResult.IsValid)
            {
                userDTO.Username = userDTO.UserCode = new UserCodeGenerator(this.Db).GetNextUserCode();

                UserDetailCreateHandler userDetailCreateHandler =
                    new UserDetailCreateHandler(Db, User, new UserDetailValidator(), new UserDetailFactory(Db, User), new UserDetailQuery(), accessControl);

                var userDetailSaveResult = userDetailCreateHandler.Save(userDTO, dateStamp);

                if (userDetailSaveResult.Success)
                {
                    userDTO.UserDetail_FK = userDetailSaveResult.Model.Model.UserDetail_PK;
                    tblM_User user = Insert(userDTO, dateStamp);
                    Db.SaveChanges();
                    userDTO.User_PK = user.User_PK;
                    CreateRoleGroupIfJabatanIsAssignable(userDTO, dateStamp);
                    success = true;
                    model = userEntryDataProvider.Get(user.User_PK);
                }
            }

            return new SaveResult<UserEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
