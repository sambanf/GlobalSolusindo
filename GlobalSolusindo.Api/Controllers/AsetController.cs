using GlobalSolusindo.Business.Aset;
using GlobalSolusindo.Business.Aset.DML;
using GlobalSolusindo.Business.Aset.EntryForm;
using GlobalSolusindo.Business.Aset.Queries;
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
    public class AsetController : ApiControllerBase
    {
        public AsetController()
        {
        }

        [Route("aset/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Aset_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetQuery asetQuery = new AsetQuery(Db))
            {
                var data = asetQuery.GetByPrimaryKey(id);
                SaveLog("Aset", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Aset_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetEntryDataProvider asetEntryDataProvider = new AsetEntryDataProvider(Db, ActiveUser, AccessControl, new AsetQuery(Db)))
            {
                var data = asetEntryDataProvider.Get(id);
                SaveLog("Aset", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AsetSearchFilter filter)
        {
            string accessType = "Aset_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var asetSearch = new AsetSearch(Db))
            {
                var data = asetSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AsetDTO aset)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (aset == null)
                throw new KairosException("Missing model parameter");

            if (aset.Aset_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var asetCreateHandler = new AsetCreateHandler(Db, ActiveUser, new AsetValidator(), new AsetFactory(Db, ActiveUser), new AsetQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = asetCreateHandler.Save(asetDTO: aset, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("aset")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AsetDTO aset)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (aset == null)
                throw new KairosException("Missing model parameter");

            if (aset.Aset_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var asetUpdateHandler = new AsetUpdateHandler(Db, ActiveUser, new AsetValidator(), new AsetFactory(Db, ActiveUser), new AsetQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetUpdateHandler.Save(aset, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("aset")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

            using (var asetDeleteHandler = new AsetDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Aset>>();

                    foreach (var id in ids)
                    {
                        result.Add(asetDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
