using GlobalSolusindo.Business.Technology;
using GlobalSolusindo.Business.Technology.DML;
using GlobalSolusindo.Business.Technology.EntryForm;
using GlobalSolusindo.Business.Technology.Queries;
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
    public class TechnologyController : ApiControllerBase
    {
        private const string createRole = "Technology_Input";
        private const string updateRole = "Technology_Edit";
        private const string readRole = "Technology_ViewAll";
        private const string deleteRole = "Technology_Delete";
        private const string importRole = "Technology_Import";

        public TechnologyController()
        {
        }

        [Route("technology/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (TechnologyQuery technologyQuery = new TechnologyQuery(Db))
            {
                var data = technologyQuery.GetByPrimaryKey(id);
                SaveLog("Technology", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("technology/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0) ThrowIfUserHasNoRole(readRole);
            using (TechnologyEntryDataProvider technologyEntryDataProvider = new TechnologyEntryDataProvider(Db, ActiveUser, AccessControl, new TechnologyQuery(Db)))
            {
                var data = technologyEntryDataProvider.Get(id);
                SaveLog("Technology", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("technology/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TechnologySearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var technologySearch = new TechnologySearch(Db))
            {
                var data = technologySearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("technology")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]TechnologyDTO technology)
        {
            ThrowIfUserHasNoRole(createRole);
            if (technology == null)
                throw new KairosException("Missing model parameter");

            if (technology.Technology_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var technologyCreateHandler = new TechnologyCreateHandler(Db, ActiveUser, new TechnologyValidator(), new TechnologyFactory(Db, ActiveUser), new TechnologyQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = technologyCreateHandler.Save(technologyDTO: technology, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("technology")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]TechnologyDTO technology)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (technology == null)
                throw new KairosException("Missing model parameter");

            if (technology.Technology_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var technologyUpdateHandler = new TechnologyUpdateHandler(Db, ActiveUser, new TechnologyValidator(), new TechnologyFactory(Db, ActiveUser), new TechnologyQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = technologyUpdateHandler.Save(technology, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("technology")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var technologyDeleteHandler = new TechnologyDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Technology>>();

                    foreach (var id in ids)
                    {
                        result.Add(technologyDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();

                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
