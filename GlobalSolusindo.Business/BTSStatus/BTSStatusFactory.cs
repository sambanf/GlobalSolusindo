using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSStatus
{
    public class BTSStatusFactory : FactoryBase
    {
        public BTSStatusFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_BTSStatus CreateFromDTO(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            if (btsStatusDTO == null)
                throw new ArgumentNullException("BTSStatus model is null.");
            btsStatusDTO.Status_FK = (int)RecordStatus.Active;
            btsStatusDTO.CreatedBy = User.Username;
            btsStatusDTO.CreatedDate = dateStamp;
            btsStatusDTO.UpdatedBy = User.Username;
            btsStatusDTO.UpdatedDate = dateStamp;
            tblM_BTSStatus btsStatus = btsStatusDTO.ToObject<tblM_BTSStatus>();
            return btsStatus;
        }

        public tblM_BTSStatus CreateFromDbAndUpdateFromDTO(BTSStatusDTO btsStatusDTO, DateTime dateStamp)
        {
            tblM_BTSStatus btsStatus;

            if (btsStatusDTO == null)
                throw new ArgumentNullException("BTSStatus model is null.");
            btsStatus = Db.tblM_BTSStatus.Find(btsStatusDTO.BTSStatus_PK);
            if (btsStatus == null)
                throw new KairosException($"Record with key '{btsStatusDTO.BTSStatus_PK}' is not found.");

            btsStatus.UpdateValueFrom(btsStatusDTO, "BTSStatus_PK", "Status_FK");
            btsStatusDTO.CreatedBy = btsStatus.CreatedBy;
            btsStatusDTO.CreatedDate = btsStatus.CreatedDate;
            btsStatus.UpdatedBy = btsStatusDTO.UpdatedBy = User.Username;
            btsStatus.UpdatedDate = btsStatusDTO.UpdatedDate = dateStamp;

            return btsStatus;
        }
    }
}
