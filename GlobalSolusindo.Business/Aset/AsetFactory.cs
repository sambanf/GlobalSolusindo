using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Aset
{
    public class AsetFactory : FactoryBase
    {
        public AsetFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Aset CreateFromDTO(AsetDTO asetDTO, DateTime dateStamp)
        {
            if (asetDTO == null)
                throw new ArgumentNullException("Aset model is null.");
            asetDTO.Status_FK = (int)RecordStatus.Active;
            asetDTO.CreatedBy = User.Username;
            asetDTO.CreatedDate = dateStamp;
            asetDTO.UpdatedBy = User.Username;
            asetDTO.UpdatedDate = dateStamp;
            tblM_Aset aset = asetDTO.ToObject<tblM_Aset>();
            return aset;
        }

        public tblM_Aset CreateFromDbAndUpdateFromDTO(AsetDTO asetDTO, DateTime dateStamp)
        {
            tblM_Aset aset;

            if (asetDTO == null)
                throw new ArgumentNullException("Aset model is null.");
            aset = Db.tblM_Aset.Find(asetDTO.Aset_PK);
            if (aset == null)
                throw new KairosException($"Record with key '{asetDTO.Aset_PK}' is not found.");

            aset.UpdateValueFrom(asetDTO, "Aset_PK", "Status_FK", "filePhoto");
            asetDTO.CreatedBy = aset.CreatedBy;
            asetDTO.CreatedDate = aset.CreatedDate;
            aset.UpdatedBy = asetDTO.UpdatedBy = User.Username;
            aset.UpdatedDate = asetDTO.UpdatedDate = dateStamp;

            return aset;
        }
    }
}
