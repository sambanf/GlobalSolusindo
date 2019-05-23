using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Kairos.Imaging;
using System;

namespace GlobalSolusindo.Business.SOWIssue
{
    public class SOWIssueFactory : FactoryBase
    {
        public SOWIssueFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWIssue CreateFromDTO(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            if (sowIssueDTO == null)
                throw new ArgumentNullException("SOWIssue model is null.");
            sowIssueDTO.Status_FK = (int)RecordStatus.Active;
            sowIssueDTO.CreatedBy = User.Username;
            sowIssueDTO.CreatedDate = dateStamp;
            sowIssueDTO.UpdatedBy = User.Username;
            sowIssueDTO.UpdatedDate = dateStamp;
            tblT_SOWIssue sowIssue = sowIssueDTO.ToObject<tblT_SOWIssue>();
            if (!string.IsNullOrEmpty(sowIssueDTO.FilePhotoInBase64))
                sowIssue.Foto = new WebImageConverter().GetBytesFromBase64(sowIssueDTO.FilePhotoInBase64, false);
            sowIssue.IssueType_FK = sowIssueDTO.IssueType_FK;
            sowIssue.SOWAssign_FK = sowIssueDTO.SOWAssign_FK;
                return sowIssue;
        }

        public tblT_SOWIssue CreateFromDbAndUpdateFromDTO(SOWIssueDTO sowIssueDTO, DateTime dateStamp)
        {
            tblT_SOWIssue sowIssue;

            if (sowIssueDTO == null)
                throw new ArgumentNullException("SOWIssue model is null.");
            sowIssue = Db.tblT_SOWIssue.Find(sowIssueDTO.SOWIssue_PK);
            if (sowIssue == null)
                throw new KairosException($"Record with key '{sowIssueDTO.SOWIssue_PK}' is not found.");

            sowIssue.UpdateValueFrom(sowIssueDTO, "SOWIssue_PK", "Status_FK");
            if (!string.IsNullOrEmpty(sowIssueDTO.FilePhotoInBase64))
                sowIssue.Foto = new WebImageConverter().GetBytesFromBase64(sowIssueDTO.FilePhotoInBase64, false);

            sowIssue.IssueType_FK = sowIssueDTO.IssueType_FK;
            sowIssue.SOWAssign_FK = sowIssueDTO.SOWAssign_FK;

            sowIssueDTO.CreatedBy = sowIssue.CreatedBy;
            sowIssueDTO.CreatedDate = sowIssue.CreatedDate;
            sowIssue.UpdatedBy = sowIssueDTO.UpdatedBy = User.Username;
            sowIssue.UpdatedDate = sowIssueDTO.UpdatedDate = dateStamp;

            return sowIssue;
        }
    }
}
