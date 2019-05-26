using GlobalSolusindo.Business.SOWTrackResult;
using GlobalSolusindo.Business.SOWTrackResult.EntryForm;
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
    public class SOWTrackResultController : ApiControllerBase
    {
        public SOWTrackResultController()
        {
        }

        [Route("sowTrackResult/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "SOWTrackResult_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (SOWTrackResultQuery sowTrackResultQuery = new SOWTrackResultQuery(Db))
            {
                var data = sowTrackResultQuery.GetByPrimaryKey(id);
                SaveLog("SOWTrackResult", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sowTrackResult/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "SOWTrackResult_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (SOWTrackResultEntryDataProvider sowTrackResultEntryDataProvider = new SOWTrackResultEntryDataProvider(Db, ActiveUser, AccessControl, new SOWTrackResultQuery(Db)))
            {
                var data = sowTrackResultEntryDataProvider.Get(id);
                SaveLog("SOWTrackResult", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sowTrackResult/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]SOWTrackResultSearchFilter filter)
        {
            string accessType = "SOWTrackResult_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var sowTrackResultQuery = new SOWTrackResultQuery(Db))
            {
                var data = sowTrackResultQuery.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sowTrackResult")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]SOWTrackResultDTO sowTrackResult)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowTrackResult == null)
                throw new KairosException("Missing model parameter");

            if (sowTrackResult.SOWTrackResult_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var sowTrackResultCreateHandler = new SOWTrackResultCreateHandler(Db, ActiveUser, new SOWTrackResultValidator(), new SOWTrackResultFactory(Db, ActiveUser), new SOWTrackResultQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowTrackResultCreateHandler.Save(sowTrackResultDTO: sowTrackResult, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("sowTrackResult")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]SOWTrackResultDTO sowTrackResult)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowTrackResult == null)
                throw new KairosException("Missing model parameter");

            if (sowTrackResult.SOWTrackResult_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var sowTrackResultUpdateHandler = new SOWTrackResultUpdateHandler(Db, ActiveUser, new SOWTrackResultValidator(), new SOWTrackResultFactory(Db, ActiveUser), new SOWTrackResultQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowTrackResultUpdateHandler.Save(sowTrackResult, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("sowTrackResult")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var sowTrackResultDeleteHandler = new SOWTrackResultDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_SOWTrackResult>>();

                    foreach (var id in ids)
                    {
                        result.Add(sowTrackResultDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
