using GlobalSolusindo.Business.AsetHistori;
using GlobalSolusindo.Business.AsetHistori.DML;
using GlobalSolusindo.Business.AsetHistori.EntryForm;
using GlobalSolusindo.Business.AsetHistori.Queries;
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
    public class AsetHistoriController : ApiControllerBase
    {
        public AsetHistoriController()
        {
        }

        [Route("asetHistori/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "AsetHistori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetHistoriQuery asetHistoriQuery = new AsetHistoriQuery(Db))
            {
                var data = asetHistoriQuery.GetByPrimaryKey(id);
                SaveLog("AsetHistori", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetHistori/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "AsetHistori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetHistoriEntryDataProvider asetHistoriEntryDataProvider = new AsetHistoriEntryDataProvider(Db, ActiveUser, AccessControl, new AsetHistoriQuery(Db)))
            {
                var data = asetHistoriEntryDataProvider.Get(id);
                SaveLog("AsetHistori", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetHistori/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AsetHistoriSearchFilter filter)
        {
            string accessType = "AsetHistori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var asetHistoriSearch = new AsetHistoriSearch(Db))
            {
                var data = asetHistoriSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetHistori")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AsetHistoriDTO asetHistori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (asetHistori == null)
                throw new KairosException("Missing model parameter");

            if (asetHistori.AsetHistori_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var asetHistoriCreateHandler = new AsetHistoriCreateHandler(Db, ActiveUser, new AsetHistoriValidator(), new AsetHistoriFactory(Db, ActiveUser), new AsetHistoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = asetHistoriCreateHandler.Save(asetHistoriDTO: asetHistori, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("asetHistori")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AsetHistoriDTO asetHistori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (asetHistori == null)
                throw new KairosException("Missing model parameter");

            if (asetHistori.AsetHistori_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var asetHistoriUpdateHandler = new AsetHistoriUpdateHandler(Db, ActiveUser, new AsetHistoriValidator(), new AsetHistoriFactory(Db, ActiveUser), new AsetHistoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetHistoriUpdateHandler.Save(asetHistori, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("asetHistori")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

            using (var asetHistoriDeleteHandler = new AsetHistoriDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_AsetHistori>>();

                    foreach (var id in ids)
                    {
                        result.Add(asetHistoriDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
