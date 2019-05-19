using GlobalSolusindo.Base;
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

                        where
                        checkIn.Status_FK != deleted
                        select new CheckInDTO
                        {
                            CheckIn_PK = checkIn.CheckIn_PK,
                            SOWAssign_FK = checkIn.SOWAssign_FK,
                            SOW_FK = sowAssign.SOW_FK,
                            SOWName = sow.SOWName,
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
                            Status_FK = checkIn.Status_FK
                        };

            return query;
        }

        public CheckInDTO GetByPrimaryKey(int primaryKey)
        {
            CheckInDTO record = GetQuery().FirstOrDefault(checkIn => checkIn.CheckIn_PK == primaryKey);
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
