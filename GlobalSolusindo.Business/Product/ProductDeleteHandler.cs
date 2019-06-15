using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Product
{
    public class ProductDeleteHandler : DeleteOperation
    {
        public ProductDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Product product)
        {
            if (product != null)
                Db.tblM_Product.Remove(product);
        }

        private void SoftDelete(tblM_Product product)
        {
            if (product != null)
                product.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Product> Execute(int productPK, DeleteMethod deleteMethod)
        {
            tblM_Product product = Db.tblM_Product.Find(productPK); 
            if (product == null)
            {
                return new DeleteResult<tblM_Product>()
                {
                    Success = false,
                    Message = $"Id '{productPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(product);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(product);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Product>()
            {
                Success = true,
                Message = $"Product with Id '{productPK}' successfully deleted.",
                Record = product
            };
        }
    }
}
