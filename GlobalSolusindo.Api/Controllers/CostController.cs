using GlobalSolusindo.Business.Cost;
using GlobalSolusindo.Business.Cost.DML;
using GlobalSolusindo.Business.Cost.EntryForm;
using GlobalSolusindo.Business.Cost.Queries;
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
    public class CostController : ApiControllerBase
    {
        public CostController()
        {
        }

        [Route("cost/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Cost_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (CostQuery costQuery = new CostQuery(Db))
            {
                var data = costQuery.GetByPrimaryKey(id);
                SaveLog("Cost", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Cost_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (CostEntryDataProvider costEntryDataProvider = new CostEntryDataProvider(Db, ActiveUser, AccessControl, new CostQuery(Db)))
            {
                var data = costEntryDataProvider.Get(id);
                SaveLog("Cost", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CostSearchFilter filter)
        {
            string accessType = "Cost_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var costSearch = new CostSearch(Db))
            {
                var data = costSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CostDTO cost)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (cost == null)
                throw new KairosException("Missing model parameter");

            if (cost.Cost_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var costCreateHandler = new CostCreateHandler(Db, ActiveUser, new CostValidator(), new CostFactory(Db, ActiveUser), new CostQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = costCreateHandler.Save(costDTO: cost, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("cost")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CostDTO cost)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (cost == null)
                throw new KairosException("Missing model parameter");

            if (cost.Cost_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var costUpdateHandler = new CostUpdateHandler(Db, ActiveUser, new CostValidator(), new CostFactory(Db, ActiveUser), new CostQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = costUpdateHandler.Save(cost, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("cost")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var costDeleteHandler = new CostDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_Cost>>();

                    foreach (var id in ids)
                    {
                        result.Add(costDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
