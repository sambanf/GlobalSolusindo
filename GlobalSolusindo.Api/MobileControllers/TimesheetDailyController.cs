using GlobalSolusindo.Business.TimesheetDaily.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileTimesheetDailyController : ApiControllerBase
    {
        [Route("mobile/timesheetDaily")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TimesheetDailySearchFilter filter)
        {
            string accessType = "TimesheetDaily_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var timesheetDailySearch = new TimesheetDailySearch(Db))
            {
                var data = timesheetDailySearch.GetDataByFilter(filter);

                return Ok(data.Records);
            }
        }
    }
}
