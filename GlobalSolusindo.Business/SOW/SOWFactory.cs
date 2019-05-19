using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOW
{
    public class SOWFactory : FactoryBase
    {
        public SOWFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOW CreateFromDTO(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            sowDTO.Status_FK = (int)RecordStatus.Active;
            sowDTO.CreatedBy = User.Username;
            sowDTO.CreatedDate = dateStamp;
            sowDTO.UpdatedBy = User.Username;
            sowDTO.UpdatedDate = dateStamp;
            tblT_SOW sow = sowDTO.ToObject<tblT_SOW>();
            return sow;
        }

        public tblT_SOW CreateFromDbAndUpdateFromDTO(SOWDTO sowDTO, DateTime dateStamp)
        {
            tblT_SOW sow;

            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            sow = Db.tblT_SOW.Find(sowDTO.SOW_PK);
            if (sow == null)
                throw new KairosException($"Record with key '{sowDTO.SOW_PK}' is not found.");

            sow.UpdateValueFrom(sowDTO, "SOW_PK", "Status_FK");
            sowDTO.CreatedBy = sow.CreatedBy;
            sowDTO.CreatedDate = sow.CreatedDate;
            sow.TglMulai = sowDTO.TglMulai;
            sow.UpdatedBy = sowDTO.UpdatedBy = User.Username;
            sow.UpdatedDate = sowDTO.UpdatedDate = dateStamp;

            return sow;
        }
    }
}
