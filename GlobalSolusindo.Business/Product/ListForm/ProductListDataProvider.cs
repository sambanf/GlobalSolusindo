using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Product.ListForm
{
    public class ProductListFormData
    {
    }

    public class ProductListModel
    {
        [JsonProperty("formData")]
        public ProductListFormData FormData { get; set; } = new ProductListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<ProductDTO> SearchResult { get; set; }
    }

    public class ProductListDataProvider : FactoryBase
    {
        private ProductQuery productQuery;

        public ProductListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public ProductListDataProvider(GlobalSolusindoDb db, tblM_User user, ProductQuery productQuery) : base(db, user)
        {
            this.productQuery = productQuery;
        }

        public ProductListModel Get(ProductSearchFilter searchFilter)
        {
            ProductListFormData formData = new ProductListFormData();
            SearchResult<ProductDTO> searchResult = productQuery.Search(searchFilter);
            return new ProductListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
