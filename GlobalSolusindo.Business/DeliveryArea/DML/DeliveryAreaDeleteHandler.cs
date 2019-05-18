using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.DeliveryArea.DML
{
    public class DeliveryAreaDeleteHandler : DeleteOperation
    {
        public DeliveryAreaDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_DeliveryArea deliveryArea)
        {
            if (deliveryArea != null)
                Db.tblM_DeliveryArea.Remove(deliveryArea);
        }

        private void SoftDelete(tblM_DeliveryArea deliveryArea)
        {
            if (deliveryArea != null)
                deliveryArea.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_DeliveryArea> Execute(int deliveryAreaPK, DeleteMethod deleteMethod)
        {
            tblM_DeliveryArea deliveryArea = Db.tblM_DeliveryArea.Find(deliveryAreaPK); 
            if (deliveryArea == null)
            {
                return new DeleteResult<tblM_DeliveryArea>()
                {
                    Success = false,
                    Message = $"Id '{deliveryAreaPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(deliveryArea);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(deliveryArea);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_DeliveryArea>()
            {
                Success = true,
                Message = $"DeliveryArea with Id '{deliveryAreaPK}' successfully deleted.",
                Record = deliveryArea
            };
        }
    }
}
