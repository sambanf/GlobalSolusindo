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
                        //join userRoleGroupMapping in Db.tblM_MappingUserToRoleGroup on user.User_PK equals userRoleGroupMapping.User_PK into userRoleGroupMappingTemp
                        //from userRoleGroupMapping in userRoleGroupMappingTemp.DefaultIfEmpty()
                        //join roleGroup in Db.tblM_RoleGroup on userRoleGroupMapping.RoleGroup_PK equals roleGroup.RoleGroup_PK into roleGroupTemp
                        //from roleGroup in roleGroupTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()
                        join project in Db.tblM_Project on userDetail.Project equals project.Project_PK into projectTemp
                        from project in projectTemp.DefaultIfEmpty()
                        join _operator in Db.tblM_Operator on project.Operator_FK equals _operator.Operator_PK into _operatorTemp
                        from _operator in _operatorTemp.DefaultIfEmpty()
                        join deliveryArea in Db.tblM_DeliveryArea on project.DeliveryArea_FK equals deliveryArea.DeliveryArea_PK into deliveryAreaTemp
                        from deliveryArea in deliveryAreaTemp.DefaultIfEmpty()
                        join vendor in Db.tblM_Vendor on project.Vendor_FK equals vendor.Vendor_PK into vendorTemp
                        from vendor in vendorTemp.DefaultIfEmpty()
                        join categoryContract in Db.tblM_CategoryContract on userDetail.CategoryContract equals categoryContract.CategoryContractPK into categoryContractTemp
                        from categoryContract in categoryContractTemp.DefaultIfEmpty()
                        join religion in Db.tblM_Religion on userDetail.Religion equals religion.ReligionPK into religionTemp
                        from religion in religionTemp.DefaultIfEmpty()
                        join gender in Db.tblM_Gender on userDetail.Gender equals gender.Gender_PK into genderTemp
                        from gender in genderTemp.DefaultIfEmpty()
                        join maritalStatus in Db.tblM_MaritalStatus on userDetail.MaritalStatus equals maritalStatus.MaritalPK into maritalStatusTemp
                        from maritalStatus in maritalStatusTemp.DefaultIfEmpty()
                        
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
                            //RoleGroupTitle = string.IsNullOrEmpty(roleGroup.Title) ? "N/A" : roleGroup.Title,
                            //Password = user.Password,
                            CreatedBy = user.CreatedBy,
                            CreatedDate = user.CreatedDate,
                            UpdatedBy = user.UpdatedBy,
                            UpdatedDate = user.UpdatedDate,
                            Status_FK = user.Status_FK,

                            BankName = userDetail.BankName,
                            BPJS = userDetail.BPJS,
                            CategoryContract = userDetail.CategoryContract,
                            CategoryContractName = categoryContract.Name,
                            Gender = userDetail.Gender,
                            GenderName = gender.Name,
                            JoinDate = userDetail.JoinDate,
                            EndDate = userDetail.EndDate,
                            MaritalStatus = userDetail.MaritalStatus,
                            MaritalStatusName = maritalStatus.Name,
                            NPWP = userDetail.NPWP,
                            Project = userDetail.Project,
                            ProjectName = _operator.Title + " " + deliveryArea.Title +" "+ vendor.Title,
                            Religion = userDetail.Religion,
                            ReligionName = religion.Name,
                            Salary = userDetail.Salary,
                            AccountNumber = userDetail.AccountNumber
                        };

            return query;
        }

        public IQueryable<UserDTO> GetListUserByTL(int tlpk)
        {
            int? prj =  GetByPrimaryKey(tlpk).Project;
            var query = from user in Db.tblM_User
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        join userRoleGroupMapping in Db.tblM_MappingUserToRoleGroup on user.User_PK equals userRoleGroupMapping.User_PK into userRoleGroupMappingTemp
                        from userRoleGroupMapping in userRoleGroupMappingTemp.DefaultIfEmpty()
                        join roleGroup in Db.tblM_RoleGroup on userRoleGroupMapping.RoleGroup_PK equals roleGroup.RoleGroup_PK into roleGroupTemp
                        from roleGroup in roleGroupTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()
                        join project in Db.tblM_Project on userDetail.Project equals project.Project_PK
                        where userDetail.Project == prj && user.Status_FK != deleted
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
                            EndDate = userDetail.EndDate,
                            MaritalStatus = userDetail.MaritalStatus,
                            NPWP = userDetail.NPWP,
                            Project = userDetail.Project,
                            Religion = userDetail.Religion,
                            Salary = userDetail.Salary,
                            AccountNumber = userDetail.AccountNumber
                        };

            return query;
        }

        public IQueryable<UserDTO> GetByJabatanAndProject(int katejab, int PMPK)
        {
            IQueryable<UserDTO> query;
            if (katejab == 0)
            {
                query = from user in Db.tblM_User
                            join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK
                            join project in Db.tblM_Project on userDetail.Project equals project.Project_PK
                            join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK
                            where project.User_FK == PMPK && user.Status_FK != deleted
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
                                EndDate = userDetail.EndDate,
                                MaritalStatus = userDetail.MaritalStatus,
                                NPWP = userDetail.NPWP,
                                Project = userDetail.Project,
                                Religion = userDetail.Religion,
                                Salary = userDetail.Salary,
                                AccountNumber = userDetail.AccountNumber

                            };
            }
            else
            {
                query = from user in Db.tblM_User
                            join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK
                            join project in Db.tblM_Project on userDetail.Project equals project.Project_PK
                            join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK
                            where user.KategoriJabatan_FK == katejab && project.User_FK == PMPK && user.Status_FK != deleted
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
                                EndDate = userDetail.EndDate,
                                MaritalStatus = userDetail.MaritalStatus,
                                NPWP = userDetail.NPWP,
                                Project = userDetail.Project,
                                Religion = userDetail.Religion,
                                Salary = userDetail.Salary,
                                AccountNumber = userDetail.AccountNumber


                            };
            }
            
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

        public IQueryable<LOVDTO> getQueryStatus()
        {
            var query = from status in Db.tblM_Status
                        where status.Status_PK != 3
                        select new LOVDTO
                        {
                            Id = status.Status_PK,
                            Name = status.Title
                        };

            return query;
        }


        #endregion
    }
}
