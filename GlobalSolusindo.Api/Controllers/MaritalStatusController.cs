using GlobalSolusindo.Identity.MaritalStatus;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class MaritalStatusController : ApiControllerBase
    {
        private const string createRole = "MaritalStatus_Input";
        private const string updateRole = "MaritalStatus_Edit";
        private const string readRole = "MaritalStatus_ViewAll";
        private const string deleteRole = "MaritalStatus_Delete";
        private const string importRole = "MaritalStatus_Import";

        public MaritalStatusController()
        {
        }

        [Route("maritalStatus/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (MaritalStatusQuery maritalStatusQuery = new MaritalStatusQuery(Db))
            {
                var data = maritalStatusQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, "MaritalStatus_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
 

        [Route("maritalStatus/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MaritalStatusSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var maritalStatusQuery = new MaritalStatusSearch(Db))
            {
                var data = maritalStatusQuery.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, "MaritalStatus_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        } 
    }
}
