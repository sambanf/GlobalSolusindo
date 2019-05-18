using GlobalSolusindo.Business.IssueType;
using GlobalSolusindo.Business.IssueType.DML;
using GlobalSolusindo.Business.IssueType.EntryForm;
using GlobalSolusindo.Business.IssueType.Queries;
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
    public class IssueTypeController : ApiControllerBase
    {
        public IssueTypeController()
        {
        }

        [Route("issueType/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "IssueType_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (IssueTypeQuery issueTypeQuery = new IssueTypeQuery(Db))
            {
                var data = issueTypeQuery.GetByPrimaryKey(id);
                SaveLog("IssueType", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("issueType/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "IssueType_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (IssueTypeEntryDataProvider issueTypeEntryDataProvider = new IssueTypeEntryDataProvider(Db, ActiveUser, AccessControl, new IssueTypeQuery(Db)))
            {
                var data = issueTypeEntryDataProvider.Get(id);
                SaveLog("IssueType", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("issueType/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IssueTypeSearchFilter filter)
        {
            string accessType = "IssueType_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var issueTypeSearch = new IssueTypeSearch(Db))
            {
                var data = issueTypeSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("issueType")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]IssueTypeDTO issueType)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (issueType == null)
                throw new KairosException("Missing model parameter");

            if (issueType.IssueType_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var issueTypeCreateHandler = new IssueTypeCreateHandler(Db, ActiveUser, new IssueTypeValidator(), new IssueTypeFactory(Db, ActiveUser), new IssueTypeQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = issueTypeCreateHandler.Save(issueTypeDTO: issueType, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("issueType")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]IssueTypeDTO issueType)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (issueType == null)
                throw new KairosException("Missing model parameter");

            if (issueType.IssueType_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var issueTypeUpdateHandler = new IssueTypeUpdateHandler(Db, ActiveUser, new IssueTypeValidator(), new IssueTypeFactory(Db, ActiveUser), new IssueTypeQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = issueTypeUpdateHandler.Save(issueType, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("issueType")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var issueTypeDeleteHandler = new IssueTypeDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_IssueType>>();

                    foreach (var id in ids)
                    {
                        result.Add(issueTypeDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
