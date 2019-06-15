using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Product.EntryForm
{
    public class ProductEntryModel
    {
        [JsonProperty("formData")]
        public ProductEntryFormData FormData { get; set; } = new ProductEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public ProductDTO Model { get; set; }
    }

    public class ProductEntryFormData
    {
    }

    public class ProductEntryDataProvider : FactoryBase
    {
        private ProductQuery productQuery;
        private AccessControl accessControl;

        public ProductEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, ProductQuery productQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.productQuery = productQuery;
        }

        private List<Control> CreateFormControls(int productPK)
        {
            ProductEntryControlBuilder controlBuilder = new ProductEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (productPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private ProductEntryModel GetCreateStateModel()
        {
            ProductEntryFormData formData = new ProductEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            ProductDTO productDTO = new ProductDTO();
            return new ProductEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = productDTO,
            };
        }

        private ProductEntryModel GetUpdateStateModel(int productPK)
        {
            ProductEntryFormData formData = new ProductEntryFormData();
            List<Control> formControls = CreateFormControls(productPK);
            ProductDTO productDTO = productQuery.GetByPrimaryKey(productPK);

            if (productDTO == null)
                throw new KairosException($"Record with primary key '{productDTO.Id}' is not found.");

            return new ProductEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = productDTO,
            };
        }

        public ProductEntryModel Get(int productPK)
        {
            if (productPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(productPK);
        }
    }
}
