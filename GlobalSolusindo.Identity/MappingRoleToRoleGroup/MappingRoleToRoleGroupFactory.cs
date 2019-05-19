using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup
{
    public class MappingRoleToRoleGroupFactory : FactoryBase
    {
        public MappingRoleToRoleGroupFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_MappingRoleToRoleGroup CreateFromDTO(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            if (mappingRoleToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingRoleToRoleGroup model is null.");
            mappingRoleToRoleGroupDTO.Status_FK = (int)RecordStatus.Active;
            mappingRoleToRoleGroupDTO.CreatedBy = User.Username;
            mappingRoleToRoleGroupDTO.CreatedDate = dateStamp;
            mappingRoleToRoleGroupDTO.UpdatedBy = User.Username;
            mappingRoleToRoleGroupDTO.UpdatedDate = dateStamp;
            tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = mappingRoleToRoleGroupDTO.ToObject<tblM_MappingRoleToRoleGroup>();
            return mappingRoleToRoleGroup;
        }

        public tblM_MappingRoleToRoleGroup CreateFromDbAndUpdateFromDTO(MappingRoleToRoleGroupDTO mappingRoleToRoleGroupDTO, DateTime dateStamp)
        {
            tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup;

            if (mappingRoleToRoleGroupDTO == null)
                throw new ArgumentNullException("MappingRoleToRoleGroup model is null.");
            mappingRoleToRoleGroup = Db.tblM_MappingRoleToRoleGroup.Find(mappingRoleToRoleGroupDTO.Role_PK, mappingRoleToRoleGroupDTO.RoleGroup_PK);
            if (mappingRoleToRoleGroup == null)
                throw new KairosException($"Record with key '{mappingRoleToRoleGroupDTO.Role_PK}' and '{mappingRoleToRoleGroupDTO.RoleGroup_PK}' is not found.");

            mappingRoleToRoleGroup.UpdateValueFrom(mappingRoleToRoleGroupDTO, "Status_FK");
            mappingRoleToRoleGroupDTO.CreatedBy = mappingRoleToRoleGroup.CreatedBy;
            mappingRoleToRoleGroupDTO.CreatedDate = mappingRoleToRoleGroup.CreatedDate;
            mappingRoleToRoleGroup.UpdatedBy = mappingRoleToRoleGroupDTO.UpdatedBy = User.Username;
            mappingRoleToRoleGroup.UpdatedDate = mappingRoleToRoleGroupDTO.UpdatedDate = dateStamp;

            return mappingRoleToRoleGroup;
        }
    }
}
