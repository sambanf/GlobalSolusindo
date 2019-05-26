using GlobalSolusindo.Business.Vendor;
using GlobalSolusindo.Business.Vendor.EntryForm;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class VendorController : ApiControllerBase
    {
        public VendorController()
        {
        }

        [Route("vendor/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Vendor_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (VendorQuery vendorQuery = new VendorQuery(Db))
            {
                var data = vendorQuery.GetByPrimaryKey(id);
                SaveLog("Vendor", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("vendor/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Vendor_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (VendorEntryDataProvider vendorEntryDataProvider = new VendorEntryDataProvider(Db, ActiveUser, AccessControl, new VendorQuery(Db)))
            {
                var data = vendorEntryDataProvider.Get(id);
                SaveLog("Vendor", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("vendor/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]VendorSearchFilter filter)
        {
            string accessType = "Vendor_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var vendorQuery = new VendorQuery(Db))
            {
                var data = vendorQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("vendor")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]VendorDTO vendor)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (vendor == null)
                throw new KairosException("Missing model parameter");

            if (vendor.Vendor_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var vendorCreateHandler = new VendorCreateHandler(Db, ActiveUser, new VendorValidator(), new VendorFactory(Db, ActiveUser), new VendorQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = vendorCreateHandler.Save(vendorDTO: vendor, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("vendor")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]VendorDTO vendor)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (vendor == null)
                throw new KairosException("Missing model parameter");

            if (vendor.Vendor_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var vendorUpdateHandler = new VendorUpdateHandler(Db, ActiveUser, new VendorValidator(), new VendorFactory(Db, ActiveUser), new VendorQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = vendorUpdateHandler.Save(vendor, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("vendor")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var vendorDeleteHandler = new VendorDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Vendor>>();

                    foreach (var id in ids)
                    {
                        result.Add(vendorDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
