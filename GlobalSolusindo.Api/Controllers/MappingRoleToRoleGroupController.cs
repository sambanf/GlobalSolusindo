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
            ThrowIfUserCannotAccess(accessType);
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
            ThrowIfUserCannotAccess(accessType);
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
        public IHttpActionResult Create([FromBody]MappingRoleToRoleGroupDTO mappingRoleToRoleGroup)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (mappingRoleToRoleGroup == null)
                throw new KairosException("Missing model parameter");

            if (mappingRoleToRoleGroup.RoleGroup_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var mappingRoleToRoleGroupCreateHandler = new MappingRoleToRoleGroupCreateHandler(Db, ActiveUser, new MappingRoleToRoleGroupValidator(), new MappingRoleToRoleGroupFactory(Db, ActiveUser), new MappingRoleToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = mappingRoleToRoleGroupCreateHandler.Save(mappingRoleToRoleGroupDTO: mappingRoleToRoleGroup, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("mappingRoleToRoleGroup/bulk")]
        [HttpPost]
        public IHttpActionResult CreateRange([FromBody]List<MappingRoleToRoleGroupDTO> mappingRoleToRoleGroups)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (mappingRoleToRoleGroups == null || mappingRoleToRoleGroups.Count == 0)
                throw new KairosException("Missing model parameter");

            if (mappingRoleToRoleGroups[0].RoleGroup_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");

            using (var mappingRoleToRoleGroupCreateHandler = new MappingRoleToRoleGroupCreateHandler(Db, ActiveUser, new MappingRoleToRoleGroupValidator(), new MappingRoleToRoleGroupFactory(Db, ActiveUser), new MappingRoleToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingRoleToRoleGroupCreateHandler.SaveRange(mappingRoleToRoleGroupDTOs: mappingRoleToRoleGroups, dateStamp: DateTime.UtcNow);
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
            ThrowIfUserCannotAccess(accessType);

            using (var mappingRoleToRoleGroupDeleteHandler = new MappingRoleToRoleGroupDeleteHandler(Db, ActiveUser))
            {
                var result = new List<DeleteResult<tblM_MappingRoleToRoleGroup>>();

                foreach (var id in ids)
                {
                    result.Add(mappingRoleToRoleGroupDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                }

                return Ok(new SuccessResponse(result));
            }
        }
    }
}
