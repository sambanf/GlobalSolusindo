using GlobalSolusindo.Business.IssueType.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileIssueTypeController : ApiControllerBase
    {
        [Route("mobile/issueType")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IssueTypeSearchFilter filter)
        {
            string accessType = "IssueType_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var issueTypeSearch = new IssueTypeSearch(Db))
            {
                var data = issueTypeSearch.GetDataByFilter(filter);

                return Ok(data.Records);
            }
        }
    }
}
