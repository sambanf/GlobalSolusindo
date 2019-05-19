using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.SOWResult
{
    public class SOWResultFactory : FactoryBase
    {
        public SOWResultFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWResult CreateFromDTO(SOWResultDTO sowResultDTO, DateTime dateStamp)
        {
            if (sowResultDTO == null)
                throw new ArgumentNullException("SOWResult model is null.");
            sowResultDTO.Status_FK = (int)RecordStatus.Active;
            sowResultDTO.CreatedBy = User.Username;
            sowResultDTO.CreatedDate = dateStamp;
            sowResultDTO.UpdatedBy = User.Username;
            sowResultDTO.UpdatedDate = dateStamp;
            tblT_SOWResult sowResult = sowResultDTO.ToObject<tblT_SOWResult>();
            sowResult.FileUrl = sowResultDTO.FileUrl;
            sowResult.CheckIn_FK = sowResultDTO.CheckIn_FK;
            return sowResult;
        }

        public tblT_SOWResult CreateFromDbAndUpdateFromDTO(SOWResultDTO sowResultDTO, DateTime dateStamp)
        {
            tblT_SOWResult sowResult;

            if (sowResultDTO == null)
                throw new ArgumentNullException("SOWResult model is null.");
            sowResult = Db.tblT_SOWResult.FirstOrDefault(x => x.CheckIn_FK == sowResultDTO.CheckIn_FK);
            if (sowResult == null)
                throw new KairosException($"Cannot make approval for this task, because user not yet submit the file/url.");

            //if (sowResultDTO.IsApproved == null)
            //    throw new KairosException($"'isApproved' parameter is required, please fill it with 'true' or 'false'.");

            sowResult.UpdateValueFrom(sowResultDTO, "SOWResult_PK", "Status_FK", "FileUrl");
            sowResultDTO.CreatedBy = sowResult.CreatedBy;
            sowResultDTO.CreatedDate = sowResult.CreatedDate;
            sowResult.UpdatedBy = sowResultDTO.UpdatedBy = User.Username;
            sowResult.UpdatedDate = sowResultDTO.UpdatedDate = dateStamp;
            sowResult.IsApproved = sowResultDTO.IsApproved;

            if (sowResult.IsApproved != null)
            {
                sowResult.ApprovedDate = dateStamp;
                sowResult.ApprovedBy = User.Username;
            }
            else
            {
                sowResult.FileUrl = sowResultDTO.FileUrl;

            }
            sowResult.CheckIn_FK = sowResultDTO.CheckIn_FK;
            return sowResult;
        }
    }
}
