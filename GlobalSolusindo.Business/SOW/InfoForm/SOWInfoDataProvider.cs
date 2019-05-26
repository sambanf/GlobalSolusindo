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
using System.Linq;

namespace GlobalSolusindo.Business.SOW.InfoForm
{
    public class SOWInfoModel : SOWDTO
    {
        [JsonProperty("btsInfo")]
        public BTSDTO BTSInfo { get; set; }
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

        private SOWInfoModel CreateModel(int pk)
        {
            var now = DateTime.Now;
            SOWInfoModel sow = sowQuery.GetByPrimaryKey(pk).ToObject<SOWInfoModel>();
            if (sow != null)
            {
                sow.SOWAssigns = new SOWAssignQuery(Db).GetWithSP_BySOW_FK(pk);
                sow.BTSInfo = new BTSQuery(Db).GetByPrimaryKey(sow.BTS_FK);
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
