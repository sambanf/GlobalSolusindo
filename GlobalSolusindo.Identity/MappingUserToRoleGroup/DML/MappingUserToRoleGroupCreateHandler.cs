using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.DML
{
    public class MappingUserToRoleGroupCreateHandler : CreateOperation
    {
        private MappingUserToRoleGroupValidator mappingUserToRoleGroupValidator;
        private MappingUserToRoleGroupFactory mappingUserToRoleGroupFactory;
        private MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery;
        private MappingUserToRoleGroupEntryDataProvider mappingUserToRoleGroupEntryDataProvider;

        private int[] assignableJabatan = new int[]
        {
            1, //TeamLead
            2, //Drive Tester
            3, //Rigger
            4, //Surveyor
            5, //Radio Frequency (RF)
            6 //Radio Network Optimization (RNO)
        };

        public MappingUserToRoleGroupCreateHandler(GlobalSolusindoDb db, tblM_User user, MappingUserToRoleGroupValidator mappingUserToRoleGroupValidator, MappingUserToRoleGroupFactory mappingUserToRoleGroupFactory, MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery, AccessControl accessControl) : base(db, user)
        {
            this.mappingUserToRoleGroupValidator = mappingUserToRoleGroupValidator;
            this.mappingUserToRoleGroupFactory = mappingUserToRoleGroupFactory;
            this.mappingUserToRoleGroupQuery = mappingUserToRoleGroupQuery;
            this.mappingUserToRoleGroupEntryDataProvider = new MappingUserToRoleGroupEntryDataProvider(db, user, accessControl, mappingUserToRoleGroupQuery);
        }

        public tblM_MappingUserToRoleGroup Insert(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingUserToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingUserToRoleGroup model is null.");

            var recordIsExist = Db.tblM_MappingUserToRoleGroup.Find(mappingUserToRoleGroupDTO.User_PK, mappingUserToRoleGroupDTO.RoleGroup_PK) != null;
            if (recordIsExist)
                throw new KairosException("User already exist in the group.");

            var user = new UserQuery(Db).GetByPrimaryKey((int)mappingUserToRoleGroupDTO.User_PK);

            if (user != null)
            {
                if (assignableJabatan.Contains(user.KategoriJabatan_FK))
                {
                    var mappingUserRoleGroupCount = Db.tblM_MappingUserToRoleGroup.Where(x => x.User_PK == user.User_PK).Count();
                    //if (mappingUserRoleGroupCount > 0)
                    //{
                    //    throw new KairosException($"This user cannot have more than one role group because its position is '{user.KategoriJabatanTitle}'.");
                    //}
                }
            }

            tblM_MappingUserToRoleGroup mappingUserToRoleGroup = mappingUserToRoleGroupFactory.CreateFromDTO(mappingUserToRoleGroupDTO, dateStamp);
            return Db.tblM_MappingUserToRoleGroup.Add(mappingUserToRoleGroup);
        }

        public SaveResult<MappingUserToRoleGroupEntryModel> Save(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = mappingUserToRoleGroupValidator.Validate(mappingUserToRoleGroupDTO);
            bool success = false;
            MappingUserToRoleGroupEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_MappingUserToRoleGroup mappingUserToRoleGroup = Insert(mappingUserToRoleGroupDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = mappingUserToRoleGroupEntryDataProvider.Get(mappingUserToRoleGroup.RoleGroup_PK, mappingUserToRoleGroup.User_PK);
            }

            return new SaveResult<MappingUserToRoleGroupEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
