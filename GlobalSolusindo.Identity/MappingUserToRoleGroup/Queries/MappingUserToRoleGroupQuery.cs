using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
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
                        join kategoriJabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals kategoriJabatan.KategoriJabatan_PK into kategoriJabatanTemp
                        from kategoriJabatan in kategoriJabatanTemp.DefaultIfEmpty()
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
                            KategoriJabatanName = kategoriJabatan.Title,
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
