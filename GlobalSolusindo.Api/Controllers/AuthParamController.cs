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
        private const string createRole = "AuthParam_Input";
        private const string updateRole = "AuthParam_Edit";
        private const string readRole = "AuthParam_ViewAll";
        private const string deleteRole = "AuthParam_Delete";
        private const string importRole = "AuthParam_Import";
        public AuthParamController()
        {
        }

        [Route("authParam/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (AuthParamQuery authParamQuery = new AuthParamQuery(Db))
            {
                var data = authParamQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (AuthParamEntryDataProvider authParamEntryDataProvider = new AuthParamEntryDataProvider(Db, ActiveUser, AccessControl, new AuthParamQuery(Db)))
            {
                var data = authParamEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AuthParamSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var authParamSearch = new AuthParamSearch(Db))
            {
                var data = authParamSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("authParam")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AuthParamDTO authParam)
        {
            ThrowIfUserHasNoRole(createRole);
            if (authParam == null)
                throw new KairosException("Missing model parameter");

            if (authParam.AuthParam_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var authParamCreateHandler = new AuthParamCreateHandler(Db, ActiveUser, new AuthParamValidator(), new AuthParamFactory(Db, ActiveUser), new AuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = authParamCreateHandler.Save(authParamDTO: authParam, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(authParam), "Success", "","", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(authParam), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("authParam")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AuthParamDTO authParam)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (authParam == null)
                throw new KairosException("Missing model parameter");

            if (authParam.AuthParam_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            AuthParamQuery authParamQuery = new AuthParamQuery();
            AuthParamDTO valueOld = new AuthParamDTO();
            valueOld = authParamQuery.GetByPrimaryKey(authParam.AuthParam_PK);

            using (var authParamUpdateHandler = new AuthParamUpdateHandler(Db, ActiveUser, new AuthParamValidator(), new AuthParamFactory(Db, ActiveUser), new AuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = authParamUpdateHandler.Save(authParam, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(authParam), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(authParam), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("authParam")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

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
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }

            }
        }
    }
}
