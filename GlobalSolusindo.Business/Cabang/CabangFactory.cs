using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cabang
{
    public class CabangFactory : FactoryBase
    {
        public CabangFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Cabang CreateFromDTO(CabangDTO cabangDTO, DateTime dateStamp)
        {
            if (cabangDTO == null)
                throw new ArgumentNullException("Cabang model is null.");
            cabangDTO.Status_FK = (int)RecordStatus.Active;
            cabangDTO.CreatedBy = User.Username;
            cabangDTO.CreatedDate = dateStamp;
            cabangDTO.UpdatedBy = User.Username;
            cabangDTO.UpdatedDate = dateStamp;
            tblM_Cabang cabang = cabangDTO.ToObject<tblM_Cabang>();
            return cabang;
        }

        public tblM_Cabang CreateFromDbAndUpdateFromDTO(CabangDTO cabangDTO, DateTime dateStamp)
        {
            tblM_Cabang cabang;

            if (cabangDTO == null)
                throw new ArgumentNullException("Cabang model is null.");
            cabang = Db.tblM_Cabang.Find(cabangDTO.Cabang_PK);
            if (cabang == null)
                throw new KairosException($"Record with key '{cabangDTO.Cabang_PK}' is not found.");

            cabang.UpdateValueFrom(cabangDTO, "Cabang_PK", "Status_FK");
            cabangDTO.CreatedBy = cabang.CreatedBy;
            cabangDTO.CreatedDate = cabang.CreatedDate;
            cabang.UpdatedBy = cabangDTO.UpdatedBy = User.Username;
            cabang.UpdatedDate = cabangDTO.UpdatedDate = dateStamp;

            return cabang;
        }
    }
}
