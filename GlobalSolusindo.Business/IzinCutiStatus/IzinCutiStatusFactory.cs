using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCutiStatus
{
    public class IzinCutiStatusFactory : FactoryBase
    {
        public IzinCutiStatusFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_IzinCutiStatus CreateFromDTO(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            if (izinCutiStatusDTO == null)
                throw new ArgumentNullException("IzinCutiStatus model is null.");
            izinCutiStatusDTO.Status_FK = (int)RecordStatus.Active;
            izinCutiStatusDTO.CreatedBy = User.Username;
            izinCutiStatusDTO.CreatedDate = dateStamp;
            izinCutiStatusDTO.UpdatedBy = User.Username;
            izinCutiStatusDTO.UpdatedDate = dateStamp;
            tblM_IzinCutiStatus izinCutiStatus = izinCutiStatusDTO.ToObject<tblM_IzinCutiStatus>();
            return izinCutiStatus;
        }

        public tblM_IzinCutiStatus CreateFromDbAndUpdateFromDTO(IzinCutiStatusDTO izinCutiStatusDTO, DateTime dateStamp)
        {
            tblM_IzinCutiStatus izinCutiStatus;

            if (izinCutiStatusDTO == null)
                throw new ArgumentNullException("IzinCutiStatus model is null.");
            izinCutiStatus = Db.tblM_IzinCutiStatus.Find(izinCutiStatusDTO.IzinCutiStatus_PK);
            if (izinCutiStatus == null)
                throw new KairosException($"Record with key '{izinCutiStatusDTO.IzinCutiStatus_PK}' is not found.");

            izinCutiStatus.UpdateValueFrom(izinCutiStatusDTO, "IzinCutiStatus_PK", "Status_FK");
            izinCutiStatusDTO.CreatedBy = izinCutiStatus.CreatedBy;
            izinCutiStatusDTO.CreatedDate = izinCutiStatus.CreatedDate;
            izinCutiStatus.UpdatedBy = izinCutiStatusDTO.UpdatedBy = User.Username;
            izinCutiStatus.UpdatedDate = izinCutiStatusDTO.UpdatedDate = dateStamp;

            return izinCutiStatus;
        }
    }
}
