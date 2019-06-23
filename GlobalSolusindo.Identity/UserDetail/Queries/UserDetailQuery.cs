using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Imaging;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.UserDetail.Queries
{
    public class UserDetailQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public UserDetailQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public UserDetailQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<UserDetailDTO> GetQuery()
        {
            var query = from userDetail in Db.tblM_UserDetail
                            //where
                            //userDetail.Status_FK != deleted
                        select new UserDetailDTO
                        {
                            UserDetail_PK = userDetail.UserDetail_PK,
                            UserCode = userDetail.Description,
                            Name = userDetail.Name,
                            TglLahir = userDetail.TglLahir,
                            NoKTP = userDetail.NoKTP,
                            NoHP = userDetail.NoHP,
                            Email = userDetail.Email,
                            PersonalEmail = userDetail.PersonalEmail,
                            Address = userDetail.Address,
                            Description = userDetail.Description,
                            CreatedBy = userDetail.CreatedBy,
                            CreatedDate = userDetail.CreatedDate,
                            UpdatedBy = userDetail.UpdatedBy,
                            UpdatedDate = userDetail.UpdatedDate,
                            Status_FK = userDetail.Status_FK,

                            #region Additional field dari mas indra
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
                            #endregion
                        };

            return query;
        }

        public UserDetailDTO GetByPrimaryKey(int primaryKey)
        {
            UserDetailDTO record = GetQuery().FirstOrDefault(u => u.UserDetail_PK == primaryKey);
            var userDetail = Db.tblM_UserDetail.Find(primaryKey);
            if (userDetail != null && userDetail.FilePhoto != null)
                record.FilePhotoInBase64 = new WebImageConverter().GetBase64FromBytes(userDetail.FilePhoto);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.UserDetail_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_UserDetail WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_UserDetail.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
