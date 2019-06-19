using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Cryptography;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.PO
{
    
    public class POFactory : FactoryBase
    {
        public POFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_PO CreateFromDTO(PODTO pODTO, DateTime dateStamp)
        {
            if (pODTO == null)
                throw new ArgumentNullException("User model is null.");
            pODTO.Status_FK = (int)RecordStatus.Active;
            pODTO.CreatedBy = User.Username;
            pODTO.CreatedDate = dateStamp;
            pODTO.UpdatedBy = User.Username;
            pODTO.UpdatedDate = dateStamp;
            tblT_PO po = pODTO.ToObject<tblT_PO>();
           
            return po;
        }

        public tblT_PO CreateFromDbAndUpdateFromDTO(PODTO pODTO, DateTime dateStamp)
        {
            tblT_PO po;

            if (pODTO == null)
                throw new ArgumentNullException("User model is null.");
            po = Db.tblT_PO.Find(pODTO.PO_PK);
            if (po == null)
                throw new KairosException($"Record with key '{pODTO.PO_PK}' is not found.");

            po.UpdateValueFrom(pODTO, "PO_PK");            
            pODTO.CreatedBy = po.CreatedBy;
            pODTO.CreatedDate = po.CreatedDate;
            po.UpdatedBy = pODTO.UpdatedBy = User.Username;
            po.UpdatedDate = pODTO.UpdatedDate = dateStamp;

            return po;
        }
    }
}
