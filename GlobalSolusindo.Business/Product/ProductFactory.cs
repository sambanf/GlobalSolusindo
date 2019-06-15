using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Product
{
    public class ProductFactory : FactoryBase
    {
        public ProductFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Product CreateFromDTO(ProductDTO productDTO, DateTime dateStamp)
        {
            if (productDTO == null)
                throw new ArgumentNullException("Product model is null.");
            productDTO.Status_FK = (int)RecordStatus.Active;
            productDTO.CreatedBy = User.Username;
            productDTO.CreatedDate = dateStamp;
            productDTO.UpdatedBy = User.Username;
            productDTO.UpdatedDate = dateStamp;
            tblM_Product product = productDTO.ToObject<tblM_Product>();
            return product;
        }

        public tblM_Product CreateFromDbAndUpdateFromDTO(ProductDTO productDTO, DateTime dateStamp)
        {
            tblM_Product product;

            if (productDTO == null)
                throw new ArgumentNullException("Product model is null.");
            product = Db.tblM_Product.Find(productDTO.Id);
            if (product == null)
                throw new KairosException($"Record with key '{productDTO.Id}' is not found.");

            product.UpdateValueFrom(productDTO, "Id", "Status_FK");
            productDTO.CreatedBy = product.CreatedBy;
            productDTO.CreatedDate = product.CreatedDate;
            product.UpdatedBy = productDTO.UpdatedBy = User.Username;
            product.UpdatedDate = productDTO.UpdatedDate = dateStamp;

            return product;
        }
    }
}
