using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWStatus
{
    public class SOWStatusFactory : FactoryBase
    {
        public SOWStatusFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWStatus CreateFromDTO(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            if (sowStatusDTO == null)
                throw new ArgumentNullException("SOWStatus model is null.");
            sowStatusDTO.Status_FK = (int)RecordStatus.Active;
            sowStatusDTO.CreatedBy = User.Username;
            sowStatusDTO.CreatedDate = dateStamp;
            sowStatusDTO.UpdatedBy = User.Username;
            sowStatusDTO.UpdatedDate = dateStamp;
            tblT_SOWStatus sowStatus = sowStatusDTO.ToObject<tblT_SOWStatus>();
            return sowStatus;
        }

        public tblT_SOWStatus CreateFromDbAndUpdateFromDTO(SOWStatusDTO sowStatusDTO, DateTime dateStamp)
        {
            tblT_SOWStatus sowStatus;

            if (sowStatusDTO == null)
                throw new ArgumentNullException("SOWStatus model is null.");
            sowStatus = Db.tblT_SOWStatus.Find(sowStatusDTO.SOWStatus_PK);
            if (sowStatus == null)
                throw new KairosException($"Record with key '{sowStatusDTO.SOWStatus_PK}' is not found.");

            sowStatus.UpdateValueFrom(sowStatusDTO, "SOWStatus_PK", "Status_FK");
            sowStatusDTO.CreatedBy = sowStatus.CreatedBy;
            sowStatusDTO.CreatedDate = sowStatus.CreatedDate;
            sowStatus.UpdatedBy = sowStatusDTO.UpdatedBy = User.Username;
            sowStatus.UpdatedDate = sowStatusDTO.UpdatedDate = dateStamp;

            return sowStatus;
        }
    }
}
