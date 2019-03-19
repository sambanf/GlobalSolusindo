using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Position;
using GlobalSolusindo.Identity.Position.DML;
using GlobalSolusindo.Identity.Position.EntryForm;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class PositionController : ApiControllerBase
    {
        public PositionController()
        {
        }

        [Route("position/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Position_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (PositionQuery positionQuery = new PositionQuery(Db))
            {
                var data = positionQuery.GetByPrimaryKey(id);
                SaveLog("Position", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("position/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Position_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (PositionEntryDataProvider positionEntryDataProvider = new PositionEntryDataProvider(Db, ActiveUser, AccessControl, new PositionQuery(Db)))
            {
                var data = positionEntryDataProvider.Get(id);
                SaveLog("Position", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("position/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]PositionSearchFilter filter)
        {
            string accessType = "Position_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var positionSearch = new PositionSearch(Db))
            {
                var data = positionSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("position")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]PositionDTO position)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (position == null)
                throw new KairosException("Missing model parameter");

            if (position.Position_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var positionCreateHandler = new PositionCreateHandler(Db, ActiveUser, new PositionValidator(), new PositionFactory(Db, ActiveUser), new PositionQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = positionCreateHandler.Save(positionDTO: position, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("position")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]PositionDTO position)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (position == null)
                throw new KairosException("Missing model parameter");

            if (position.Position_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var positionUpdateHandler = new PositionUpdateHandler(Db, ActiveUser, new PositionValidator(), new PositionFactory(Db, ActiveUser), new PositionQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = positionUpdateHandler.Save(position, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("position")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

            using (var positionDeleteHandler = new PositionDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Position>>();

                    foreach (var id in ids)
                    {
                        result.Add(positionDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
