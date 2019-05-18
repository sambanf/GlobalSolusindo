using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.RoleGroup;
using GlobalSolusindo.Identity.RoleGroup.DML;
using GlobalSolusindo.Identity.RoleGroup.EntryForm;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class RoleGroupController : ApiControllerBase
    {
        public RoleGroupController()
        {
        }

        [Route("roleGroup/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "RoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (RoleGroupQuery roleGroupQuery = new RoleGroupQuery(Db))
            {
                var data = roleGroupQuery.GetByPrimaryKey(id);
                SaveLog("RoleGroup", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "RoleGroup_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (RoleGroupEntryDataProvider roleGroupEntryDataProvider = new RoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new RoleGroupQuery(Db)))
            {
                var data = roleGroupEntryDataProvider.Get(id);
                SaveLog("RoleGroup", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]RoleGroupSearchFilter filter)
        {
            string accessType = "RoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var roleGroupSearch = new RoleGroupSearch(Db))
            {
                var data = roleGroupSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]RoleGroupDTO roleGroup)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (roleGroup == null)
                throw new KairosException("Missing model parameter");

            if (roleGroup.RoleGroup_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var roleGroupCreateHandler = new RoleGroupCreateHandler(Db, ActiveUser, new RoleGroupValidator(), new RoleGroupFactory(Db, ActiveUser), new RoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = roleGroupCreateHandler.Save(roleGroupDTO: roleGroup, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("roleGroup")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]RoleGroupDTO roleGroup)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (roleGroup == null)
                throw new KairosException("Missing model parameter");

            if (roleGroup.RoleGroup_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var roleGroupUpdateHandler = new RoleGroupUpdateHandler(Db, ActiveUser, new RoleGroupValidator(), new RoleGroupFactory(Db, ActiveUser), new RoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleGroupUpdateHandler.Save(roleGroup, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("roleGroup")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var roleGroupDeleteHandler = new RoleGroupDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_RoleGroup>>();

                    foreach (var id in ids)
                    {
                        result.Add(roleGroupDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
