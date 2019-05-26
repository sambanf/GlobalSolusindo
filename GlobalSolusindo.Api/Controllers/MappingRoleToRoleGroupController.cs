using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.DML;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class MappingRoleToRoleGroupController : ApiControllerBase
    {
        public MappingRoleToRoleGroupController()
        {
        }


        [Route("mappingRoleToRoleGroup/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "MappingRoleToRoleGroup_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (MappingRoleToRoleGroupEntryDataProvider mappingRoleToRoleGroupEntryDataProvider = new MappingRoleToRoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new MappingRoleToRoleGroupQuery(Db)))
            {
                var data = mappingRoleToRoleGroupEntryDataProvider.Get(id);
                SaveLog("MappingRoleToRoleGroup", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingRoleToRoleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingRoleToRoleGroupSearchFilter filter)
        {
            string accessType = "MappingRoleToRoleGroup_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var mappingRoleToRoleGroupSearch = new MappingRoleToRoleGroupSearch(Db))
            {
                var data = mappingRoleToRoleGroupSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }
  
        [Route("mappingRoleToRoleGroup")]
        [HttpPost]
        public IHttpActionResult CreateRange([FromBody]RoleMapping roleMapping)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            if (roleMapping.RoleGroup_PK == 0)
                throw new KairosException("Role group primary key is 0, it's not allowed.");

            using (var roleMappingCreateHandler = new RoleMappingCreateHandler(Db, ActiveUser, new MappingRoleToRoleGroupValidator(), new MappingRoleToRoleGroupFactory(Db, ActiveUser), new MappingRoleToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = roleMappingCreateHandler.Save(roleMapping: roleMapping, dateStamp: DateTime.Now);
                    transaction.Complete();
                    return Ok(new SuccessResponse(saveResult, "SUCCESS"));
                }
            }
        }

        [Route("mappingRoleToRoleGroup")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var mappingRoleToRoleGroupDeleteHandler = new MappingRoleToRoleGroupDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_MappingRoleToRoleGroup>>();

                    foreach (var id in ids)
                    {
                        result.Add(mappingRoleToRoleGroupDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }

                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
