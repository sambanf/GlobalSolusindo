using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.IzinCuti
{
    public class IzinCutiFactory : FactoryBase
    {
        public IzinCutiFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_IzinCuti CreateFromDTO(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            if (izinCutiDTO == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            izinCutiDTO.Status_FK = (int)RecordStatus.Active;
            izinCutiDTO.CreatedBy = User.Username;
            izinCutiDTO.CreatedDate = dateStamp;
            izinCutiDTO.UpdatedBy = User.Username;
            izinCutiDTO.UpdatedDate = dateStamp;
            tblT_IzinCuti izinCuti = izinCutiDTO.ToObject<tblT_IzinCuti>();
            return izinCuti;
        }

        public tblT_IzinCuti CreateFromDbAndUpdateFromDTO(IzinCutiDTO izinCutiDTO, DateTime dateStamp)
        {
            tblT_IzinCuti izinCuti;

            if (izinCutiDTO == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            izinCuti = Db.tblT_IzinCuti.Find(izinCutiDTO.IzinCuti_PK);
            if (izinCuti == null)
                throw new KairosException($"Record with key '{izinCutiDTO.IzinCuti_PK}' is not found.");

            izinCuti.UpdateValueFrom(izinCutiDTO, "IzinCuti_PK", "Status_FK");
            izinCutiDTO.CreatedBy = izinCuti.CreatedBy;
            izinCutiDTO.CreatedDate = izinCuti.CreatedDate;
            izinCuti.UpdatedBy = izinCutiDTO.UpdatedBy = User.Username;
            izinCuti.UpdatedDate = izinCutiDTO.UpdatedDate = dateStamp;

            return izinCuti;
        } 
    }
}
