using GlobalSolusindo.Business.Product;
using GlobalSolusindo.Business.Product.EntryForm;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class ProductController : ApiControllerBase
    {
        public ProductController()
        {
        }

        [Route("products/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Product_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (ProductQuery productQuery = new ProductQuery(Db))
            {
                var data = productQuery.GetByPrimaryKey(id);
                SaveLog("Product", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("products/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Product_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (ProductEntryDataProvider productEntryDataProvider = new ProductEntryDataProvider(Db, ActiveUser, AccessControl, new ProductQuery(Db)))
            {
                var data = productEntryDataProvider.Get(id);
                SaveLog("Product", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("products/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]ProductSearchFilter filter)
        {
            string accessType = "Product_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var productQuery = new ProductQuery(Db))
            {
                var data = productQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("products")]
        [HttpGet]
        public IHttpActionResult All([FromUri]ProductSearchFilter filter)
        {
            string accessType = "Product_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            using (var productQuery = new ProductQuery(Db))
            {
                var data = productQuery.GetQuery().ToList();
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("products")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]ProductDTO product)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (product == null)
                throw new KairosException("Missing model parameter");

            if (product.Id != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var productCreateHandler = new ProductCreateHandler(Db, ActiveUser, new ProductValidator(), new ProductFactory(Db, ActiveUser), new ProductQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = productCreateHandler.Save(productDTO: product, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("products")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]ProductDTO product)
        {
            
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (product == null)
                throw new KairosException("Missing model parameter");

            if (product.Id == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var productUpdateHandler = new ProductUpdateHandler(Db, ActiveUser, new ProductValidator(), new ProductFactory(Db, ActiveUser), new ProductQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = productUpdateHandler.Save(product, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("products/{id}")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            if (id == 0)
                throw new KairosException("Deleted is must be greater than 0.");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var productDeleteHandler = new ProductDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = productDeleteHandler.Execute(id, Base.DeleteMethod.Soft);
                    transaction.Complete();

                    return Ok(new SuccessResponse(result, result.Message));
                }
            }
        }
    }
}
