using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Role
{
    public class RoleFactory : FactoryBase
    {
        public RoleFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Role CreateFromDTO(RoleDTO roleDTO, DateTime dateStamp)
        {
            if (roleDTO == null)
                throw new ArgumentNullException("Role model is null.");
            roleDTO.Status_FK = (int)RecordStatus.Active;
            roleDTO.CreatedBy = User.Username;
            roleDTO.CreatedDate = dateStamp;
            roleDTO.UpdatedBy = User.Username;
            roleDTO.UpdatedDate = dateStamp;
            tblM_Role role = roleDTO.ToObject<tblM_Role>();
            return role;
        }

        public tblM_Role CreateFromDbAndUpdateFromDTO(RoleDTO roleDTO, DateTime dateStamp)
        {
            tblM_Role role;

            if (roleDTO == null)
                throw new ArgumentNullException("Role model is null.");
            role = Db.tblM_Role.Find(roleDTO.Role_PK);
            if (role == null)
                throw new KairosException($"Record with key '{roleDTO.Role_PK}' is not found.");

            role.UpdateValueFrom(roleDTO, "Role_PK", "Status_FK");
            roleDTO.CreatedBy = role.CreatedBy;
            roleDTO.CreatedDate = role.CreatedDate;
            role.UpdatedBy = roleDTO.UpdatedBy = User.Username;
            role.UpdatedDate = roleDTO.UpdatedDate = dateStamp;

            return role;
        }
    }
}
