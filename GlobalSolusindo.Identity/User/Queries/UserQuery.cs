using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.User.Queries
{
    public class UserQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public UserQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public UserQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<UserDTO> GetQuery()
        {
            var query = from user in Db.tblM_User
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        where
                        user.Status_FK != deleted
                        select new UserDTO
                        {
                            User_PK = user.User_PK,
                            UserDetail_FK = user.UserDetail_FK,
                            UserDetail_PK = userDetail.UserDetail_PK,
                            UserCode = userDetail.UserCode,
                            Name = userDetail.Name,
                            TglLahir = userDetail.TglLahir,
                            NoKTP = userDetail.NoKTP,
                            NoHP = userDetail.NoHP,
                            Email = userDetail.Email,
                            Address = userDetail.Address,
                            Description = userDetail.Description,
                            Username = user.Username,
                            Position_FK = user.Position_FK,
                            //Password = user.Password,
                            CreatedBy = user.CreatedBy,
                            CreatedDate = user.CreatedDate,
                            UpdatedBy = user.UpdatedBy,
                            UpdatedDate = user.UpdatedDate,
                            Status_FK = user.Status_FK
                        };

            return query;
        }

        public UserDTO GetByPrimaryKey(int primaryKey)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.User_PK == primaryKey);
            return record;
        }

        public UserDTO GetUsernamePassword(string username)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.Username == username);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.User_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_User WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_User.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
