using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanFactory : FactoryBase
    {
        public TipePekerjaanFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_TipePekerjaan CreateFromDTO(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            if (tipePekerjaanDTO == null)
                throw new ArgumentNullException("TipePekerjaan model is null.");
            tipePekerjaanDTO.Status_FK = (int)RecordStatus.Active;
            tipePekerjaanDTO.CreatedBy = User.Username;
            tipePekerjaanDTO.CreatedDate = dateStamp;
            tipePekerjaanDTO.UpdatedBy = User.Username;
            tipePekerjaanDTO.UpdatedDate = dateStamp;
            tblM_TipePekerjaan tipePekerjaan = tipePekerjaanDTO.ToObject<tblM_TipePekerjaan>();
            return tipePekerjaan;
        }

        public tblM_TipePekerjaan CreateFromDbAndUpdateFromDTO(TipePekerjaanDTO tipePekerjaanDTO, DateTime dateStamp)
        {
            tblM_TipePekerjaan tipePekerjaan;

            if (tipePekerjaanDTO == null)
                throw new ArgumentNullException("TipePekerjaan model is null.");
            tipePekerjaan = Db.tblM_TipePekerjaan.Find(tipePekerjaanDTO.TipePekerjaan_PK);
            if (tipePekerjaan == null)
                throw new KairosException($"Record with key '{tipePekerjaanDTO.TipePekerjaan_PK}' is not found.");

            tipePekerjaan.UpdateValueFrom(tipePekerjaanDTO, "TipePekerjaan_PK", "Status_FK");
            tipePekerjaanDTO.CreatedBy = tipePekerjaan.CreatedBy;
            tipePekerjaanDTO.CreatedDate = tipePekerjaan.CreatedDate;
            tipePekerjaan.UpdatedBy = tipePekerjaanDTO.UpdatedBy = User.Username;
            tipePekerjaan.UpdatedDate = tipePekerjaanDTO.UpdatedDate = dateStamp;

            return tipePekerjaan;
        }
    }
}
