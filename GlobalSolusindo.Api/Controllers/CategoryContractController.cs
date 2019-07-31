using GlobalSolusindo.Identity.CategoryContract;
using GlobalSolusindo.Identity.CategoryContract.Queries;
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
    public class CategoryContractController : ApiControllerBase
    {
        private const string createRole = "CategoryContract_Input";
        private const string updateRole = "CategoryContract_Edit";
        private const string readRole = "CategoryContract_ViewAll";
        private const string deleteRole = "CategoryContract_Delete";
        private const string importRole = "CategoryContract_Import";

        public CategoryContractController()
        {
        }

        [Route("categoryContract/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (CategoryContractQuery categoryContractQuery = new CategoryContractQuery(Db))
            {
                var data = categoryContractQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, "CategoryContract_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
 

        [Route("categoryContract/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CategoryContractSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var categoryContractQuery = new CategoryContractSearch(Db))
            {
                var data = categoryContractQuery.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, "CategoryContract_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        } 
    }
}
