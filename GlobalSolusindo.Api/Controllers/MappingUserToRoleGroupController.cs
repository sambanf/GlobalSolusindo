using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class MappingUserToRoleGroupController : ApiControllerBase
    {
        public MappingUserToRoleGroupController()
        {
        }

        [Route("mappingUserToRoleGroup/{roleGroupPk}/{userPk}")]
        [HttpGet]
        public IHttpActionResult Get([FromBody]UserRoleMapPK userRoleMapPK)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery = new MappingUserToRoleGroupQuery(Db))
            {
                var data = mappingUserToRoleGroupQuery.GetByPrimaryKey(userRoleMapPK.RoleGroupPK, userRoleMapPK.UserPK);
                SaveLog("MappingUserToRoleGroup", "Get", JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK.RoleGroupPK }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/form")]
        [HttpGet]
        public IHttpActionResult GetForm([FromBody]UserRoleMapPK userRoleMapPK)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (MappingUserToRoleGroupEntryDataProvider mappingUserToRoleGroupEntryDataProvider = new MappingUserToRoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new MappingUserToRoleGroupQuery(Db)))
            {
                var data = mappingUserToRoleGroupEntryDataProvider.Get(userRoleMapPK.RoleGroupPK, userRoleMapPK.UserPK);
                SaveLog("MappingUserToRoleGroup", "GetForm", JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK.RoleGroupPK }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingUserToRoleGroupSearchFilter filter)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var mappingUserToRoleGroupSearch = new MappingUserToRoleGroupSearch(Db))
            {
                var data = mappingUserToRoleGroupSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MappingUserToRoleGroupDTO mappingUserToRoleGroup)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (mappingUserToRoleGroup == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToRoleGroupCreateHandler = new MappingUserToRoleGroupCreateHandler(Db, ActiveUser, new MappingUserToRoleGroupValidator(), new MappingUserToRoleGroupFactory(Db, ActiveUser), new MappingUserToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToRoleGroupCreateHandler.Save(mappingUserToRoleGroupDTO: mappingUserToRoleGroup, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]MappingUserToRoleGroupDTO mappingUserToRoleGroup)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (mappingUserToRoleGroup == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToRoleGroupUpdateHandler = new MappingUserToRoleGroupUpdateHandler(Db, ActiveUser, new MappingUserToRoleGroupValidator(), new MappingUserToRoleGroupFactory(Db, ActiveUser), new MappingUserToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToRoleGroupUpdateHandler.Save(mappingUserToRoleGroup, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] UserRoleMapPK keys)
        {
            if (keys == null)
                throw new KairosException("Missing parameter: 'primary keys'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var mappingUserToRoleGroupDeleteHandler = new MappingUserToRoleGroupDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result =   mappingUserToRoleGroupDeleteHandler.Execute(keys.RoleGroupPK, keys.UserPK, Base.DeleteMethod.Hard);
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }

    public class UserRoleMapPK
    {
        [JsonProperty("roleGroup_pk")]
        public int RoleGroupPK { get; set; }

        [JsonProperty("user_pk")]
        public int UserPK { get; set; }
    }
}
