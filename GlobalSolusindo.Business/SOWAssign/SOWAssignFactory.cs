using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOWAssign
{
    public class SOWAssignFactory : FactoryBase
    {
        public SOWAssignFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_SOWAssign CreateFromDTO(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            if (sowAssignDTO == null)
                throw new ArgumentNullException("SOWAssign model is null.");
            sowAssignDTO.Status_FK = (int)RecordStatus.Active;
            sowAssignDTO.CreatedBy = User.Username;
            sowAssignDTO.CreatedDate = dateStamp;
            sowAssignDTO.UpdatedBy = User.Username;
            sowAssignDTO.UpdatedDate = dateStamp;
            tblT_SOWAssign sowAssign = sowAssignDTO.ToObject<tblT_SOWAssign>();
            return sowAssign;
        }

        public tblT_SOWAssign CreateFromDbAndUpdateFromDTO(SOWAssignDTO sowAssignDTO, DateTime dateStamp)
        {
            tblT_SOWAssign sowAssign;

            if (sowAssignDTO == null)
                throw new ArgumentNullException("SOWAssign model is null.");
            sowAssign = Db.tblT_SOWAssign.Find(sowAssignDTO.SOWAssign_PK);
            if (sowAssign == null)
                throw new KairosException($"Record with key '{sowAssignDTO.SOWAssign_PK}' is not found.");

            sowAssign.UpdateValueFrom(sowAssignDTO, "SOWAssign_PK", "Status_FK");
            sowAssignDTO.CreatedBy = sowAssign.CreatedBy;
            sowAssignDTO.CreatedDate = sowAssign.CreatedDate;
            sowAssign.UpdatedBy = sowAssignDTO.UpdatedBy = User.Username;
            sowAssign.UpdatedDate = sowAssignDTO.UpdatedDate = dateStamp;

            return sowAssign;
        }
    }
}
