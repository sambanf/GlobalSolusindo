using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTS
{
    public class BTSFactory : FactoryBase
    {
        public BTSFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_BTS CreateFromDTO(BTSDTO btsDTO, DateTime dateStamp)
        {
            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            btsDTO.Status_FK = (int)RecordStatus.Active;
            btsDTO.CreatedBy = User.Username;
            btsDTO.CreatedDate = dateStamp;
            btsDTO.UpdatedBy = User.Username;
            btsDTO.UpdatedDate = dateStamp;
            tblM_BTS bts = btsDTO.ToObject<tblM_BTS>();
            return bts;
        }

        public tblM_BTS CreateFromDbAndUpdateFromDTO(BTSDTO btsDTO, DateTime dateStamp)
        {
            tblM_BTS bts;

            if (btsDTO == null)
                throw new ArgumentNullException("BTS model is null.");
            bts = Db.tblM_BTS.Find(btsDTO.BTS_PK);
            if (bts == null)
                throw new KairosException($"Record with key '{btsDTO.BTS_PK}' is not found.");

            bts.UpdateValueFrom(btsDTO, "BTS_PK", "Status_FK");
            btsDTO.CreatedBy = bts.CreatedBy;
            btsDTO.CreatedDate = bts.CreatedDate;
            bts.UpdatedBy = btsDTO.UpdatedBy = User.Username;
            bts.UpdatedDate = btsDTO.UpdatedDate = dateStamp;

            return bts;
        }
    }
}
