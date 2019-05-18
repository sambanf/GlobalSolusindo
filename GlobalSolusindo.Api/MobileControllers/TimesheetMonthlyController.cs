using GlobalSolusindo.Business.TimesheetMonthly.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileTimesheetMonthlyController : ApiControllerBase
    {
        [Route("mobile/timesheetMonthly")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TimesheetMonthlySearchFilter filter)
        {
            string accessType = "TimesheetMonthly_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var timesheetMonthlySearch = new TimesheetMonthlySearch(Db))
            {
                var data = timesheetMonthlySearch.GetDataByFilterV2(filter);

                return Ok(data.Records);
            }
        }
    }
}
