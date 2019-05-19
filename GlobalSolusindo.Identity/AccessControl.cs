using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using GlobalSolusindo.Identity.Role;
using GlobalSolusindo.Identity.Role.Queries;
using GlobalSolusindo.Identity.RoleGroup;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Identity
{
    public interface IAccessControl
    {
        bool UserHasRole(string roleTitle);
    }

    public class AccessControl : DbOperation, IAccessControl
    {
        public tblM_User User { get; private set; }

        public AccessControl(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public AccessControl(tblM_User user) : base()
        {
            this.User = user;
        }

        private List<MappingUserToRoleGroupDTO> GetMappingUserToRoleGroups()
        {
            var userToRoleGroupQuery = new MappingUserToRoleGroupQuery(this.Db);
            var mappingUserToRoleGroups = userToRoleGroupQuery.GetByUserPK(User.User_PK);
            return mappingUserToRoleGroups.ToList();
        }

        private List<RoleGroupDTO> GetRoleGroups()
        {
            var mappingUserToRoleGroups = GetMappingUserToRoleGroups();
            var roleGroupPKs = mappingUserToRoleGroups.Select(x => x.RoleGroup_PK);
            var roleGroups = new RoleGroupQuery(this.Db).GetQuery().Where(x => roleGroupPKs.Contains(x.RoleGroup_PK)).ToList();
            return roleGroups;
        }


        private List<RoleDTO> GetRoles()
        {
            var roleToRoleGroupQuery = new MappingRoleToRoleGroupQuery(this.Db);
            var roleQuery = new RoleQuery(this.Db);
            var roles = new List<RoleDTO>();
            var mappingUserToRoleGroups = GetMappingUserToRoleGroups();

            foreach (var mappingUserToRoleGroup in mappingUserToRoleGroups)
            {
                var roleGroupPk = (int)mappingUserToRoleGroup.RoleGroup_PK;
                var mappingRoleToRoleGroups = roleToRoleGroupQuery.GetByRoleGroupPK(roleGroupPk).ToList();

                var rolePKs = mappingRoleToRoleGroups.Select(x => x.Role_PK);
                roles.AddRange(roleQuery.GetQuery().Where(x => rolePKs.Contains(x.Role_PK)).ToList());
            }
            return roles;
        }

        public bool UserHasRole(string roleTitle)
        {
            bool userIsInRole = GetRoles().Where(x => x.Title.Contains(roleTitle)).Count() > 0;
            return userIsInRole;
        }

        public bool UserIsInRoleGroup(string roleGroupTitle)
        {
            bool userIsInRoleGroup = GetRoleGroups().Where(x => x.Title.Contains(roleGroupTitle)).Count() > 0;
            return userIsInRoleGroup;
        }
    }
}
