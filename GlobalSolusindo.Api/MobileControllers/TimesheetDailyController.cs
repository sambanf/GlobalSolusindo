using GlobalSolusindo.Business.TimesheetDaily.Queries;
using Kairos;
using Newtonsoft.Json;
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
                SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(data.Records);
            }
        }
    }
}
