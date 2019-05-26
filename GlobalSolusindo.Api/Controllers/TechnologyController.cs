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
        public TechnologyController()
        {
        }

        [Route("technology/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Technology_ViewAll";
            ThrowIfUserHasNoRole(accessType);
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
            string accessType = "Technology_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
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
            string accessType = "Technology_ViewAll";
            ThrowIfUserHasNoRole(accessType);
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
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
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
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
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
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

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
