using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.DeliveryArea
{
    public class DeliveryAreaFactory : FactoryBase
    {
        public DeliveryAreaFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_DeliveryArea CreateFromDTO(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            if (deliveryAreaDTO == null)
                throw new ArgumentNullException("DeliveryArea model is null.");
            deliveryAreaDTO.Status_FK = (int)RecordStatus.Active;
            deliveryAreaDTO.CreatedBy = User.Username;
            deliveryAreaDTO.CreatedDate = dateStamp;
            deliveryAreaDTO.UpdatedBy = User.Username;
            deliveryAreaDTO.UpdatedDate = dateStamp;
            tblM_DeliveryArea deliveryArea = deliveryAreaDTO.ToObject<tblM_DeliveryArea>();
            return deliveryArea;
        }

        public tblM_DeliveryArea CreateFromDbAndUpdateFromDTO(DeliveryAreaDTO deliveryAreaDTO, DateTime dateStamp)
        {
            tblM_DeliveryArea deliveryArea;

            if (deliveryAreaDTO == null)
                throw new ArgumentNullException("DeliveryArea model is null.");
            deliveryArea = Db.tblM_DeliveryArea.Find(deliveryAreaDTO.DeliveryArea_PK);
            if (deliveryArea == null)
                throw new KairosException($"Record with key '{deliveryAreaDTO.DeliveryArea_PK}' is not found.");

            deliveryArea.UpdateValueFrom(deliveryAreaDTO, "DeliveryArea_PK", "Status_FK");
            deliveryAreaDTO.CreatedBy = deliveryArea.CreatedBy;
            deliveryAreaDTO.CreatedDate = deliveryArea.CreatedDate;
            deliveryArea.UpdatedBy = deliveryAreaDTO.UpdatedBy = User.Username;
            deliveryArea.UpdatedDate = deliveryAreaDTO.UpdatedDate = dateStamp;

            return deliveryArea;
        }
    }
}
