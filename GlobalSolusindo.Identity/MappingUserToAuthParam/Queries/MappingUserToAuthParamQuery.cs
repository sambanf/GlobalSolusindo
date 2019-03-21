using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.Queries
{
    public class MappingUserToAuthParamQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;
        private const int active = (int)RecordStatus.Active;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public MappingUserToAuthParamQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public MappingUserToAuthParamQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<MappingUserToAuthParamDTO> GetQuery()
        {
            var query = from mappingUserToAuthParam in Db.tblM_MappingUserToAuthParam
                        join authParam in Db.tblM_AuthParam on mappingUserToAuthParam.AuthParam_PK equals authParam.AuthParam_PK into authParamTemp
                        from authParam in authParamTemp.DefaultIfEmpty()
                        join user in Db.tblM_User on mappingUserToAuthParam.User_PK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join position in Db.tblM_Position on user.Position_FK equals position.Position_PK into positionTemp
                        from position in positionTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        where
                        mappingUserToAuthParam.Status_FK != deleted
                        && user.Status_FK != deleted
                        select new MappingUserToAuthParamDTO
                        {
                            AuthParam_PK = mappingUserToAuthParam.AuthParam_PK,
                            AuthParamName = authParam.Title,
                            User_PK = mappingUserToAuthParam.User_PK,
                            UserUsername = user.Username,
                            UserCode = userDetail.UserCode,
                            UserName = userDetail.Name,
                            positionName = position.Name,
                            CreatedBy = mappingUserToAuthParam.CreatedBy,
                            CreatedDate = mappingUserToAuthParam.CreatedDate,
                            UpdatedBy = mappingUserToAuthParam.UpdatedBy,
                            UpdatedDate = mappingUserToAuthParam.UpdatedDate,
                            Status_FK = mappingUserToAuthParam.Status_FK
                        };

            return query;
        }

        public IQueryable<MappingUserToAuthParamDTO> GetByAuthParamPK(int authParamPk)
        {
            IQueryable<MappingUserToAuthParamDTO> records = GetQuery().Where(mappingRoleToAuthParam => mappingRoleToAuthParam.AuthParam_PK == authParamPk);
            return records;
        }

        public MappingUserToAuthParamDTO GetByPrimaryKey(int authParamPk, int userPk)
        {
            MappingUserToAuthParamDTO record = GetQuery()
                .FirstOrDefault(mappingUserToAuthParam =>
                mappingUserToAuthParam.AuthParam_PK == authParamPk
                &&
                 mappingUserToAuthParam.User_PK == userPk
                );
            return record;
        }
    }
}
