using GlobalSolusindo.Business.Project;
using GlobalSolusindo.Business.Project.DML;
using GlobalSolusindo.Business.Project.EntryForm;
using GlobalSolusindo.Business.Project.Queries;
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
    public class ProjectController : ApiControllerBase
    {
        public ProjectController()
        {
        }

        [Route("project/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Project_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (ProjectQuery projectQuery = new ProjectQuery(Db))
            {
                var data = projectQuery.GetByPrimaryKey(id);
                SaveLog("Project", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("project/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Project_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (ProjectEntryDataProvider projectEntryDataProvider = new ProjectEntryDataProvider(Db, ActiveUser, AccessControl, new ProjectQuery(Db)))
            {
                var data = projectEntryDataProvider.Get(id);
                SaveLog("Project", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("project/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]ProjectSearchFilter filter)
        {
            string accessType = "Project_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var projectSearch = new ProjectSearch(Db))
            {
                var data = projectSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("project")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]ProjectDTO project)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (project == null)
                throw new KairosException("Missing model parameter");

            if (project.Project_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var projectCreateHandler = new ProjectCreateHandler(Db, ActiveUser, new ProjectValidator(), new ProjectFactory(Db, ActiveUser), new ProjectQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = projectCreateHandler.Save(projectDTO: project, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("project")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]ProjectDTO project)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (project == null)
                throw new KairosException("Missing model parameter");

            if (project.Project_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var projectUpdateHandler = new ProjectUpdateHandler(Db, ActiveUser, new ProjectValidator(), new ProjectFactory(Db, ActiveUser), new ProjectQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = projectUpdateHandler.Save(project, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("project")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var projectDeleteHandler = new ProjectDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Project>>();

                    foreach (var id in ids)
                    {
                        result.Add(projectDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
