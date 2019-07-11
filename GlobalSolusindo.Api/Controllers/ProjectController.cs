using GlobalSolusindo.Business.Project;
using GlobalSolusindo.Business.Project.DML;
using GlobalSolusindo.Business.Project.EntryForm;
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
        private const string createRole = "Project_Input";
        private const string updateRole = "Project_Edit";
        private const string readRole = "Project_ViewAll";
        private const string deleteRole = "Project_Delete";
        private const string importRole = "Project_Import";

        public ProjectController()
        {
        }

        [Route("project/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
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
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
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
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var projectQuery = new ProjectQuery(Db))
            {
                var data = projectQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("project")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]ProjectDTO project)
        {
            ThrowIfUserHasNoRole(createRole);
            if (project == null)
                throw new KairosException("Missing model parameter");

            if (project.Project_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var projectCreateHandler = new ProjectCreateHandler(Db, ActiveUser, new ProjectValidator(), new ProjectFactory(Db, ActiveUser), new ProjectQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = projectCreateHandler.Save(projectDTO: project, dateStamp: DateTime.Now);
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
            ThrowIfUserHasNoRole(updateRole);
            if (project == null)
                throw new KairosException("Missing model parameter");

            if (project.Project_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var projectUpdateHandler = new ProjectUpdateHandler(Db, ActiveUser, new ProjectValidator(), new ProjectFactory(Db, ActiveUser), new ProjectQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = projectUpdateHandler.Save(project, DateTime.Now);
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
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

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
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
