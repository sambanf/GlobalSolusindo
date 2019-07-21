using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using GlobalSolusindo.Identity.Role;
using GlobalSolusindo.Identity.Role.Queries;
using GlobalSolusindo.Identity.RoleGroup;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuGenerator
    {
        private GlobalSolusindoDb db;
        private RoleQuery roleQuery;
        private RoleGroupQuery roleGroupQuery;
        private MappingUserToRoleGroupQuery mappingUserRoleQuery;
        private MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery;


        public MenuGenerator(GlobalSolusindoDb db)
        {
            this.db = db;
            roleQuery = new RoleQuery(db);
            roleGroupQuery = new RoleGroupQuery(db);
            mappingUserRoleQuery = new MappingUserToRoleGroupQuery(db);
            mappingRoleToRoleGroupQuery = new MappingRoleToRoleGroupQuery(db);
        }

        private List<RoleDTO> GetRoles(int userPk)
        {
            var roleUserMappings = mappingUserRoleQuery.GetByUserPK(userPk);
            var roleGroups = new List<RoleGroupDTO>();
            var mappingRoleToRoleGroups = new List<MappingRoleToRoleGroupDTO>();
            var roles = new List<RoleDTO>();

            foreach (var mapping in roleUserMappings)
            {
                var roleGroup = roleGroupQuery.GetByPrimaryKey((int)mapping.RoleGroup_PK);
                roleGroups.Add(roleGroup);
            }

            foreach (var roleGroup in roleGroups)
            {
                var mappingRoleToRoleGroupRecords = mappingRoleToRoleGroupQuery.GetByRoleGroupPK(roleGroup.RoleGroup_PK);
                foreach (var mappingRoleToRoleGroup in mappingRoleToRoleGroupRecords)
                {
                    mappingRoleToRoleGroups.Add(mappingRoleToRoleGroup);
                }
            }

            foreach (var mappingRoleToRoleGroup in mappingRoleToRoleGroups)
            {
                var role = roleQuery.GetByPrimaryKey((int)mappingRoleToRoleGroup.Role_PK);
                roles.Add(role);
            }

            return roles;
        }

        public TreeMenu GenerateMenus(int userPk)
        {
            var menuQuery = new MenuQuery();
            var roles = GetRoles(userPk);
            var roleMenus = roles.Where(x => x.Title.Contains("ViewAll"));
            var showAllMenu = roles.Where(x => x.Title.Contains("Menu_ViewAll")).Count() > 0;
            var menus = new List<MenuDTO>();
            var groupMenus = new List<GroupMenu>();
            var groupMenuNames = new List<string>();
            var treeMenu = new TreeMenu();

            if (showAllMenu)
            {
                var allMenus = menuQuery.GetQuery().ToList();

                groupMenuNames = allMenus
                    .GroupBy(x => x.ParentGroup)
                    .Select(g => g.FirstOrDefault())
                    .Select(x => x.ParentGroup)
                    .ToList();


                foreach (var groupName in groupMenuNames)
                {
                    var newGroupMenu = new GroupMenu();
                    newGroupMenu.GroupName = groupName;
                    newGroupMenu.Menus = allMenus
                    .Where(x => x.ParentGroup == groupName)
                    .Select(x => new MenuNode
                    {
                        Caption = x.Caption,
                        Code = x.Code,
                        Path = x.Path
                    })
                    .ToList();

                    groupMenus.Add(newGroupMenu);
                }

                treeMenu.GroupMenus = groupMenus;

                return treeMenu;
            }


            foreach (var role in roleMenus)
            {
                var menuCode = role.Title;
                var menu = menuQuery.GetByCode(menuCode);
                if (menu != null) {
                    menus.Add(menu);
                }
            }

            groupMenuNames = menus
                .GroupBy(x => x.ParentGroup)
                .Select(g => g.FirstOrDefault())
                .Select(x => x.ParentGroup)
                .ToList();

            foreach (var groupName in groupMenuNames)
            {
                var newGroupMenu = new GroupMenu();
                newGroupMenu.GroupName = groupName;
                newGroupMenu.Menus = menus
                    .Where(x => x.ParentGroup == groupName)
                    .Select(x => new MenuNode
                    {
                        Caption = x.Caption,
                        Code = x.Code,
                        Path = x.Path
                    })
                    .ToList();

                groupMenus.Add(newGroupMenu);
            }

            treeMenu.GroupMenus = groupMenus;

            return treeMenu;
        }
    }
}
