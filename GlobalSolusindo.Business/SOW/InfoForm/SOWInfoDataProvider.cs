using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.InfoForm
{

    public class SOWResultInfo
    {
        [JsonProperty("sow_pk")]
        public int? SOW_PK { get; set; }

        [JsonProperty("sowAssign_pk")]
        public int? SOWAssign_PK { get; set; }

        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }

        [JsonProperty("kategoriJabatan_fk")]
        public int? KategoriJabatan_FK { get; set; }

        [JsonProperty("checkIn_pk")]
        public int? CheckIn_PK { get; set; }

        [JsonProperty("fileUrl")]
        public string FileUrl { get; set; }

        [JsonProperty("isApproved")]
        public bool? IsApproved { get; set; }

    }

    public class SOWInfoModel : SOWDTO
    {
        [JsonProperty("btsInfo")]
        public BTSDTO BTSInfo { get; set; }

        [JsonProperty("sowResults")]
        public List<SOWResultInfo> SOWResults { get; set; }
    }

    public class SOWInfoDataProvider : FactoryBase
    {
        private SOWQuery sowQuery;
        private AccessControl accessControl;

        public SOWInfoDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWQuery sowQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowQuery = sowQuery;
        }

        private List<SOWResultInfo> GetSOWResultsBySOWPK(int sowPK)
        {
            var sql = @"
select  
	SOW.SOW_PK,
	Assign.SOWAssign_PK,
	Assign.User_FK,
	Assign.KategoriJabatan_FK,
	Checkin.CheckIn_PK,
	Result.FileUrl,
	Result.IsApproved
from 
	tblT_SOWResult Result
	inner join tblT_CheckIn Checkin on Result.CheckIn_FK = Checkin.CheckIn_PK
	inner join tblT_SOWAssign Assign on Checkin.SOWAssign_FK = Assign.SOWAssign_PK
	inner join tblT_SOW SOW on Assign.SOW_FK = SOW.SOW_PK
where 
sow.SOW_PK  = @sowFk";

            var query = Db.Database.SqlQuery<SOWResultInfo>(sql, new SqlParameter("@sowFk", sowPK));

            return query.ToList();
        }


        private SOWInfoModel CreateModel(int pk)
        {
            var now = DateTime.Now;
            SOWInfoModel sow = sowQuery.GetByPrimaryKey(pk).ToObject<SOWInfoModel>();
            if (sow != null)
            {
                sow.SOWAssigns = new SOWAssignQuery(Db).GetWithSP_BySOW_FK(pk);
                sow.BTSInfo = new BTSQuery(Db).GetByPrimaryKey(sow.BTS_FK);
                sow.SOWResults = GetSOWResultsBySOWPK(sow.SOW_PK);
            }
            return sow;
        }

        private SOWInfoModel GetUpdateStateModel(int sowPK)
        {
            SOWInfoModel sowInfo = CreateModel(sowPK);

            if (sowInfo == null)
                throw new KairosException($"SOW with primary key '{sowPK}' is not found.");
            return sowInfo;
        }

        public SOWInfoModel Get(int sowPK)
        {

            return GetUpdateStateModel(sowPK);
        }
    }
}
