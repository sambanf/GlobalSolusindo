using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IssueType
{
    public class IssueTypeFactory : FactoryBase
    {
        public IssueTypeFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_IssueType CreateFromDTO(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            if (issueTypeDTO == null)
                throw new ArgumentNullException("IssueType model is null.");
            issueTypeDTO.Status_FK = (int)RecordStatus.Active;
            issueTypeDTO.CreatedBy = User.Username;
            issueTypeDTO.CreatedDate = dateStamp;
            issueTypeDTO.UpdatedBy = User.Username;
            issueTypeDTO.UpdatedDate = dateStamp;
            tblM_IssueType issueType = issueTypeDTO.ToObject<tblM_IssueType>();
            return issueType;
        }

        public tblM_IssueType CreateFromDbAndUpdateFromDTO(IssueTypeDTO issueTypeDTO, DateTime dateStamp)
        {
            tblM_IssueType issueType;

            if (issueTypeDTO == null)
                throw new ArgumentNullException("IssueType model is null.");
            issueType = Db.tblM_IssueType.Find(issueTypeDTO.IssueType_PK);
            if (issueType == null)
                throw new KairosException($"Record with key '{issueTypeDTO.IssueType_PK}' is not found.");

            issueType.UpdateValueFrom(issueTypeDTO, "IssueType_PK", "Status_FK");
            issueTypeDTO.CreatedBy = issueType.CreatedBy;
            issueTypeDTO.CreatedDate = issueType.CreatedDate;
            issueType.UpdatedBy = issueTypeDTO.UpdatedBy = User.Username;
            issueType.UpdatedDate = issueTypeDTO.UpdatedDate = dateStamp;

            return issueType;
        }
    }
}
