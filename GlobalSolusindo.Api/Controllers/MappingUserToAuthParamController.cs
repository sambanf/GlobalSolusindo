using GlobalSolusindo.Identity.MappingUserToAuthParam;
using GlobalSolusindo.Identity.MappingUserToAuthParam.DML;
using GlobalSolusindo.Identity.MappingUserToAuthParam.EntryForm;
using GlobalSolusindo.Identity.MappingUserToAuthParam.Queries;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class MappingUserToAuthParamController : ApiControllerBase
    {
        private const string createRole = "MappingUserToAuthParam_Input";
        private const string updateRole = "MappingUserToAuthParam_Edit";
        private const string readRole = "MappingUserToAuthParam_ViewAll";
        private const string deleteRole = "MappingUserToAuthParam_Delete";
        private const string importRole = "MappingUserToAuthParam_Import";

        public MappingUserToAuthParamController()
        {
        }

        [Route("mappingUserToAuthParam/{authParamPk}/{userPk}")]
        [HttpGet]
        public IHttpActionResult Get([FromBody]UserAuthParamMapPK userRoleMapPK)
        {
            ThrowIfUserHasNoRole(readRole);
            using (MappingUserToAuthParamQuery mappingUserToAuthParamQuery = new MappingUserToAuthParamQuery(Db))
            {
                var data = mappingUserToAuthParamQuery.GetByPrimaryKey(userRoleMapPK.AuthParamPK, userRoleMapPK.UserPK);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(userRoleMapPK), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToAuthParam/form")]
        [HttpGet]
        public IHttpActionResult GetForm([FromBody]UserAuthParamMapPK userRoleMapPK)
        {
            //string accessType = "MappingUserToAuthParam_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            using (MappingUserToAuthParamEntryDataProvider mappingUserToAuthParamEntryDataProvider = new MappingUserToAuthParamEntryDataProvider(Db, ActiveUser, AccessControl, new MappingUserToAuthParamQuery(Db)))
            {
                var data = mappingUserToAuthParamEntryDataProvider.Get(userRoleMapPK.AuthParamPK, userRoleMapPK.UserPK);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(userRoleMapPK), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToAuthParam/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingUserToAuthParamSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var mappingUserToAuthParamSearch = new MappingUserToAuthParamSearch(Db))
            {
                var data = mappingUserToAuthParamSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MappingUserToAuthParamDTO mappingUserToAuthParam)
        {
            ThrowIfUserHasNoRole(createRole);
            if (mappingUserToAuthParam == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToAuthParamCreateHandler = new MappingUserToAuthParamCreateHandler(Db, ActiveUser, new MappingUserToAuthParamValidator(), new MappingUserToAuthParamFactory(Db, ActiveUser), new MappingUserToAuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToAuthParamCreateHandler.Save(mappingUserToAuthParamDTO: mappingUserToAuthParam, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(mappingUserToAuthParam), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(mappingUserToAuthParam), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]MappingUserToAuthParamDTO mappingUserToAuthParam)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (mappingUserToAuthParam == null)
                throw new KairosException("Missing model parameter");

            //MappingUserToAuthParamQuery mappingUserToAuthParamQuery = new MappingUserToAuthParamQuery();
            //MappingUserToAuthParamDTO valueOld = new MappingUserToAuthParamDTO();
            //valueOld = mappingUserToAuthParamQuery.GetByPrimaryKey(mappingUserToAuthParam.AuthParam_PK, mappingUserToAuthParam.User_PK);

            using (var mappingUserToAuthParamUpdateHandler = new MappingUserToAuthParamUpdateHandler(Db, ActiveUser, new MappingUserToAuthParamValidator(), new MappingUserToAuthParamFactory(Db, ActiveUser), new MappingUserToAuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToAuthParamUpdateHandler.Save(mappingUserToAuthParam, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(mappingUserToAuthParam), "Error", saveResult.Message, "", "");
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(mappingUserToAuthParam), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] UserAuthParamMapPK keys)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (keys == null)
                throw new KairosException("Missing parameter: 'primary keys'");

            using (var mappingUserToAuthParamDeleteHandler = new MappingUserToAuthParamDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result =   mappingUserToAuthParamDeleteHandler.Execute(keys.AuthParamPK, keys.UserPK, Base.DeleteMethod.Hard);
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(keys), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, "Data deleted."));
                }
            }
        }
    }

    public class UserAuthParamMapPK
    {
        [JsonProperty("authParam_pk")]
        public int AuthParamPK { get; set; }

        [JsonProperty("user_pk")]
        public int UserPK { get; set; }
    }
}