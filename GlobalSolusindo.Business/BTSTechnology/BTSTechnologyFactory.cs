using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.BTSTechnology
{
    public class BTSTechnologyFactory : FactoryBase
    {
        public BTSTechnologyFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_BTSTechnology CreateFromDTO(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            if (btsTechnologyDTO == null)
                throw new ArgumentNullException("BTSTechnology model is null.");
            btsTechnologyDTO.Status_FK = (int)RecordStatus.Active;
            btsTechnologyDTO.CreatedBy = User.Username;
            btsTechnologyDTO.CreatedDate = dateStamp;
            btsTechnologyDTO.UpdatedBy = User.Username;
            btsTechnologyDTO.UpdatedDate = dateStamp;
            tblM_BTSTechnology btsTechnology = btsTechnologyDTO.ToObject<tblM_BTSTechnology>();
            return btsTechnology;
        }

        public tblM_BTSTechnology CreateFromDbAndUpdateFromDTO(BTSTechnologyDTO btsTechnologyDTO, DateTime dateStamp)
        {
            tblM_BTSTechnology btsTechnology;

            if (btsTechnologyDTO == null)
                throw new ArgumentNullException("BTSTechnology model is null.");
            btsTechnology = Db.tblM_BTSTechnology.Find(btsTechnologyDTO.BTSTechnology_PK);
            if (btsTechnology == null)
                throw new KairosException($"Record with key '{btsTechnologyDTO.BTSTechnology_PK}' is not found.");

            btsTechnology.UpdateValueFrom(btsTechnologyDTO, "BTSTechnology_PK", "Status_FK");
            btsTechnologyDTO.CreatedBy = btsTechnology.CreatedBy;
            btsTechnologyDTO.CreatedDate = btsTechnology.CreatedDate;
            btsTechnology.UpdatedBy = btsTechnologyDTO.UpdatedBy = User.Username;
            btsTechnology.UpdatedDate = btsTechnologyDTO.UpdatedDate = dateStamp;

            return btsTechnology;
        }
    }
}
