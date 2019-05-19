using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetHistori
{
    public class AsetHistoriFactory : FactoryBase
    {
        public AsetHistoriFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_AsetHistori CreateFromDTO(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            if (asetHistoriDTO == null)
                throw new ArgumentNullException("AsetHistori model is null.");
            asetHistoriDTO.Status_FK = (int)RecordStatus.Active;
            asetHistoriDTO.CreatedBy = User.Username;
            asetHistoriDTO.CreatedDate = dateStamp;
            asetHistoriDTO.UpdatedBy = User.Username;
            asetHistoriDTO.UpdatedDate = dateStamp;
            tblT_AsetHistori asetHistori = asetHistoriDTO.ToObject<tblT_AsetHistori>();
            return asetHistori;
        }

        public tblT_AsetHistori CreateFromDbAndUpdateFromDTO(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            tblT_AsetHistori asetHistori;

            if (asetHistoriDTO == null)
                throw new ArgumentNullException("AsetHistori model is null.");
            asetHistori = Db.tblT_AsetHistori.Find(asetHistoriDTO.AsetHistori_PK);
            if (asetHistori == null)
                throw new KairosException($"Record with key '{asetHistoriDTO.AsetHistori_PK}' is not found.");

            asetHistori.UpdateValueFrom(asetHistoriDTO, "AsetHistori_PK", "Status_FK");
            asetHistoriDTO.CreatedBy = asetHistori.CreatedBy;
            asetHistoriDTO.CreatedDate = asetHistori.CreatedDate;
            asetHistori.UpdatedBy = asetHistoriDTO.UpdatedBy = User.Username;
            asetHistori.UpdatedDate = asetHistoriDTO.UpdatedDate = dateStamp;

            return asetHistori;
        }
    }
}
