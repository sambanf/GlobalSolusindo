using GlobalSolusindo.Business.Activities.Queries;
using GlobalSolusindo.Business.DailyTask.Queries;
using GlobalSolusindo.Business.TaskEngineer.Queries;
using GlobalSolusindo.Business.TaskEngineerDetail;
using GlobalSolusindo.Business.TimesheetDetail.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class ReportController : ApiControllerBase
    {
        private const string createRole = "Report_Input";
        private const string updateRole = "Report_Edit";
        private const string readRole = "Report_ViewAll";
        private const string deleteRole = "Report_Delete";
        private const string importRole = "Report_Import";

        public ReportController()
        {
        }

        [Route("report/timesheetDetail")]
        [HttpGet]
        public IHttpActionResult SearchTimesheetDetail([FromUri]TimesheetDetailSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
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
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var activitiesSearch = new ActivitiesSearch(Db))
            {
                var data = activitiesSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("taskEngineer/search")]
        [HttpGet]
        public IHttpActionResult SearchTaskEngineer([FromUri]TaskEngineerSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var taskEngineerSearch = new TaskEngineerSearch(Db))
            {
                var data = taskEngineerSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("taskEngineerDetail/{sowAssign_fk}")]
        [HttpGet]
        public IHttpActionResult TaskEngineerDetail(int sowAssign_fk)
        {
            ThrowIfUserHasNoRole(readRole);
            using (var taskEngineerDetailDataProvider = new TaskEngineerDetailDataProvider(Db, ActiveUser, AccessControl))
            {
                var data = taskEngineerDetailDataProvider.Get(sowAssign_fk);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("dailyTask/search")]
        [HttpGet]
        public IHttpActionResult SearchDailyTask([FromUri]DailyTaskSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var dailyTaskSearch = new DailyTaskSearch(Db))
            {
                var data = dailyTaskSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }
    }
}
