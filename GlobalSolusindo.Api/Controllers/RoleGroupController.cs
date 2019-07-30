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
        private const string createRole = "RoleGroup_Input";
        private const string updateRole = "RoleGroup_Edit";
        private const string readRole = "RoleGroup_ViewAll";
        private const string deleteRole = "RoleGroup_Delete";
        private const string importRole = "RoleGroup_Import";
        public RoleGroupController()
        {
        }

        [Route("roleGroup/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        { 
            ThrowIfUserHasNoRole(readRole);
            using (RoleGroupQuery roleGroupQuery = new RoleGroupQuery(Db))
            {
                var data = roleGroupQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        { 
            if (id > 0) ThrowIfUserHasNoRole(readRole);
            using (RoleGroupEntryDataProvider roleGroupEntryDataProvider = new RoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new RoleGroupQuery(Db)))
            {
                var data = roleGroupEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]RoleGroupSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var roleGroupSearch = new RoleGroupSearch(Db))
            {
                var data = roleGroupSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("roleGroup")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]RoleGroupDTO roleGroup)
        {
            ThrowIfUserHasNoRole(createRole);
            if (roleGroup == null)
                throw new KairosException("Missing model parameter");

            if (roleGroup.RoleGroup_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var roleGroupCreateHandler = new RoleGroupCreateHandler(Db, ActiveUser, new RoleGroupValidator(), new RoleGroupFactory(Db, ActiveUser), new RoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = roleGroupCreateHandler.Save(roleGroupDTO: roleGroup, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(roleGroup), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(roleGroup), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("roleGroup")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]RoleGroupDTO roleGroup)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (roleGroup == null)
                throw new KairosException("Missing model parameter");

            if (roleGroup.RoleGroup_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            RoleGroupQuery roleGroupQuery = new RoleGroupQuery();
            RoleGroupDTO valueOld = new RoleGroupDTO();
            valueOld = roleGroupQuery.GetByPrimaryKey(roleGroup.RoleGroup_PK);

            using (var roleGroupUpdateHandler = new RoleGroupUpdateHandler(Db, ActiveUser, new RoleGroupValidator(), new RoleGroupFactory(Db, ActiveUser), new RoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleGroupUpdateHandler.Save(roleGroup, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(roleGroup), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {

                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(roleGroup), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("roleGroup")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

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
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}