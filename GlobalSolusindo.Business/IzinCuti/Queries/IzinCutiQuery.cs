using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCuti.Queries
{
    public class IzinCutiQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public IzinCutiQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public IzinCutiQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<IzinCutiDTO> GetQuery()
        {
            var query = from izinCuti in Db.tblT_IzinCuti
                        join userIzinCuti in Db.tblM_User on izinCuti.User_FK equals userIzinCuti.User_PK into userIzinCutiTemp
                        from userIzinCuti in userIzinCutiTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on userIzinCuti.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()
                        join userDetailIzinCuti in Db.tblM_UserDetail on userIzinCuti.UserDetail_FK equals userDetailIzinCuti.UserDetail_PK into userDetailIzinCutiTemp
                        from userDetailIzinCuti in userDetailIzinCutiTemp.DefaultIfEmpty()
                        join userDetailApproval in Db.tblM_UserDetail on izinCuti.ApprovalUserDetail_FK equals userDetailApproval.UserDetail_PK into userDetailApprovalTemp
                        from userDetailApproval in userDetailApprovalTemp.DefaultIfEmpty()
                        join izinCutiStatus in Db.tblM_IzinCutiStatus on izinCuti.IzinCutiStatus_FK equals izinCutiStatus.IzinCutiStatus_PK into izinCutiStatusTemp
                        from izinCutiStatus in izinCutiStatusTemp.DefaultIfEmpty()
                        where
                        izinCuti.Status_FK != deleted
                        select new IzinCutiDTO
                        {
                            IzinCuti_PK = izinCuti.IzinCuti_PK,
                            User_FK = izinCuti.User_FK,
                            UserIzinCutiName = userDetailIzinCuti.Name,
                            KategoriJabatan_FK = jabatan.KategoriJabatan_PK,
                            UserIzinCutiJabatanTitle = jabatan.Title,
                            TglMulai = izinCuti.TglMulai,
                            TglSelesai = izinCuti.TglSelesai,
                            Alasan = izinCuti.Alasan,
                            ApprovalUserDetail_FK = izinCuti.ApprovalUserDetail_FK,
                            ApprovedByUserName = userDetailApproval.Name ?? "N/A",
                            IzinCutiStatus_FK = izinCuti.IzinCutiStatus_FK,
                            IzinCutiStatusTitle = izinCutiStatus.Title ?? "Waiting",
                            CreatedBy = izinCuti.CreatedBy,
                            CreatedDate = izinCuti.CreatedDate,
                            UpdatedBy = izinCuti.UpdatedBy,
                            UpdatedDate = izinCuti.UpdatedDate,
                            Status_FK = izinCuti.Status_FK
                        };

            return query;
        }

        public IzinCutiDTO GetByPrimaryKey(int primaryKey)
        {
            IzinCutiDTO record = GetQuery().FirstOrDefault(izinCuti => izinCuti.IzinCuti_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.IzinCuti_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_IzinCuti WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_IzinCuti.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
