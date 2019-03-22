using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Kota
{
    public class KotaFactory : FactoryBase
    {
        public KotaFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Kota CreateFromDTO(KotaDTO kotaDTO, DateTime dateStamp)
        {
            if (kotaDTO == null)
                throw new ArgumentNullException("Kota model is null.");
            kotaDTO.Status_FK = (int)RecordStatus.Active;
            kotaDTO.CreatedBy = User.Username;
            kotaDTO.CreatedDate = dateStamp;
            kotaDTO.UpdatedBy = User.Username;
            kotaDTO.UpdatedDate = dateStamp;
            tblM_Kota kota = kotaDTO.ToObject<tblM_Kota>();
            return kota;
        }

        public tblM_Kota CreateFromDbAndUpdateFromDTO(KotaDTO kotaDTO, DateTime dateStamp)
        {
            tblM_Kota kota;

            if (kotaDTO == null)
                throw new ArgumentNullException("Kota model is null.");
            kota = Db.tblM_Kota.Find(kotaDTO.Kota_PK);
            if (kota == null)
                throw new KairosException($"Record with key '{kotaDTO.Kota_PK}' is not found.");

            kota.UpdateValueFrom(kotaDTO, "Kota_PK", "Status_FK");
            kotaDTO.CreatedBy = kota.CreatedBy;
            kotaDTO.CreatedDate = kota.CreatedDate;
            kota.UpdatedBy = kotaDTO.UpdatedBy = User.Username;
            kota.UpdatedDate = kotaDTO.UpdatedDate = dateStamp;

            return kota;
        }
    }
}
