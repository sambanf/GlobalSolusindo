using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.SOWTrackResult
{
    public class SOWTrackResultFactory : FactoryBase
    {
        public SOWTrackResultFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWTrackResult CreateFromDTO(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            if (sowTrackResultDTO == null)
                throw new ArgumentNullException("SOWTrackResult model is null.");
            sowTrackResultDTO.Status_FK = (int)RecordStatus.Active;
            sowTrackResultDTO.CreatedBy = User.Username;
            sowTrackResultDTO.CreatedDate = dateStamp;
            sowTrackResultDTO.UpdatedBy = User.Username;
            sowTrackResultDTO.UpdatedDate = dateStamp;
            tblT_SOWTrackResult sowTrackResult = sowTrackResultDTO.ToObject<tblT_SOWTrackResult>();
            sowTrackResult.CheckIn_FK = sowTrackResultDTO.CheckIn_FK;
            return sowTrackResult;
        }

        public tblT_SOWTrackResult CreateFromDbAndUpdateFromDTO(SOWTrackResultDTO sowTrackResultDTO, DateTime dateStamp)
        {
            tblT_SOWTrackResult sowTrackResult;

            if (sowTrackResultDTO == null)
                throw new ArgumentNullException("SOWTrackResult model is null.");
            sowTrackResult = Db.tblT_SOWTrackResult.FirstOrDefault(x => x.CheckIn_FK == sowTrackResultDTO.CheckIn_FK);
            if (sowTrackResult == null)
                throw new KairosException($"Record with key '{sowTrackResultDTO.SOWTrackResult_PK}' is not found.");

            sowTrackResult.UpdateValueFrom(sowTrackResultDTO, "SOWTrackResult_PK", "Status_FK", "SOWTrack_FK");
            sowTrackResultDTO.CreatedBy = sowTrackResult.CreatedBy;
            sowTrackResultDTO.CreatedDate = sowTrackResult.CreatedDate;
            sowTrackResult.UpdatedBy = sowTrackResultDTO.UpdatedBy = User.Username;
            sowTrackResult.UpdatedDate = sowTrackResultDTO.UpdatedDate = dateStamp;

            return sowTrackResult;
        }
    }
}
