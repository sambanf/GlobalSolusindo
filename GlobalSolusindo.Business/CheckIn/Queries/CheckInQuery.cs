using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWResult;
using GlobalSolusindo.Business.SOWTrackResult;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.CheckIn.Queries
{
    public class CheckInQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public CheckInQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public CheckInQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<CheckInDTO> GetQuery()
        {
            var query = from checkIn in Db.tblT_CheckIn
                        join sowAssign in Db.tblT_SOWAssign on checkIn.SOWAssign_FK equals sowAssign.SOWAssign_PK into sowAssignTemp
                        from sowAssign in sowAssignTemp.DefaultIfEmpty()
                        join sow in Db.tblT_SOW on sowAssign.SOW_FK equals sow.SOW_PK into sowTemp
                        from sow in sowTemp.DefaultIfEmpty()
                        join sowResult in Db.tblT_SOWResult on checkIn.CheckIn_PK equals sowResult.CheckIn_FK into sowResultTemp
                        from sowResult in sowResultTemp.DefaultIfEmpty()
                        join bts in Db.tblM_BTS on sow.BTS_FK equals bts.BTS_PK into btsTemp
                        from bts in btsTemp.DefaultIfEmpty()
                        join user in Db.tblM_User on sowAssign.User_FK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        join kategoriJabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals kategoriJabatan.KategoriJabatan_PK into kategoriJabatanTemp
                        from kategoriJabatan in kategoriJabatanTemp.DefaultIfEmpty()
                        where
                        checkIn.Status_FK != deleted
                        select new CheckInDTO
                        {
                            CheckIn_PK = checkIn.CheckIn_PK,
                            SOWAssign_FK = checkIn.SOWAssign_FK,
                            SOW_FK = sowAssign.SOW_FK,
                            SOWDate = sow.TglMulai,
                            SOWName = sow.SOWName,
                            Status = sowResult.IsApproved == null ? "Waiting" : sowResult.IsApproved.Value == true ? "Approved" : "Rejected",
                            BTSName = bts.Name,
                            BTSAddress = bts.Alamat,
                            LACCheckIn = checkIn.LACCheckIn,
                            LACCheckOut = checkIn.LACCheckOut,
                            MCCCheckIn = checkIn.MCCCheckIn,
                            MCCCheckOut = checkIn.MCCCheckOut,
                            MNCCheckIn = checkIn.MNCCheckIn,
                            MNCCheckOut = checkIn.MNCCheckOut,
                            UserId = user.User_PK,
                            UserName = userDetail.Name,
                            KategoriJabatanTitle = kategoriJabatan.Title,
                            WaktuCheckIn = checkIn.WaktuCheckIn,
                            LongitudeCheckIn = checkIn.LongitudeCheckIn,
                            LatitudeCheckIn = checkIn.LatitudeCheckIn,
                            CellIDCheckIn = checkIn.CellIDCheckIn,
                            WaktuCheckOut = checkIn.WaktuCheckOut,
                            LongitudeCheckOut = checkIn.LongitudeCheckOut,
                            LatitudeCheckOut = checkIn.LatitudeCheckOut,
                            CellIDCheckOut = checkIn.CellIDCheckOut,
                            CreatedBy = checkIn.CreatedBy,
                            CreatedDate = checkIn.CreatedDate,
                            UpdatedBy = checkIn.UpdatedBy,
                            UpdatedDate = checkIn.UpdatedDate,
                            Status_FK = checkIn.Status_FK,
                            FileSubmitted = string.IsNullOrEmpty(sowResult.FileUrl) ? "No" : "Yes"
                        };

            return query;
        }

        public CheckInDTO GetByPrimaryKey(int checkInPrimaryKey)
        {
            CheckInDTO record = GetQuery().FirstOrDefault(checkIn => checkIn.CheckIn_PK == checkInPrimaryKey);
            if (record != null)
            {
                var sowResult = new SOWResultQuery(Db).GetByCheckinFK(checkInPrimaryKey);
                if (sowResult != null)
                {
                    record.SOWResult = sowResult;
                }

                var sowTrackResults = new SOWTrackResultQuery(Db).GetByCheckinFK(checkInPrimaryKey);
                if (sowTrackResults != null)
                {
                    record.SOWTrackResults = sowTrackResults;
                }
            }
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.CheckIn_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_CheckIn WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_CheckIn.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
