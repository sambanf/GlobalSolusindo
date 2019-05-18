using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CostKategori
{
    public class CostKategoriFactory : FactoryBase
    {
        public CostKategoriFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_CostKategori CreateFromDTO(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            if (costKategoriDTO == null)
                throw new ArgumentNullException("CostKategori model is null.");
            costKategoriDTO.Status_FK = (int)RecordStatus.Active;
            costKategoriDTO.CreatedBy = User.Username;
            costKategoriDTO.CreatedDate = dateStamp;
            costKategoriDTO.UpdatedBy = User.Username;
            costKategoriDTO.UpdatedDate = dateStamp;
            tblM_CostKategori costKategori = costKategoriDTO.ToObject<tblM_CostKategori>();
            return costKategori;
        }

        public tblM_CostKategori CreateFromDbAndUpdateFromDTO(CostKategoriDTO costKategoriDTO, DateTime dateStamp)
        {
            tblM_CostKategori costKategori;

            if (costKategoriDTO == null)
                throw new ArgumentNullException("CostKategori model is null.");
            costKategori = Db.tblM_CostKategori.Find(costKategoriDTO.CostKategori_PK);
            if (costKategori == null)
                throw new KairosException($"Record with key '{costKategoriDTO.CostKategori_PK}' is not found.");

            costKategori.UpdateValueFrom(costKategoriDTO, "CostKategori_PK", "Status_FK");
            costKategoriDTO.CreatedBy = costKategori.CreatedBy;
            costKategoriDTO.CreatedDate = costKategori.CreatedDate;
            costKategori.UpdatedBy = costKategoriDTO.UpdatedBy = User.Username;
            costKategori.UpdatedDate = costKategoriDTO.UpdatedDate = dateStamp;

            return costKategori;
        }
    }
}
