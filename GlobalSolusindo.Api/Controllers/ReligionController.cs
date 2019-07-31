using GlobalSolusindo.Identity.Religion;
using GlobalSolusindo.Identity.Religion.Queries;
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
    public class ReligionController : ApiControllerBase
    {
        private const string createRole = "Religion_Input";
        private const string updateRole = "Religion_Edit";
        private const string readRole = "Religion_ViewAll";
        private const string deleteRole = "Religion_Delete";
        private const string importRole = "Religion_Import";

        public ReligionController()
        {
        }

        [Route("religion/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (ReligionQuery religionQuery = new ReligionQuery(Db))
            {
                var data = religionQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, "Religion_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
 

        [Route("religion/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]ReligionSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var religionQuery = new ReligionSearch(Db))
            {
                var data = religionQuery.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, "Religion_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        } 
    }
}
