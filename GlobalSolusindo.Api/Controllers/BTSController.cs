using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.BTS.DML;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
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
    public class BTSController : ApiControllerBase
    {
        public BTSController()
        {
        }

        [Route("bts/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "BTS_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (BTSQuery btsQuery = new BTSQuery(Db))
            {
                var data = btsQuery.GetByPrimaryKey(id);
                SaveLog("BTS", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "BTS_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (BTSEntryDataProvider btsEntryDataProvider = new BTSEntryDataProvider(Db, ActiveUser, AccessControl, new BTSQuery(Db)))
            {
                var data = btsEntryDataProvider.Get(id);
                SaveLog("BTS", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]BTSSearchFilter filter)
        {
            string accessType = "BTS_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var btsSearch = new BTSSearch(Db))
            {
                var data = btsSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]BTSDTO bts)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (bts == null)
                throw new KairosException("Missing model parameter");

            if (bts.BTS_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var btsCreateHandler = new BTSCreateHandler(Db, ActiveUser, new BTSValidator(), new BTSFactory(Db, ActiveUser), new BTSQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = btsCreateHandler.Save(btsDTO: bts, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("bts")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]BTSDTO bts)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (bts == null)
                throw new KairosException("Missing model parameter");

            if (bts.BTS_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var btsUpdateHandler = new BTSUpdateHandler(Db, ActiveUser, new BTSValidator(), new BTSFactory(Db, ActiveUser), new BTSQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = btsUpdateHandler.Save(bts, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("bts")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var btsDeleteHandler = new BTSDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_BTS>>();

                    foreach (var id in ids)
                    {
                        result.Add(btsDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
