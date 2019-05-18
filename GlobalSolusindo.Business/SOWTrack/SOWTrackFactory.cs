using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWTrack
{
    public class SOWTrackFactory : FactoryBase
    {
        public SOWTrackFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWTrack CreateFromDTO(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            if (sowTrackDTO == null)
                throw new ArgumentNullException("SOWTrack model is null.");
            sowTrackDTO.Status_FK = (int)RecordStatus.Active;
            sowTrackDTO.CreatedBy = User.Username;
            sowTrackDTO.CreatedDate = dateStamp;
            sowTrackDTO.UpdatedBy = User.Username;
            sowTrackDTO.UpdatedDate = dateStamp;
            tblT_SOWTrack sowTrack = sowTrackDTO.ToObject<tblT_SOWTrack>();
            return sowTrack;
        }

        public tblT_SOWTrack CreateFromDbAndUpdateFromDTO(SOWTrackDTO sowTrackDTO, DateTime dateStamp)
        {
            tblT_SOWTrack sowTrack;

            if (sowTrackDTO == null)
                throw new ArgumentNullException("SOWTrack model is null.");
            sowTrack = Db.tblT_SOWTrack.Find(sowTrackDTO.SOWTrack_PK);
            if (sowTrack == null)
                throw new KairosException($"Record with key '{sowTrackDTO.SOWTrack_PK}' is not found.");

            sowTrack.UpdateValueFrom(sowTrackDTO, "SOWTrack_PK", "Status_FK");
            sowTrackDTO.CreatedBy = sowTrack.CreatedBy;
            sowTrackDTO.CreatedDate = sowTrack.CreatedDate;
            sowTrack.UpdatedBy = sowTrackDTO.UpdatedBy = User.Username;
            sowTrack.UpdatedDate = sowTrackDTO.UpdatedDate = dateStamp;

            return sowTrack;
        }
    }
}
