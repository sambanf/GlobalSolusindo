using GlobalSolusindo.Business.TaskList.Queries;
using Kairos;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class TaskListController : ApiControllerBase
    {
        public TaskListController()
        {
        }

        [Route("mobile/taskList")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TaskListSearchFilter filter)
        {
            string accessType = "TaskList_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var taskListSearch = new TaskListSearch(Db))
            {
                var data = taskListSearch.GetDataWithSPByFilter(filter);
                return Ok(data.Records);
            }
        } 
    }
}
