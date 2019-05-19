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
        private const int active = (int)RecordStatus.Active;

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
                        && role.Status_FK != deleted
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

            string sql = $@"
SELECT 
	RoleMapping.RoleGroup_PK,
	RoleGroup.Title AS RoleGroupName,
	Role.Role_PK,
	Role.Title AS RoleName,
	Role.Description AS RoleDescription,
	CONVERT(BIT, 1) AS IsChecked
FROM 
	tblM_MappingRoleToRoleGroup RoleMapping
	INNER JOIN [tblM_Role] Role ON Role.Role_PK = RoleMapping.Role_PK
	INNER JOIN tblM_RoleGroup RoleGroup ON RoleGroup.RoleGroup_PK = RoleMapping.RoleGroup_PK 
WHERE 
	RoleMapping.RoleGroup_PK = @RoleGroup_PK
	AND Role.Status_FK = {active}
		
UNION ALL
	
SELECT 
	0 As RoleGroup_PK,
	'' AS RoleGroupName,
	Role.Role_PK,
	Role.Title AS RoleName,
	Role.Description AS RoleDescription,
	CONVERT(BIT, 0) AS IsChecked
FROM 
	[tblM_Role] Role  
WHERE 
	Role.Role_PK NOT IN (SELECT Role_PK  FROM tblM_MappingRoleToRoleGroup WHERE RoleGroup_PK = @RoleGroup_PK)
	AND Role.Status_FK = {active}
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
