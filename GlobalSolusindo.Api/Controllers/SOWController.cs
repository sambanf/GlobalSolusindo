using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOW.DML;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.InfoForm;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWTrack;
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
    public class SOWController : ApiControllerBase
    {
        public SOWController()
        {
        }

        [Route("sow/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "SOW_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (SOWQuery sowQuery = new SOWQuery(Db))
            {
                var data = sowQuery.GetByPrimaryKey(id);
                SaveLog("SOW", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "SOW_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (SOWEntryDataProvider sowEntryDataProvider = new SOWEntryDataProvider(Db, ActiveUser, AccessControl, new SOWQuery(Db)))
            {
                var data = sowEntryDataProvider.Get(id);
                SaveLog("SOW", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/info/{id}")]
        [HttpGet]
        public IHttpActionResult GetInfo(int id)
        {
            string accessType = "SOW_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (SOWInfoDataProvider sowEntryDataProvider = new SOWInfoDataProvider(Db, ActiveUser, AccessControl, new SOWQuery(Db)))
            {
                var data = sowEntryDataProvider.Get(id);
                SaveLog("SOW", "GetInfo", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]SOWSearchFilter filter)
        {
            string accessType = "SOW_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var sowQuery = new SOWQuery(Db))
            {
                var data = sowQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]SOWDTO sow)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sow == null)
                throw new KairosException("Missing model parameter");

            if (sow.SOW_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var sowCreateHandler = new SOWCreateHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowCreateHandler.Save(sowDTO: sow, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("sow")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]SOWDTO sow)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sow == null)
                throw new KairosException("Missing model parameter");

            if (sow.SOW_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var sowUpdateHandler = new SOWUpdateHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowUpdateHandler.Save(sow, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("sow/approval")]
        [HttpPut]
        public IHttpActionResult Approve([FromBody]SOWApprovalDTO sOWApproval)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sOWApproval == null)
                throw new KairosException("Missing model parameter");

            if (sOWApproval.SOW_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var sOWApprovalHandler = new SOWApprovalHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sOWApprovalHandler.Save(sOWApproval, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("sow")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var sowDeleteHandler = new SOWDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_SOW>>();

                    foreach (var id in ids)
                    {
                        result.Add(sowDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
