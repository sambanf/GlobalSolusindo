using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOWAssign.Queries
{
    public class SOWAssignQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public SOWAssignQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public SOWAssignQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<SOWAssignDTO> GetQuery()
        {
            var query = from sowAssign in Db.tblT_SOWAssign
                        join sow in Db.tblT_SOW on sowAssign.SOW_FK equals sow.SOW_PK into sowTemp
                        from sow in sowTemp.DefaultIfEmpty()
                        join user in Db.tblM_User on sowAssign.User_FK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        join kategoriJabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals kategoriJabatan.KategoriJabatan_PK into kategoriJabatanTemp
                        from kategoriJabatan in kategoriJabatanTemp.DefaultIfEmpty()
                        where
                        sowAssign.Status_FK != deleted
                        select new SOWAssignDTO
                        {
                            SOWAssign_PK = sowAssign.SOWAssign_PK,
                            SOW_FK = sowAssign.SOW_FK.Value,
                            SOWName = sow.SOWName,
                            User_FK = sowAssign.User_FK.Value,
                            UserName = userDetail.Name,
                            KategoriJabatan_FK = sowAssign.KategoriJabatan_FK.Value,
                            KategoriJabatanTitle = kategoriJabatan.Title,
                            TglMulai = sowAssign.TglMulai,
                            TglSelesai = sow.TglSelesai,
                            CreatedBy = sowAssign.CreatedBy,
                            CreatedDate = sowAssign.CreatedDate,
                            UpdatedBy = sowAssign.UpdatedBy,
                            UpdatedDate = sowAssign.UpdatedDate,
                            Status_FK = sowAssign.Status_FK
                        };

            return query;
        }

        public SOWAssignDTO GetByPrimaryKey(int primaryKey)
        {
            SOWAssignDTO record = GetQuery().FirstOrDefault(sowAssign => sowAssign.SOWAssign_PK == primaryKey);
            return record;
        }


        //public IQueryable<SOWAssignDTO> GetBySOW_FK(int sowFK)
        //{
        //    var records = GetQuery().Where(sowAssign => sowAssign.SOW_FK == sowFK);
        //    return records;
        //}


        //        public List<SOWAssignDTO> GetBySOW_FK(int sowFK)
        //        {
        //            string sql = @"
        //select 
        //	ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
        //	ISNULL(Assign.SOW_FK, 0) SOW_FK,
        //	ISNULL(SOW.SOWName, '') SOWName,
        //	ISNULL(Assign.User_FK, 0) User_FK,
        //	ISNULL(UserDetail.Name, '')AS UserName,
        //	Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
        //	Jabatan.Title AS KategoriJabatanTitle,
        //	Assign.TglMulai,
        //	Assign.TglSelesai,
        //	Assign.CreatedBy,
        //	ISNULL(Assign.CreatedDate, GETDATE()) CreatedDate,
        //	Assign.UpdatedBy,
        //	ISNULL(Assign.UpdatedDate, GETDATE()) UpdatedDate,
        //	ISNULL(Assign.Status_FK , 1) Status_FK
        //from 
        //	tblM_KategoriJabatan Jabatan
        //	left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 1 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
        //	left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
        //	left join tblM_User Users ON Assign.User_FK = Users.User_PK
        //	left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
        //where 	
        //	Jabatan.KategoriJabatan_PK = 1
        //union all
        //select 
        //	ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
        //	ISNULL(Assign.SOW_FK, 0) SOW_FK,
        //	ISNULL(SOW.SOWName, '') SOWName,
        //	ISNULL(Assign.User_FK, 0) User_FK,
        //	ISNULL(UserDetail.Name, '')AS UserName,
        //	Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
        //	Jabatan.Title AS KategoriJabatanTitle,
        //	Assign.TglMulai,
        //	Assign.TglSelesai,
        //	Assign.CreatedBy,
        //	Assign.CreatedDate,
        //	Assign.UpdatedBy,
        //	Assign.UpdatedDate,
        //	Assign.Status_FK 
        //from 
        //	tblM_KategoriJabatan Jabatan
        //	left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 2 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
        //	left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
        //	left join tblM_User Users ON Assign.User_FK = Users.User_PK
        //	left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
        //where 	
        //	Jabatan.KategoriJabatan_PK = 2	

        //union all
        //select 
        //	ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
        //	ISNULL(Assign.SOW_FK, 0) SOW_FK,
        //	ISNULL(SOW.SOWName, '') SOWName,
        //	ISNULL(Assign.User_FK, 0) User_FK,
        //	ISNULL(UserDetail.Name, '')AS UserName,
        //	Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
        //	Jabatan.Title AS KategoriJabatanTitle,
        //	Assign.TglMulai,
        //	Assign.TglSelesai,
        //	Assign.CreatedBy,
        //	Assign.CreatedDate,
        //	Assign.UpdatedBy,
        //	Assign.UpdatedDate,
        //	Assign.Status_FK 
        //from 
        //	tblM_KategoriJabatan Jabatan
        //	left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 3 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
        //	left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
        //	left join tblM_User Users ON Assign.User_FK = Users.User_PK
        //	left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
        //where 	
        //	Jabatan.KategoriJabatan_PK = 3
        //union all
        //select 
        //	ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
        //	ISNULL(Assign.SOW_FK, 0) SOW_FK,
        //	ISNULL(SOW.SOWName, '') SOWName,
        //	ISNULL(Assign.User_FK, 0) User_FK,
        //	ISNULL(UserDetail.Name, '')AS UserName,
        //	Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
        //	Jabatan.Title AS KategoriJabatanTitle,
        //	Assign.TglMulai,
        //	Assign.TglSelesai,
        //	Assign.CreatedBy,
        //	Assign.CreatedDate,
        //	Assign.UpdatedBy,
        //	Assign.UpdatedDate,
        //	Assign.Status_FK 
        //from 
        //	tblM_KategoriJabatan Jabatan
        //	left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 5 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
        //	left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
        //	left join tblM_User Users ON Assign.User_FK = Users.User_PK
        //	left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
        //where 	
        //	Jabatan.KategoriJabatan_PK = 5		
        //union all
        //select 
        //	ISNULL(Assign.SOWAssign_PK, 0) SOWAssign_PK,
        //	ISNULL(Assign.SOW_FK, 0) SOW_FK,
        //	ISNULL(SOW.SOWName, '') SOWName,
        //	ISNULL(Assign.User_FK, 0) User_FK,
        //	ISNULL(UserDetail.Name, '')AS UserName,
        //	Jabatan.KategoriJabatan_PK AS KategoriJabatan_FK,
        //	Jabatan.Title AS KategoriJabatanTitle,
        //	Assign.TglMulai,
        //	Assign.TglSelesai,
        //	Assign.CreatedBy,
        //	Assign.CreatedDate,
        //	Assign.UpdatedBy,
        //	Assign.UpdatedDate,
        //	Assign.Status_FK 
        //from 
        //	tblM_KategoriJabatan Jabatan
        //	left join (select top 1 * from tblT_SOWAssign where KategoriJabatan_FK = 6 AND SOW_FK = @SOW_FK order by SOWAssign_PK asc ) Assign ON Jabatan.KategoriJabatan_PK = Assign.KategoriJabatan_FK
        //	left join tblT_SOW SOW ON Assign.SOW_FK = SOW.SOW_PK
        //	left join tblM_User Users ON Assign.User_FK = Users.User_PK
        //	left join tblM_UserDetail UserDetail ON Users.UserDetail_FK = UserDetail.UserDetail_PK
        //where 	
        //	Jabatan.KategoriJabatan_PK = 6
        //";

        //            var records = Db.get.SqlQuery<SOWAssignDTO>(sql, new SqlParameter("@SOW_FK", sowFK));
        //            return records.ToList();
        //        }

        public List<SOWAssignDTO> GetWithSP_BySOW_FK(int sowFK)
        {
            var data = Db.usp_GetSowAssign(sowFK);

            var records = data.Select(x => new SOWAssignDTO
            {
                SOWAssign_PK = x.SOWAssign_PK,
                SOW_FK = x.SOW_FK,
                SOWName = x.SOWName,
                User_FK = x.User_FK,
                UserName = x.UserName,
                KategoriJabatan_FK = x.KategoriJabatan_FK,
                KategoriJabatanTitle = x.KategoriJabatanTitle,
                TglMulai = x.TglMulai,
                TglSelesai = x.TglSelesai,
                CreatedBy = x.CreatedBy,
                CreatedDate = x.CreatedDate.Value,
                UpdatedBy = x.UpdatedBy,
                UpdatedDate = x.UpdatedDate.Value,
                Status_FK = x.Status_FK.Value
            });

            return records.ToList();
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.SOWAssign_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_SOWAssign WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_SOWAssign.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
