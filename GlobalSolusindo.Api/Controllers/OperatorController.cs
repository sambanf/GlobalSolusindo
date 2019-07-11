using GlobalSolusindo.Business.Operator;
using GlobalSolusindo.Business.Operator.DML;
using GlobalSolusindo.Business.Operator.EntryForm;
using GlobalSolusindo.Business.Operator.Queries;
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
    public class OperatorController : ApiControllerBase
    {
        private const string createRole = "BTS_Input";
        private const string updateRole = "BTS_Edit";
        private const string readRole = "BTS_ViewAll";
        private const string deleteRole = "BTS_Delete";
        private const string importRole = "BTS_Import";

        public OperatorController()
        {
        }

        [Route("operator/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Operator_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (OperatorQuery _operatorQuery = new OperatorQuery(Db))
            {
                var data = _operatorQuery.GetByPrimaryKey(id);
                SaveLog("Operator", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("operator/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Operator_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (OperatorEntryDataProvider _operatorEntryDataProvider = new OperatorEntryDataProvider(Db, ActiveUser, AccessControl, new OperatorQuery(Db)))
            {
                var data = _operatorEntryDataProvider.Get(id);
                SaveLog("Operator", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("operator/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]OperatorSearchFilter filter)
        {
            string accessType = "Operator_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var _operatorSearch = new OperatorSearch(Db))
            {
                var data = _operatorSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("operator")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]OperatorDTO _operator)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (_operator == null)
                throw new KairosException("Missing model parameter");

            if (_operator.Operator_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var _operatorCreateHandler = new OperatorCreateHandler(Db, ActiveUser, new OperatorValidator(), new OperatorFactory(Db, ActiveUser), new OperatorQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = _operatorCreateHandler.Save(_operatorDTO: _operator, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("operator")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]OperatorDTO _operator)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (_operator == null)
                throw new KairosException("Missing model parameter");

            if (_operator.Operator_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var _operatorUpdateHandler = new OperatorUpdateHandler(Db, ActiveUser, new OperatorValidator(), new OperatorFactory(Db, ActiveUser), new OperatorQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = _operatorUpdateHandler.Save(_operator, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("operator")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var _operatorDeleteHandler = new OperatorDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Operator>>();

                    foreach (var id in ids)
                    {
                        result.Add(_operatorDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
