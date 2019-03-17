using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries
{
    public class MappingRoleToRoleGroupQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public MappingRoleToRoleGroupQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public MappingRoleToRoleGroupQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<MappingRoleToRoleGroupDTO> GetQuery()
        {
            var query = from mappingRoleToRoleGroup in Db.tblM_MappingRoleToRoleGroup
                        join roleGroup in Db.tblM_RoleGroup on mappingRoleToRoleGroup.RoleGroup_PK equals roleGroup.RoleGroup_PK into roleGroupTemp
                        from roleGroup in roleGroupTemp.DefaultIfEmpty()
                        join role in Db.tblM_Role on mappingRoleToRoleGroup.Role_PK equals role.Role_PK into roleTemp
                        from role in roleTemp.DefaultIfEmpty()
                        where
                        mappingRoleToRoleGroup.Status_FK != deleted
                        select new MappingRoleToRoleGroupDTO
                        {
                            RoleGroup_PK = mappingRoleToRoleGroup.RoleGroup_PK,
                            RoleGroupName = roleGroup.Title,
                            Role_PK = mappingRoleToRoleGroup.Role_PK,
                            RoleName = role.Title,
                            RoleDescription = role.Description,
                            CreatedBy = mappingRoleToRoleGroup.CreatedBy,
                            CreatedDate = mappingRoleToRoleGroup.CreatedDate,
                            UpdatedBy = mappingRoleToRoleGroup.UpdatedBy,
                            UpdatedDate = mappingRoleToRoleGroup.UpdatedDate,
                            Status_FK = mappingRoleToRoleGroup.Status_FK
                        };

            return query;
        }

        public List<MappingRoleToRoleGroupDTO> GetMappingListByRoleGroupPk(int roleGroupPk)
        {
            string sql = @"
SELECT 
	RoleMapping.RoleGroup_PK,
	RoleGroup.Title AS RoleGroupName,
	Role.Role_PK,
	Role.Title AS RoleName,
	Role.Description AS RoleDescription,
	CASE 
		WHEN RoleMapping.Role_PK IS NULL
		THEN CONVERT(BIT, 0)
		ELSE CONVERT(BIT, 1) 
	END
		AS IsChecked 
FROM 
	[tblM_Role] Role
	left join tblM_MappingRoleToRoleGroup RoleMapping ON Role.Role_PK = RoleMapping.Role_PK
	left join tblM_RoleGroup RoleGroup ON RoleGroup.RoleGroup_PK = RoleMapping.RoleGroup_PK 
WHERE
	RoleMapping.RoleGroup_PK = @RoleGroup_PK 
	OR RoleMapping.RoleGroup_PK IS NULL
    AND AND RoleGroup.RoleGroup_PK IS NOT NULL
";
            SqlParameter roleGroupParameter = new SqlParameter("@RoleGroup_PK", roleGroupPk);
            var queryResult = Db.Database.SqlQuery<MappingRoleToRoleGroupDTO>(sql, roleGroupParameter).ToList();

            return queryResult;
        }

        public IQueryable<MappingRoleToRoleGroupDTO> GetByRoleGroupPK(int roleGroupPk)
        {
            IQueryable<MappingRoleToRoleGroupDTO> records = GetQuery().Where(mappingRoleToRoleGroup => mappingRoleToRoleGroup.RoleGroup_PK == roleGroupPk);
            return records;
        }
    }
}
