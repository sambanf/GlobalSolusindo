using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries
{
    public class MappingUserToRoleGroupQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;
        private const int active = (int)RecordStatus.Active;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public MappingUserToRoleGroupQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public MappingUserToRoleGroupQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<MappingUserToRoleGroupDTO> GetQuery()
        {
            var query = from mappingUserToRoleGroup in Db.tblM_MappingUserToRoleGroup
                        join roleGroup in Db.tblM_RoleGroup on mappingUserToRoleGroup.RoleGroup_PK equals roleGroup.RoleGroup_PK into roleGroupTemp
                        from roleGroup in roleGroupTemp.DefaultIfEmpty()
                        join user in Db.tblM_User on mappingUserToRoleGroup.User_PK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join position in Db.tblM_Position on user.Position_FK equals position.Position_PK into positionTemp
                        from position in positionTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        where
                        mappingUserToRoleGroup.Status_FK != deleted
                        && user.Status_FK != deleted
                        select new MappingUserToRoleGroupDTO
                        {
                            RoleGroup_PK = mappingUserToRoleGroup.RoleGroup_PK,
                            RoleGroupName = roleGroup.Title,
                            User_PK = mappingUserToRoleGroup.User_PK,
                            UserUsername = user.Username,
                            UserCode = userDetail.UserCode,
                            UserName = userDetail.Name,
                            positionName = position.Name,
                            CreatedBy = mappingUserToRoleGroup.CreatedBy,
                            CreatedDate = mappingUserToRoleGroup.CreatedDate,
                            UpdatedBy = mappingUserToRoleGroup.UpdatedBy,
                            UpdatedDate = mappingUserToRoleGroup.UpdatedDate,
                            Status_FK = mappingUserToRoleGroup.Status_FK
                        };

            return query;
        }

        public IQueryable<MappingUserToRoleGroupDTO> GetByRoleGroupPK(int roleGroupPk)
        {
            IQueryable<MappingUserToRoleGroupDTO> records = GetQuery().Where(mappingRoleToRoleGroup => mappingRoleToRoleGroup.RoleGroup_PK == roleGroupPk);
            return records;
        }

        public MappingUserToRoleGroupDTO GetByPrimaryKey(int roleGroupPk, int userPk)
        {
            MappingUserToRoleGroupDTO record = GetQuery()
                .FirstOrDefault(mappingUserToRoleGroup =>
                mappingUserToRoleGroup.RoleGroup_PK == roleGroupPk
                &&
                 mappingUserToRoleGroup.User_PK == userPk
                );
            return record;
        }
    }
}
