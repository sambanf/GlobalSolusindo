using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Product.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Product
{
    public class ProductCreateHandler : CreateOperation
    {
        private ProductValidator productValidator;
        private ProductFactory productFactory;
        private ProductQuery productQuery;
        private ProductEntryDataProvider productEntryDataProvider;

        public ProductCreateHandler(GlobalSolusindoDb db, tblM_User user, ProductValidator productValidator, ProductFactory productFactory, ProductQuery productQuery, AccessControl accessControl) : base(db, user)
        {
            this.productValidator = productValidator;
            this.productFactory = productFactory;
            this.productQuery = productQuery;
            this.productEntryDataProvider = new ProductEntryDataProvider(db, user, accessControl, productQuery);
        }

        public tblM_Product AddProduct(ProductDTO productDTO, DateTime dateStamp)
        {
            if (productDTO == null)
                throw new ArgumentNullException("Product model is null.");
            tblM_Product product = productFactory.CreateFromDTO(productDTO, dateStamp);
            return Db.tblM_Product.Add(product);
        }

        public SaveResult<ProductEntryModel> Save(ProductDTO productDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = productValidator.Validate(productDTO);
            bool success = false;
            ProductEntryModel model = null;
            if (!validationResult.IsValid)
            {
                return new SaveResult<ProductEntryModel>
                {
                    Success = success,
                    Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                    Model = model,
                    ValidationResult = validationResult
                };

            }
            tblM_Product product = AddProduct(productDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = productEntryDataProvider.Get(product.Id);

            return new SaveResult<ProductEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
