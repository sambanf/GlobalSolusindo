using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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
        public IHttpActionResult Get(int roleGroupPk, int userPk)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery = new MappingUserToRoleGroupQuery(Db))
            {
                var data = mappingUserToRoleGroupQuery.GetByPrimaryKey(roleGroupPk, userPk);
                SaveLog("MappingUserToRoleGroup", "Get", JsonConvert.SerializeObject(new { primaryKey = roleGroupPk }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/form/{roleGroupPk}/{userPk}")]
        [HttpGet]
        public IHttpActionResult GetForm(int roleGroupPk, int userPk)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (MappingUserToRoleGroupEntryDataProvider mappingUserToRoleGroupEntryDataProvider = new MappingUserToRoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new MappingUserToRoleGroupQuery(Db)))
            {
                var data = mappingUserToRoleGroupEntryDataProvider.Get(roleGroupPk, userPk);
                SaveLog("MappingUserToRoleGroup", "GetForm", JsonConvert.SerializeObject(new { primaryKey = roleGroupPk }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingUserToRoleGroupSearchFilter filter)
        {
            string accessType = "MappingUserToRoleGroup_ViewAll";
            ThrowIfUserCannotAccess(accessType);
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
            ThrowIfUserCannotAccess(accessType);
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
            ThrowIfUserCannotAccess(accessType);
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
            ThrowIfUserCannotAccess(accessType);

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
        [JsonProperty("roleGroupPK")]
        public int RoleGroupPK { get; set; }

        [JsonProperty("roleGroupPK")]
        public int UserPK { get; set; }
    }
}
