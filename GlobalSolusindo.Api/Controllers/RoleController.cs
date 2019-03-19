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
        public RoleController()
        {
        }

        [Route("role/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Role_ViewAll";
            ThrowIfUserCannotAccess(accessType);
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
            string accessType = "Role_ViewAll";
            ThrowIfUserCannotAccess(accessType);
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
            string accessType = "Role_ViewAll";
            ThrowIfUserCannotAccess(accessType);
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
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (role == null)
                throw new KairosException("Missing model parameter");

            if (role.Role_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var roleCreateHandler = new RoleCreateHandler(Db, ActiveUser, new RoleValidator(), new RoleFactory(Db, ActiveUser), new RoleQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = roleCreateHandler.Save(roleDTO: role, dateStamp: DateTime.UtcNow);
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
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (role == null)
                throw new KairosException("Missing model parameter");

            if (role.Role_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var roleUpdateHandler = new RoleUpdateHandler(Db, ActiveUser, new RoleValidator(), new RoleFactory(Db, ActiveUser), new RoleQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleUpdateHandler.Save(role, DateTime.UtcNow);
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
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

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
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
