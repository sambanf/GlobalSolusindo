using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Imaging;
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
            return Db.tblM_User.Where(x => x.Status_FK != deleted).Count();
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
                        join userRoleGroupMapping in Db.tblM_MappingUserToRoleGroup on user.User_PK equals userRoleGroupMapping.User_PK into userRoleGroupMappingTemp
                        from userRoleGroupMapping in userRoleGroupMappingTemp.DefaultIfEmpty()
                        join roleGroup in Db.tblM_RoleGroup on userRoleGroupMapping.RoleGroup_PK equals roleGroup.RoleGroup_PK into roleGroupTemp
                        from roleGroup in roleGroupTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()

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
                            PersonalEmail = userDetail.PersonalEmail,
                            Address = userDetail.Address,
                            Description = userDetail.Description,
                            Username = user.Username,
                            KategoriJabatan_FK = user.KategoriJabatan_FK,
                            KategoriJabatanTitle = jabatan.Title,
                            RoleGroupTitle = string.IsNullOrEmpty(roleGroup.Title) ? "N/A" : roleGroup.Title,
                            //Password = user.Password,
                            CreatedBy = user.CreatedBy,
                            CreatedDate = user.CreatedDate,
                            UpdatedBy = user.UpdatedBy,
                            UpdatedDate = user.UpdatedDate,
                            Status_FK = user.Status_FK,

                            BankName = userDetail.BankName,
                            BPJS = userDetail.BPJS,
                            CategoryContract = userDetail.CategoryContract,
                            Gender = userDetail.Gender,
                            JoinDate = userDetail.JoinDate,
                            MaritalStatus = userDetail.MaritalStatus,
                            NPWP = userDetail.NPWP,
                            Project = userDetail.Project,
                            Religion = userDetail.Religion,
                            Salary = userDetail.Salary,
                            AccountNumber = userDetail.AccountNumber
                        };

            return query;
        }

        private void GetPhoto(UserDTO record)
        {
            if (record != null)
            {
                var userDetail = Db.tblM_UserDetail.Find(record.UserDetail_FK);
                if (userDetail != null)
                    record.FilePhotoInBase64 = new WebImageConverter().GetBase64FromBytes(userDetail.FilePhoto);
            }
        }

        public UserDTO GetByPrimaryKey(int primaryKey)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.User_PK == primaryKey);
            GetPhoto(record);

            return record;
        }

        public UserDTO GetByUserDetailFK(int userDetailFk)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.UserDetail_FK == userDetailFk);
            GetPhoto(record);
            return record;
        }

        public UserDTO GetByUsername(string username)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.Status_FK != 3 && user.Username == username);
            GetPhoto(record);
            return record;
        }

        public UserDTO GetByEmail(string email)
        {
            UserDTO record = GetQuery().FirstOrDefault(user => user.Email == email);
            GetPhoto(record);
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
