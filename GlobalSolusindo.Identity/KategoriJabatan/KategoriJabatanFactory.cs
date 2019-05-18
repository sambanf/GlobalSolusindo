using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.KategoriJabatan
{
    public class KategoriJabatanFactory : FactoryBase
    {
        public KategoriJabatanFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_KategoriJabatan CreateFromDTO(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            if (kategoriJabatanDTO == null)
                throw new ArgumentNullException("KategoriJabatan model is null.");
            kategoriJabatanDTO.Status_FK = (int)RecordStatus.Active;
            kategoriJabatanDTO.CreatedBy = User.Username;
            kategoriJabatanDTO.CreatedDate = dateStamp;
            kategoriJabatanDTO.UpdatedBy = User.Username;
            kategoriJabatanDTO.UpdatedDate = dateStamp;
            tblM_KategoriJabatan kategoriJabatan = kategoriJabatanDTO.ToObject<tblM_KategoriJabatan>();
            return kategoriJabatan;
        }

        public tblM_KategoriJabatan CreateFromDbAndUpdateFromDTO(KategoriJabatanDTO kategoriJabatanDTO, DateTime dateStamp)
        {
            tblM_KategoriJabatan kategoriJabatan;

            if (kategoriJabatanDTO == null)
                throw new ArgumentNullException("KategoriJabatan model is null.");
            kategoriJabatan = Db.tblM_KategoriJabatan.Find(kategoriJabatanDTO.KategoriJabatan_PK);
            if (kategoriJabatan == null)
                throw new KairosException($"Record with key '{kategoriJabatanDTO.KategoriJabatan_PK}' is not found.");

            kategoriJabatan.UpdateValueFrom(kategoriJabatanDTO, "KategoriJabatan_PK", "Status_FK");
            kategoriJabatanDTO.CreatedBy = kategoriJabatan.CreatedBy;
            kategoriJabatanDTO.CreatedDate = kategoriJabatan.CreatedDate;
            kategoriJabatan.UpdatedBy = kategoriJabatanDTO.UpdatedBy = User.Username;
            kategoriJabatan.UpdatedDate = kategoriJabatanDTO.UpdatedDate = dateStamp;

            return kategoriJabatan;
        }
    }
}
