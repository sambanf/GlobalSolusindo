using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup
{
    public class MappingUserToRoleGroupFactory : FactoryBase
    {
        public MappingUserToRoleGroupFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_MappingUserToRoleGroup CreateFromDTO(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingUserToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingUserToRoleGroup model is null.");
            mappingUserToRoleGroupDTO.Status_FK = (int)RecordStatus.Active;
            mappingUserToRoleGroupDTO.CreatedBy = User.Username;
            mappingUserToRoleGroupDTO.CreatedDate = dateStamp;
            mappingUserToRoleGroupDTO.UpdatedBy = User.Username;
            mappingUserToRoleGroupDTO.UpdatedDate = dateStamp;
            tblM_MappingUserToRoleGroup mappingUserToRoleGroup = mappingUserToRoleGroupDTO.ToObject<tblM_MappingUserToRoleGroup>();
            return mappingUserToRoleGroup;
        }

        public tblM_MappingUserToRoleGroup CreateFromDbAndUpdateFromDTO(MappingUserToRoleGroupDTO mappingUserToRoleGroupDTO, DateTime dateStamp)
        {
            tblM_MappingUserToRoleGroup mappingUserToRoleGroup;

            if (mappingUserToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingUserToRoleGroup model is null.");
            mappingUserToRoleGroup = Db.tblM_MappingUserToRoleGroup.Find(mappingUserToRoleGroupDTO.User_PK, mappingUserToRoleGroupDTO.RoleGroup_PK);
            if (mappingUserToRoleGroup == null)
                throw new KairosException($"Record with key '{mappingUserToRoleGroupDTO.User_PK}' and '{mappingUserToRoleGroupDTO.RoleGroup_PK}' is not found.");

            mappingUserToRoleGroup.UpdateValueFrom(mappingUserToRoleGroupDTO, "Status_FK");
            mappingUserToRoleGroupDTO.CreatedBy = mappingUserToRoleGroup.CreatedBy;
            mappingUserToRoleGroupDTO.CreatedDate = mappingUserToRoleGroup.CreatedDate;
            mappingUserToRoleGroup.UpdatedBy = mappingUserToRoleGroupDTO.UpdatedBy = User.Username;
            mappingUserToRoleGroup.UpdatedDate = mappingUserToRoleGroupDTO.UpdatedDate = dateStamp;

            return mappingUserToRoleGroup;
        }
    }
}
