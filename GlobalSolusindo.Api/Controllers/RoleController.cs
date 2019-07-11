using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Role;
using GlobalSolusindo.Identity.Role.DML;
using GlobalSolusindo.Identity.Role.EntryForm;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class RoleController : ApiControllerBase
    {
        private const string createRole = "Role_Input";
        private const string updateRole = "Role_Edit";
        private const string readRole = "Role_ViewAll";
        private const string deleteRole = "Role_Delete";
        private const string importRole = "Role_Import";

        public RoleController()
        {
        }

        [Route("role/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (RoleQuery roleQuery = new RoleQuery(Db))
            {
                var data = roleQuery.GetByPrimaryKey(id);
                SaveLog("Role", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("role/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (RoleEntryDataProvider roleEntryDataProvider = new RoleEntryDataProvider(Db, ActiveUser, AccessControl, new RoleQuery(Db)))
            {
                var data = roleEntryDataProvider.Get(id);
                SaveLog("Role", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("role/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]RoleSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var roleSearch = new RoleSearch(Db))
            {
                var data = roleSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("role")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]RoleDTO role)
        {
            ThrowIfUserHasNoRole(createRole);
            if (role == null)
                throw new KairosException("Missing model parameter");

            if (role.Role_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var roleCreateHandler = new RoleCreateHandler(Db, ActiveUser, new RoleValidator(), new RoleFactory(Db, ActiveUser), new RoleQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleCreateHandler.Save(roleDTO: role, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("role")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]RoleDTO role)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (role == null)
                throw new KairosException("Missing model parameter");

            if (role.Role_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var roleUpdateHandler = new RoleUpdateHandler(Db, ActiveUser, new RoleValidator(), new RoleFactory(Db, ActiveUser), new RoleQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleUpdateHandler.Save(role, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("role")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var roleDeleteHandler = new RoleDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Role>>();

                    foreach (var id in ids)
                    {
                        result.Add(roleDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
