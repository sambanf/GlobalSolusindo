using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.LogActivity
{
    public class LogActivityFactory : DbOperation
    {
        public LogActivityFactory(GlobalSolusindoDb db) : base(db)
        {
        }

        public tblT_LogActivity CreateFromDTO(LogActivityDTO logActivityDTO, DateTime dateStamp)
        {
            if (logActivityDTO == null)
                throw new ArgumentNullException("LogActivity model is null.");
            //logActivityDTO.Status_FK = (int)RecordStatus.Active;
            //logActivityDTO.CreatedBy = User.Username;
            //logActivityDTO.CreatedDate = dateStamp;
            //logActivityDTO.UpdatedBy = User.Username;
            //logActivityDTO.UpdatedDate = dateStamp;
            tblT_LogActivity logActivity = logActivityDTO.ToObject<tblT_LogActivity>();
            return logActivity;
        }

        public tblT_LogActivity CreateFromDbAndUpdateFromDTO(LogActivityDTO logActivityDTO, DateTime dateStamp)
        {
            tblT_LogActivity logActivity;

            if (logActivityDTO == null)
                throw new ArgumentNullException("LogActivity model is null.");
            logActivity = Db.tblT_LogActivity.Find(logActivityDTO.LogActivity_PK);
            if (logActivity == null)
                throw new KairosException($"Record with key '{logActivityDTO.LogActivity_PK}' is not found.");

            logActivity.UpdateValueFrom(logActivityDTO, "LogActivity_PK", "Status_FK");
            //logActivityDTO.CreatedBy = logActivity.CreatedBy;
            //logActivityDTO.CreatedDate = logActivity.CreatedDate;
            //logActivity.UpdatedBy = logActivityDTO.UpdatedBy = User.Username;
            //logActivity.UpdatedDate = logActivityDTO.UpdatedDate = dateStamp;

            return logActivity;
        }
    }
}
