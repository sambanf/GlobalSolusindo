using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.RoleGroup
{
    public class RoleGroupFactory : FactoryBase
    {
        public RoleGroupFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_RoleGroup CreateFromDTO(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            if (roleGroupDTO == null)
                throw new ArgumentNullException("RoleGroup model is null.");
            roleGroupDTO.Status_FK = (int)RecordStatus.Active;
            roleGroupDTO.CreatedBy = User.Username;
            roleGroupDTO.CreatedDate = dateStamp;
            roleGroupDTO.UpdatedBy = User.Username;
            roleGroupDTO.UpdatedDate = dateStamp;
            tblM_RoleGroup roleGroup = roleGroupDTO.ToObject<tblM_RoleGroup>();
            return roleGroup;
        }

        public tblM_RoleGroup CreateFromDbAndUpdateFromDTO(RoleGroupDTO roleGroupDTO, DateTime dateStamp)
        {
            tblM_RoleGroup roleGroup;

            if (roleGroupDTO == null)
                throw new ArgumentNullException("RoleGroup model is null.");
            roleGroup = Db.tblM_RoleGroup.Find(roleGroupDTO.RoleGroup_PK);
            if (roleGroup == null)
                throw new KairosException($"Record with key '{roleGroupDTO.RoleGroup_PK}' is not found.");

            roleGroup.UpdateValueFrom(roleGroupDTO, "RoleGroup_PK", "Status_FK");
            roleGroupDTO.CreatedBy = roleGroup.CreatedBy;
            roleGroupDTO.CreatedDate = roleGroup.CreatedDate;
            roleGroup.UpdatedBy = roleGroupDTO.UpdatedBy = User.Username;
            roleGroup.UpdatedDate = roleGroupDTO.UpdatedDate = dateStamp;

            return roleGroup;
        }
    }
}
