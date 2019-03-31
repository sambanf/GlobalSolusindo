using GlobalSolusindo.Business.Activities.Queries;
using GlobalSolusindo.Business.TimesheetDetail.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class ReportController : ApiControllerBase
    {
        public ReportController()
        {
        }
 
        [Route("report/timesheetDetail")]
        [HttpGet]
        public IHttpActionResult SearchTimesheetDetail([FromUri]TimesheetDetailSearchFilter filter)
        {
            string accessType = "Report_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var timesheetDetailSearch = new TimesheetDetailSearch(Db))
            {
                var data = timesheetDetailSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("report/activities")]
        [HttpGet]
        public IHttpActionResult SearchActivities([FromUri]ActivitiesSearchFilter filter)
        {
            string accessType = "Report_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var activitiesSearch = new ActivitiesSearch(Db))
            {
                var data = activitiesSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }
    }
}
