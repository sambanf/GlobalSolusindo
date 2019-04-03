using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.AuthParam;
using GlobalSolusindo.Identity.AuthParam.DML;
using GlobalSolusindo.Identity.AuthParam.EntryForm;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class AuthParamController : ApiControllerBase
    {
        public AuthParamController()
        {
        }

        [Route("authParam/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "AuthParam_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (AuthParamQuery authParamQuery = new AuthParamQuery(Db))
            {
                var data = authParamQuery.GetByPrimaryKey(id);
                SaveLog("AuthParam", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "AuthParam_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (AuthParamEntryDataProvider authParamEntryDataProvider = new AuthParamEntryDataProvider(Db, ActiveUser, AccessControl, new AuthParamQuery(Db)))
            {
                var data = authParamEntryDataProvider.Get(id);
                SaveLog("AuthParam", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AuthParamSearchFilter filter)
        {
            string accessType = "AuthParam_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var authParamSearch = new AuthParamSearch(Db))
            {
                var data = authParamSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AuthParamDTO authParam)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (authParam == null)
                throw new KairosException("Missing model parameter");

            if (authParam.AuthParam_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var authParamCreateHandler = new AuthParamCreateHandler(Db, ActiveUser, new AuthParamValidator(), new AuthParamFactory(Db, ActiveUser), new AuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = authParamCreateHandler.Save(authParamDTO: authParam, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("authParam")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AuthParamDTO authParam)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (authParam == null)
                throw new KairosException("Missing model parameter");

            if (authParam.AuthParam_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var authParamUpdateHandler = new AuthParamUpdateHandler(Db, ActiveUser, new AuthParamValidator(), new AuthParamFactory(Db, ActiveUser), new AuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = authParamUpdateHandler.Save(authParam, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("authParam")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var authParamDeleteHandler = new AuthParamDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_AuthParam>>();

                    foreach (var id in ids)
                    {
                        result.Add(authParamDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete(); 
                    return Ok(new SuccessResponse(result));
                }

            }
        }
    }
}
