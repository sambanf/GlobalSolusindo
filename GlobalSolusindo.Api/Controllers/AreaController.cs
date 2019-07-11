using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.Area.EntryForm;
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
    public class AreaController : ApiControllerBase
    {
        private const string createRole = "Area_Input";
        private const string updateRole = "Area_Edit";
        private const string readRole = "Area_ViewAll";
        private const string deleteRole = "Area_Delete";
        private const string importRole = "Area_Import";

        public AreaController()
        {
        }

        [Route("area/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (AreaQuery areaQuery = new AreaQuery(Db))
            {
                var data = areaQuery.GetByPrimaryKey(id);
                SaveLog("Area", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("area/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (AreaEntryDataProvider areaEntryDataProvider = new AreaEntryDataProvider(Db, ActiveUser, AccessControl, new AreaQuery(Db)))
            {
                var data = areaEntryDataProvider.Get(id);
                SaveLog("Area", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("area/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AreaSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var areaQuery = new AreaQuery(Db))
            {
                var data = areaQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("area")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AreaDTO area)
        {
            ThrowIfUserHasNoRole(createRole);
            if (area == null)
                throw new KairosException("Missing model parameter");

            if (area.Area_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var areaCreateHandler = new AreaCreateHandler(Db, ActiveUser, new AreaValidator(), new AreaFactory(Db, ActiveUser), new AreaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = areaCreateHandler.Save(areaDTO: area, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("area")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AreaDTO area)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (area == null)
                throw new KairosException("Missing model parameter");

            if (area.Area_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var areaUpdateHandler = new AreaUpdateHandler(Db, ActiveUser, new AreaValidator(), new AreaFactory(Db, ActiveUser), new AreaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = areaUpdateHandler.Save(area, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("area")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var areaDeleteHandler = new AreaDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Area>>();

                    foreach (var id in ids)
                    {
                        result.Add(areaDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
