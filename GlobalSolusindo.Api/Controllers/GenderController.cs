using GlobalSolusindo.Identity.Gender;
using GlobalSolusindo.Identity.Gender.Queries;
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
    public class GenderController : ApiControllerBase
    {
        private const string createRole = "Gender_Input";
        private const string updateRole = "Gender_Edit";
        private const string readRole = "Gender_ViewAll";
        private const string deleteRole = "Gender_Delete";
        private const string importRole = "Gender_Import";

        public GenderController()
        {
        }

        [Route("gender/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (GenderQuery genderQuery = new GenderQuery(Db))
            {
                var data = genderQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, "Gender_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
 

        [Route("gender/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]GenderSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var genderQuery = new GenderSearch(Db))
            {
                var data = genderQuery.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, "Gender_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        } 
    }
}
