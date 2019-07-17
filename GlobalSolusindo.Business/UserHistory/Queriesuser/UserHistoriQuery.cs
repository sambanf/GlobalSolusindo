using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.AsetHistori.Queries
{
    public class UserHistoriQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public UserHistoriQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public UserHistoriQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<UserHistoriDTO> GetQuery()
        {
            var query = from asetHistori in Db.tblT_AsetHistori
                        join user in Db.tblM_User on asetHistori.User_FK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        join aset in Db.tblM_Aset on asetHistori.Aset_FK equals aset.Aset_PK into asetTemp
                        from aset in asetTemp.DefaultIfEmpty()
                        join asetKategori in Db.tblM_AsetKategori on aset.KategoriAset_FK equals asetKategori.AsetKategori_PK into asetKategoriTemp
                        from asetKategori in asetKategoriTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()
                        where
                        asetHistori.Status_FK != deleted
                        select new UserHistoriDTO
                        {
                            AsetHistori_PK = asetHistori.AsetHistori_PK,
                            User_FK = asetHistori.User_FK,
                            UserFullName = userDetail.Name,
                            userPosition = jabatan.Title,
                            userPhone = userDetail.NoHP,
                            userEmail = userDetail.Email,
                            userAddress = userDetail.Address,
                            userDescription = userDetail.Description,
                            Aset_FK = asetHistori.Aset_FK,
                            AsetID = aset.AsetID,
                            AsetName = aset.Name,
                            AsetKategoriTitle = asetKategori.Title,
                            TglMulai = asetHistori.TglMulai,
                            TglSelesai = asetHistori.TglSelesai,
                            CreatedBy = asetHistori.CreatedBy,
                            CreatedDate = asetHistori.CreatedDate,
                            UpdatedBy = asetHistori.UpdatedBy,
                            UpdatedDate = asetHistori.UpdatedDate,
                            Status_FK = asetHistori.Status_FK,
                            Description = asetHistori.Description
                        };

            return query;
        }

        public UserHistoriDTO GetByPrimaryKey(int primaryKey)
        {
            UserHistoriDTO record = GetQuery().FirstOrDefault(asetHistori => asetHistori.AsetHistori_PK == primaryKey);
            //var aset = Db.tblM_Aset.Find(primaryKey);
            //if (aset != null && aset.FilePhoto != null)
            //    record.FilePhotoInBase64 = new WebImageConverter().GetBase64FromBytes(aset.FilePhoto);
            return record;
        }

        public List<UserHistoriDTO> GetUserDetailFK(int userDetailFK)
        {
            var records = GetQuery().Where(asetHistori => asetHistori.User_FK == userDetailFK).ToList();
            return records;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.AsetHistori_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_AsetHistori WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_AsetHistori.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
