using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.BTS.Queries
{
    public class BTSQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public BTSQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public BTSQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<BTSDTO> GetQuery()
        {
            var query = from bts in Db.tblM_BTS
                        join _operator in Db.tblM_Operator on bts.Operator_FK equals _operator.Operator_PK into operatorTemp
                        from _operator in operatorTemp.DefaultIfEmpty()
                        join statusBts in Db.tblM_BTSStatus on bts.StatusBTS_FK equals statusBts.BTSStatus_PK into statusBtsTemp
                        from statusBts in statusBtsTemp.DefaultIfEmpty()
                        join area in Db.tblM_Area on bts.Area_FK equals area.Area_PK into areaTemp
                        from area in areaTemp.DefaultIfEmpty()
                        join kota in Db.tblM_Kota on bts.Kota_FK equals kota.Kota_PK into kotaTemp
                        from kota in kotaTemp.DefaultIfEmpty()
                        join cabang in Db.tblM_Cabang on bts.Cabang_FK equals cabang.Cabang_PK into cabangTemp
                        from cabang in cabangTemp.DefaultIfEmpty()
                        where
                        bts.Status_FK != deleted
                        select new BTSDTO
                        {
                            BTS_PK = bts.BTS_PK,
                            CustomerSite = bts.CustomerSite,
                            TowerID = bts.TowerID,
                            CellID = bts.CellID,
                            Name = bts.Name,
                            Operator_FK = bts.Operator_FK,
                            OperatorTitle = _operator.Title,
                            StatusBTS_FK = bts.StatusBTS_FK,
                            StatusBtsTitle = statusBts.Title,
                            Longitude = bts.Longitude,
                            Latitude = bts.Latitude,
                            Area_FK = bts.Area_FK,
                            AreaTitle = area.Title,
                            Kota_FK = bts.Kota_FK,
                            KotaTitle = kota.Title,
                            Cabang_FK = bts.Cabang_FK,
                            CabangTitle = cabang.Title,
                            Alamat = bts.Alamat,
                            CreatedBy = bts.CreatedBy,
                            CreatedDate = bts.CreatedDate,
                            UpdatedBy = bts.UpdatedBy,
                            UpdatedDate = bts.UpdatedDate,
                            Status_FK = bts.Status_FK
                        };

            return query;
        }

        public BTSDTO GetByPrimaryKey(int primaryKey)
        {
            BTSDTO record = GetQuery().FirstOrDefault(bts => bts.BTS_PK == primaryKey);
            if (record != null)
            {
                record.BTSTechnologies = new BTSTechnologyQuery(Db).GetByBTSFK(primaryKey);
            }
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.BTS_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_BTS WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_BTS.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
