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
        private const string createRole = "Cost_Input";
        private const string updateRole = "Cost_Edit";
        private const string readRole = "Cost_ViewAll";
        private const string deleteRole = "Cost_Delete";
        private const string importRole = "Cost_Import";

        public CostController()
        {
        }

        [Route("cost/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (CostQuery costQuery = new CostQuery(Db))
            {
                var data = costQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (CostEntryDataProvider costEntryDataProvider = new CostEntryDataProvider(Db, ActiveUser, AccessControl, new CostQuery(Db)))
            {
                var data = costEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CostSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var costSearch = new CostSearch(Db))
            {
                var data = costSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cost")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CostDTO cost)
        {
            ThrowIfUserHasNoRole(createRole);
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
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(cost), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(cost), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("cost")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CostDTO cost)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (cost == null)
                throw new KairosException("Missing model parameter");

            if (cost.Cost_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            CostQuery costQuery = new CostQuery();
            CostDTO valueOld = new CostDTO();
            valueOld = costQuery.GetByPrimaryKey(cost.Cost_PK);

            using (var costUpdateHandler = new CostUpdateHandler(Db, ActiveUser, new CostValidator(), new CostFactory(Db, ActiveUser), new CostQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = costUpdateHandler.Save(cost, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(cost), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(cost), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("cost")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

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
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}