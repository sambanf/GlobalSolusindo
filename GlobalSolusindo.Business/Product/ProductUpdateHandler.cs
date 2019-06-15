using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Product.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Product
{
    public class ProductUpdateHandler : UpdateOperation
    {
        private ProductValidator productValidator;
        private ProductFactory productFactory;
        private ProductQuery productQuery;
        private ProductEntryDataProvider productEntryDataProvider;

        public ProductUpdateHandler(GlobalSolusindoDb db, tblM_User user, ProductValidator productValidator, ProductFactory productFactory, ProductQuery productQuery, AccessControl accessControl) : base(db, user)
        {
            this.productValidator = productValidator;
            this.productFactory = productFactory;
            this.productQuery = productQuery;
            this.productEntryDataProvider = new ProductEntryDataProvider(db, user, accessControl, productQuery);
        }

        private void Initialize(ProductValidator productValidator, ProductFactory productFactory)
        {
            this.productValidator = productValidator;
            this.productFactory = productFactory;
        }

        public void UpdateProduct(ProductDTO productDTO, DateTime dateStamp)
        {
            if (productDTO == null)
                throw new ArgumentNullException("Product model is null.");
            tblM_Product product = productFactory.CreateFromDbAndUpdateFromDTO(productDTO, dateStamp);
        }

        public SaveResult<ProductEntryModel> Save(ProductDTO productDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = productValidator.Validate(productDTO);
            bool success = false;
            ProductEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateProduct(productDTO, dateStamp);
                Db.SaveChanges();
                model = productEntryDataProvider.Get(productDTO.Id);
            }

            return new SaveResult<ProductEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
