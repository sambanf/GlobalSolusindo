using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetKategori
{
    public class AsetKategoriFactory : FactoryBase
    {
        public AsetKategoriFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_AsetKategori CreateFromDTO(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            if (asetKategoriDTO == null)
                throw new ArgumentNullException("AsetKategori model is null.");
            asetKategoriDTO.Status_FK = (int)RecordStatus.Active;
            asetKategoriDTO.CreatedBy = User.Username;
            asetKategoriDTO.CreatedDate = dateStamp;
            asetKategoriDTO.UpdatedBy = User.Username;
            asetKategoriDTO.UpdatedDate = dateStamp;
            tblM_AsetKategori asetKategori = asetKategoriDTO.ToObject<tblM_AsetKategori>();
            return asetKategori;
        }

        public tblM_AsetKategori CreateFromDbAndUpdateFromDTO(AsetKategoriDTO asetKategoriDTO, DateTime dateStamp)
        {
            tblM_AsetKategori asetKategori;

            if (asetKategoriDTO == null)
                throw new ArgumentNullException("AsetKategori model is null.");
            asetKategori = Db.tblM_AsetKategori.Find(asetKategoriDTO.AsetKategori_PK);
            if (asetKategori == null)
                throw new KairosException($"Record with key '{asetKategoriDTO.AsetKategori_PK}' is not found.");

            asetKategori.UpdateValueFrom(asetKategoriDTO, "AsetKategori_PK", "Status_FK");
            asetKategoriDTO.CreatedBy = asetKategori.CreatedBy;
            asetKategoriDTO.CreatedDate = asetKategori.CreatedDate;
            asetKategori.UpdatedBy = asetKategoriDTO.UpdatedBy = User.Username;
            asetKategori.UpdatedDate = asetKategoriDTO.UpdatedDate = dateStamp;

            return asetKategori;
        }
    }
}
