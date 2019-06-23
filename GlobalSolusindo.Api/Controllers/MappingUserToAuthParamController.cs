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
        public MappingUserToAuthParamController()
        {
        }

        [Route("mappingUserToAuthParam/{authParamPk}/{userPk}")]
        [HttpGet]
        public IHttpActionResult Get([FromBody]UserAuthParamMapPK userRoleMapPK)
        {
            string accessType = "MappingUserToAuthParam_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (MappingUserToAuthParamQuery mappingUserToAuthParamQuery = new MappingUserToAuthParamQuery(Db))
            {
                var data = mappingUserToAuthParamQuery.GetByPrimaryKey(userRoleMapPK.AuthParamPK, userRoleMapPK.UserPK);
                SaveLog("MappingUserToAuthParam", "Get", JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK.AuthParamPK }));
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
                SaveLog("MappingUserToAuthParam", "GetForm", JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK.AuthParamPK }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToAuthParam/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingUserToAuthParamSearchFilter filter)
        {
            string accessType = "MappingUserToAuthParam_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var mappingUserToAuthParamSearch = new MappingUserToAuthParamSearch(Db))
            {
                var data = mappingUserToAuthParamSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MappingUserToAuthParamDTO mappingUserToAuthParam)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (mappingUserToAuthParam == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToAuthParamCreateHandler = new MappingUserToAuthParamCreateHandler(Db, ActiveUser, new MappingUserToAuthParamValidator(), new MappingUserToAuthParamFactory(Db, ActiveUser), new MappingUserToAuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToAuthParamCreateHandler.Save(mappingUserToAuthParamDTO: mappingUserToAuthParam, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]MappingUserToAuthParamDTO mappingUserToAuthParam)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (mappingUserToAuthParam == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToAuthParamUpdateHandler = new MappingUserToAuthParamUpdateHandler(Db, ActiveUser, new MappingUserToAuthParamValidator(), new MappingUserToAuthParamFactory(Db, ActiveUser), new MappingUserToAuthParamQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToAuthParamUpdateHandler.Save(mappingUserToAuthParam, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("mappingUserToAuthParam")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] UserAuthParamMapPK keys)
        {
            if (keys == null)
                throw new KairosException("Missing parameter: 'primary keys'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var mappingUserToAuthParamDeleteHandler = new MappingUserToAuthParamDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result =   mappingUserToAuthParamDeleteHandler.Execute(keys.AuthParamPK, keys.UserPK, Base.DeleteMethod.Hard);
                    transaction.Complete();
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
