using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
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


        public IQueryable<SOWAssignDTO> GetBySOW_FK(int sowFK)
        {
            var records = GetQuery().Where(sowAssign => sowAssign.SOW_FK == sowFK);
            return records;
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
