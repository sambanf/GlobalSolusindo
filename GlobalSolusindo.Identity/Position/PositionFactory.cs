using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Position
{
    public class PositionFactory : FactoryBase
    {
        public PositionFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Position CreateFromDTO(PositionDTO positionDTO, DateTime dateStamp)
        {
            if (positionDTO == null)
                throw new ArgumentNullException("Position model is null.");
            positionDTO.Status_FK = (int)RecordStatus.Active;
            positionDTO.CreatedBy = User.Username;
            positionDTO.CreatedDate = dateStamp;
            positionDTO.UpdatedBy = User.Username;
            positionDTO.UpdatedDate = dateStamp;
            tblM_Position position = positionDTO.ToObject<tblM_Position>();
            return position;
        }

        public tblM_Position CreateFromDbAndUpdateFromDTO(PositionDTO positionDTO, DateTime dateStamp)
        {
            tblM_Position position;

            if (positionDTO == null)
                throw new ArgumentNullException("Position model is null.");
            position = Db.tblM_Position.Find(positionDTO.Position_PK);
            if (position == null)
                throw new KairosException($"Record with key '{positionDTO.Position_PK}' is not found.");

            position.UpdateValueFrom(positionDTO, "Position_PK", "Status_FK");
            positionDTO.CreatedBy = position.CreatedBy;
            positionDTO.CreatedDate = position.CreatedDate;
            position.UpdatedBy = positionDTO.UpdatedBy = User.Username;
            position.UpdatedDate = positionDTO.UpdatedDate = dateStamp;

            return position;
        }
    }
}
